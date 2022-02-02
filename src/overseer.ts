import { NS } from "../types/bitburner"
import { getHackCost } from "./getHackCost"
import { pwn } from "./pwn"
import { shutup } from "./shutup"
import { scrape } from "./scrape"

const SCRIPTS = {
    grow: "grow.js",
    hack: "hack.js",
    weaken: "weaken.js"
}

let _ns: NS
const SECURITY_THRESHOLD = 0.25
const MONEY_THRESHOLD = 0.98
const SLEEP_BUFFER = 30
const BASE_TAKE_RATIO = 0.5
const FREE_THREAD_RATIO_THRESHOLD = 0.1
const WORKER_SERVER_NAME = "worker"
const MAX_RUNTIME = new Date().valueOf() + 2 * 60 * 60 * 1000 // 2 hours

type EnqueueOpResult = {
    success: boolean
    remainder: number
}

class Worker {
    name: string
    availableThreads: number = 0
    reservedRam: number = 0
    pendingQueue: Operation[] = []

    constructor(name: string, reservedRam: number = 0) {
        this.name = name
        this.reservedRam = reservedRam
        // this.availableThreads = Math.max(0, Math.floor(this.getAvailableRam() / this.#ns.getScriptRam(SCRIPTS.weaken)))
    }

    getAvailableRam = (): number => {
        return _ns.getServerMaxRam(this.name) - _ns.getServerUsedRam(this.name) - this.reservedRam
    }

    getAvailableThreads = (script: string = SCRIPTS.weaken): number => {
        return (
            Math.max(0, Math.floor(this.getAvailableRam() / _ns.getScriptRam(SCRIPTS.weaken))) -
            this.getPendingThreads()
        )
    }

    getMaxThreads = (): number => {
        return Math.floor(_ns.getServerMaxRam(this.name) / _ns.getScriptRam(SCRIPTS.weaken))
    }

    getPendingThreads = (): number => {
        return this.pendingQueue.reduce((acc, op) => acc + op.threads, 0)
    }

    clearPendingQueue = () => {
        this.pendingQueue = []
    }

    enqueueOp = (op: Operation, threadsRequired: number): EnqueueOpResult => {
        const result = {
            success: false,
            remainder: threadsRequired
        }
        const available = this.getAvailableThreads()
        // this.#ns.tprint(
        //     `[${this.name}] required: ${threadsRequired} / pending queue length: ${this.pendingQueue.length} / available: ${available}`
        // )
        if (available >= threadsRequired) {
            this.pendingQueue.push({ ...op, threads: threadsRequired })
            result.success = true
            result.remainder = 0
        } else if (available > 0) {
            this.pendingQueue.push({ ...op, threads: available })
            result.success = true
            result.remainder = threadsRequired - available
        }
        return result
    }

    executeQueue = () => {
        for (let op of this.pendingQueue) {
            // this.#ns.tprint(`[${this.name}] executing ${JSON.stringify(op)}`)
            const nonce = Math.random()
            if (op.threads === 0) {
                _ns.tprint(`[${this.name}] OP threads should not be 0: ${JSON.stringify(op)}`)
            }
            const pid = _ns.exec(op.script, this.name, op.threads, ...getOperationArgs(op), nonce)
            if (pid === 0) {
                _ns.tprint(
                    `[${this.name}] pid should not be 0. AvailableThreads: ${
                        this.availableThreads
                    } getAvailableRam: ${this.getAvailableRam()} getAvailableThreads: ${this.getAvailableThreads()} Server: ${
                        this.name
                    }, Script: ${op.script}, ${op.threads}`
                )
            }
        }
        this.pendingQueue = []
    }
}

class Target {
    name: string
    preconditioning: boolean = false
    scheduleAfter: number = new Date().valueOf()

    constructor(name: string) {
        this.name = name
    }

    getHackCost = () => {
        return getHackCost(_ns, this.name)
    }

    getAvailableMoneyRatio = () => {
        return (
            1 -
            (_ns.getServerMaxMoney(this.name) - _ns.getServerMoneyAvailable(this.name)) /
                _ns.getServerMaxMoney(this.name)
        )
    }

    getExtraSecurity = () => {
        return _ns.getServerSecurityLevel(this.name) - _ns.getServerMinSecurityLevel(this.name)
    }

    isOptimal = () => {
        if (this.getExtraSecurity() > SECURITY_THRESHOLD || this.getAvailableMoneyRatio() < MONEY_THRESHOLD) {
            return false
        }
        return true
    }
}

type Operation = {
    script: string
    threads: number
    target: string
    finishAt: number
    nonce?: number
    pid?: number
    startedAt?: number
}

const getOperationArgs = (op: Operation) => {
    return [op.target, op.finishAt]
}

const getMaxThreads = (workers: Worker[]) => {
    return workers.reduce((acc, worker) => acc + worker.getMaxThreads(), 0)
}

const getAvailableThreads = (workers: Worker[]) => {
    return workers.reduce((acc, worker) => acc + worker.getAvailableThreads(), 0)
}

const niceRound = (n: number): number => {
    return Math.round((n + Number.EPSILON) * 100) / 100
}

const generatePreconditionOps = (target: Target, workers: Worker[]): Operation[] => {
    // ns.tprint(`[${target.name}] generating precondition ops`)
    const operations: Operation[] = []
    let availableThreads = getAvailableThreads(workers)
    let weakenThreadsRequired = Math.ceil(target.getExtraSecurity() / 0.05)
    let prevWeaken = false

    // weaken pre-conditioning
    if (target.getExtraSecurity() > SECURITY_THRESHOLD) {
        const now = new Date().valueOf()
        const minFinishAt = Math.max(target.scheduleAfter, now + _ns.getWeakenTime(target.name))
        const weakenFinishAt = minFinishAt
        prevWeaken = true

        if (weakenThreadsRequired === 0) {
            return []
        } else if (weakenThreadsRequired >= availableThreads) {
            weakenThreadsRequired = availableThreads
            availableThreads = 0
            // ns.print(
            //     `Generating partial precondition (weaken) batch for ${target.name} (extra: ${
            //         Math.round((target.getExtraSecurity() + Number.EPSILON) * 100) / 100
            //     }, t: ${weakenThreadsRequired})`
            // )

            operations.push({
                script: SCRIPTS.weaken,
                threads: weakenThreadsRequired,
                finishAt: weakenFinishAt,
                target: target.name
            })
            return operations
        } else {
            // ns.print(
            //     `Generating precondition (weaken) batch for ${target.name} (extra: ${
            //         Math.round((target.getExtraSecurity() + Number.EPSILON) * 100) / 100
            //     }, t: ${weakenThreadsRequired})`
            // )
            operations.push({
                script: SCRIPTS.weaken,
                threads: weakenThreadsRequired,
                finishAt: weakenFinishAt,
                target: target.name
            })
            availableThreads -= weakenThreadsRequired
        }
    }

    if (prevWeaken && availableThreads < 2) {
        return operations
    }

    // grow preconditioning
    if (target.getAvailableMoneyRatio() < MONEY_THRESHOLD) {
        let valid = false
        let decrementer = 1
        while (!valid && decrementer > 0) {
            const now = new Date().valueOf()
            const minFinishAt = Math.max(target.scheduleAfter, now + _ns.getWeakenTime(target.name))
            const growRatio = Math.max(
                (_ns.getServerMaxMoney(target.name) / _ns.getServerMoneyAvailable(target.name)) * 1.1 * decrementer,
                1
            )
            const growThreadsRequired = Math.ceil(_ns.growthAnalyze(target.name, growRatio))
            const growSecGrowth = _ns.growthAnalyzeSecurity(growThreadsRequired)
            const weakenThreadsRequired = Math.ceil(growSecGrowth / 0.05)

            const growFinishAt = minFinishAt + (prevWeaken ? SLEEP_BUFFER : 0)
            const weakenFinishAt = minFinishAt + SLEEP_BUFFER + (prevWeaken ? SLEEP_BUFFER : 0)

            if (growThreadsRequired === 0 || weakenThreadsRequired === 0) {
                decrementer = 0
            } else if (growThreadsRequired + weakenThreadsRequired < availableThreads) {
                // ns.print(
                //     `Generating precondition (grow) batch for ${target.name} (ratio: ${
                //         Math.round((target.getAvailableMoneyRatio() + Number.EPSILON) * 100) / 100
                //     }, g: ${growThreadsRequired}, w: ${weakenThreadsRequired})`
                // )

                operations.push(
                    {
                        script: SCRIPTS.grow,
                        threads: growThreadsRequired,
                        finishAt: growFinishAt,
                        target: target.name
                    },
                    {
                        script: SCRIPTS.weaken,
                        threads: weakenThreadsRequired,
                        finishAt: weakenFinishAt,
                        target: target.name
                    }
                )
                valid = true
            } else {
                decrementer -= 0.01
            }
        }
    }

    // ns.tprint(`[${target.name}] completed precondition ops`)
    return operations
}

const generateHackOps = (target: Target, workers: Worker[]) => {
    // ns.tprint(`[${target.name}] generating hack ops`)
    let operations: Operation[] = []
    let takeRatio = BASE_TAKE_RATIO
    const secMult = target.getExtraSecurity() > 0 ? 1 : 0
    const availableThreads = getAvailableThreads(workers)

    let valid = false
    const decrementer = takeRatio * 0.01
    while (!valid && takeRatio > 0) {
        const now = new Date().valueOf()
        const minFinishAt = Math.max(target.scheduleAfter, now + _ns.getWeakenTime(target.name))
        const toTake = _ns.getServerMaxMoney(target.name) * takeRatio
        const hackThreadsRequired = Math.floor(_ns.hackAnalyzeThreads(target.name, toTake))
        const hackSecGrowth = _ns.hackAnalyzeSecurity(hackThreadsRequired) * 1.1
        const weaken1ThreadsRequired = Math.ceil((hackSecGrowth + target.getExtraSecurity() * secMult) / 0.05)
        const growRatio = Math.max(
            (_ns.getServerMaxMoney(target.name) / (_ns.getServerMoneyAvailable(target.name) - toTake + 1)) * 1.1,
            1
        )
        const growThreadsRequired = Math.ceil(_ns.growthAnalyze(target.name, growRatio))
        const growSecGrowth = _ns.growthAnalyzeSecurity(growThreadsRequired) * 1.1
        const weaken2ThreadsRequired = Math.ceil(growSecGrowth / 0.05)

        const hackFinishAt = minFinishAt
        const weaken1FinishAt = minFinishAt + SLEEP_BUFFER
        const growFinishAt = minFinishAt + SLEEP_BUFFER * 2
        const weaken2FinishAt = minFinishAt + SLEEP_BUFFER * 3

        if (
            hackThreadsRequired === 0 ||
            weaken1ThreadsRequired === 0 ||
            growThreadsRequired === 0 ||
            weaken2ThreadsRequired === 0
        ) {
            takeRatio = 0
        } else if (
            hackThreadsRequired + growThreadsRequired + weaken1ThreadsRequired + weaken2ThreadsRequired <
            availableThreads
        ) {
            operations = [
                {
                    script: SCRIPTS.hack,
                    threads: hackThreadsRequired,
                    finishAt: hackFinishAt,
                    target: target.name
                },
                {
                    script: SCRIPTS.weaken,
                    threads: weaken1ThreadsRequired,
                    finishAt: weaken1FinishAt,
                    target: target.name
                },
                {
                    script: SCRIPTS.grow,
                    threads: growThreadsRequired,
                    finishAt: growFinishAt,
                    target: target.name
                },
                {
                    script: SCRIPTS.weaken,
                    threads: weaken2ThreadsRequired,
                    finishAt: weaken2FinishAt,
                    target: target.name
                }
            ]
            valid = true
        } else {
            takeRatio -= decrementer
        }
    }

    // ns.tprint(`[${target.name}] completed hack ops`)
    return operations
}

export const distributeToNetwork = (
    target: Target,
    batch: Operation[],
    workers: Worker[],
    precondition: boolean = false
) => {
    // ns.tprint(`[${target.name}] distribute start`)
    const toExecute: { [k in string]: Worker } = {}
    let abandon = false
    let latestFinish = batch.reduce(
        (acc, op) => (acc > op.finishAt ? acc : op.finishAt),
        _ns.getWeakenTime(target.name)
    )

    for (let op of batch) {
        // ns.tprint("Op ", op, " abandon ", abandon)
        const availableWorkers = workers.filter((server) => server.getAvailableThreads() > 0)
        let threadsRequired = op.threads
        for (let worker of availableWorkers) {
            const result = worker.enqueueOp(op, threadsRequired)
            // ns.tprint(`Enqueue on ${worker.name} result: ${JSON.stringify(result)}`)
            if (result.success) {
                threadsRequired = result.remainder
                if (toExecute[worker.name] == null) {
                    toExecute[worker.name] = worker
                }
            }
            // ns.tprint(`remaining threads: ${threadsRequired}`)
            if (threadsRequired === 0) {
                break
            }
        }
        if (threadsRequired > 0) {
            abandon = true
            break
        }
    }

    for (let worker of Object.values(toExecute)) {
        if (abandon) {
            worker.clearPendingQueue()
        } else {
            worker.executeQueue()
        }
    }
    // ns.tprint(`[${target.name}] Assign / abandon finished`)

    if (!abandon) {
        target.scheduleAfter = latestFinish + SLEEP_BUFFER

        if (precondition) {
            target.preconditioning = true
        }
    }

    // ns.tprint(`[${target.name}] distribute complete`)
}

type ConfigProps = {
    reservedPlayerRAM: number
    reservedCompanyRAM: number
    useHome: boolean
    usePurchased: boolean
    useNetwork: boolean
    killOtherScripts: boolean
    scriptAllowlist: string[]
    excludeList: string[]
    excludeListReverse: string[]
}

type Config = {
    allServers: string[]
    playerServers: string[]
    companyServers: string[]
    purchasedServers: string[]
    workers: Worker[]
    precondition: Target[]
    optimized: Target[]
}

const doConfigure = async (props: ConfigProps, previousConfig?: Config): Promise<Config> => {
    // list of all server names and player purchased server names
    let allServers = Object.keys(scrape(_ns))
    let playerServers = _ns.getPurchasedServers()

    // list of rooted company servers, filtered by above lists
    let companyServers = allServers
        .filter((name) => name !== "home")
        .filter((name) => !playerServers.includes(name))
        .filter((name) => !props.excludeList.includes(name))
        .filter((name) => !props.excludeListReverse.some((e) => name.includes(e)))
        .filter((name) => pwn(_ns, name))

    let targetServers = allServers
        .filter((name) => name !== "home")
        .filter((name) => !playerServers.includes(name))
        .filter((name) => !props.excludeList.includes(name))
        .filter((name) => !props.excludeListReverse.some((e) => name.includes(e)))
        .filter((name) => pwn(_ns, name))

    // filter out the "hard" to precondition ones if there are still quicker targets (10 minute limit)
    if (targetServers.filter((name) => _ns.getWeakenTime(name) < 10 * 60 * 1000).length !== 0) {
        targetServers = targetServers.filter((name) => _ns.getWeakenTime(name) < 10 * 60 * 1000)
    }

    // list of purchased servers, filtered by above lists
    let purchasedServers = playerServers
        .filter((name) => !props.excludeList.includes(name))
        .filter((name) => !props.excludeListReverse.some((e) => name.includes(e)))

    let workers: Worker[] = []
    let optimized: Target[] = []
    let precondition: Target[] = []

    // need to make sure we don't destroy / recreate the existing workers
    if (previousConfig != null) {
        workers = previousConfig.workers
        optimized = previousConfig.optimized
        precondition = previousConfig.precondition

        let existingWorkerNames = workers.map((worker) => worker.name)
        let existingOptimize = optimized.map((target) => target.name)
        let existingPrecondition = precondition.map((target) => target.name)
        let existingTargetNames = existingOptimize.concat(existingPrecondition)

        let workerNames: string[] = []
        if (props.useHome) {
            workerNames = workerNames.concat("home")
        }

        if (props.usePurchased) {
            workerNames = workerNames.concat(purchasedServers)
        }

        if (props.useNetwork) {
            workerNames = workerNames.concat(companyServers)
        }

        const newWorkers = workerNames.filter((name) => !existingWorkerNames.includes(name))
        if (newWorkers.length > 0) {
            for (let workerName of newWorkers) {
                const ram = companyServers.includes(workerName) ? props.reservedCompanyRAM : props.reservedPlayerRAM
                const worker = new Worker(workerName, ram)
                if (worker.getAvailableThreads() > 1) {
                    _ns.print(`Adding new worker: ${JSON.stringify(worker)}`)
                    await _ns.scp([SCRIPTS.grow, SCRIPTS.hack, SCRIPTS.weaken], worker.name)
                    workers.push(worker)
                }
            }
        }

        // let demoted = optimized.filter((target) => !target.isOptimal())
        let promoted = precondition.filter((target) => target.isOptimal())

        // optimized.push(...promoted)
        // precondition.push(...demoted)

        for (let promo of promoted) {
            _ns.print(`Promoted: ${JSON.stringify(promo.name)}`)
            optimized.push(promo)
        }

        precondition = precondition.filter((target) => !target.isOptimal())

        // for (let demo of demoted) {
        //     ns.print(`Demoted: ${JSON.stringify(demo)}`)
        //     let idx = optimized.findIndex((target) => target.name === demo.name)
        //     if (idx !== -1) {
        //         optimized.slice(idx, 1)
        //     }
        // }

        let newTargets = targetServers
            .filter((name) => _ns.getServerMaxMoney(name) > 0 && _ns.getServerMoneyAvailable(name) > 0)
            .filter((name) => !existingTargetNames.includes(name))
            .map((name) => new Target(name))
            .sort((a, b) => b.getHackCost() - a.getHackCost())

        if (newTargets.length > 0) {
            let newOptimal = newTargets.filter((target) => target.isOptimal())
            for (let target of newOptimal) {
                _ns.print(`Adding new target as optimized: ${JSON.stringify(target)}`)
                target.preconditioning = false
                optimized.push(target)
            }

            let newPrecondition = newTargets.filter((target) => !target.isOptimal())
            for (let target of newPrecondition) {
                _ns.print(`Adding new target as precondition: ${JSON.stringify(target)}`)
                precondition.push(target)
            }
        }

        optimized.sort((a, b) => b.getHackCost() - a.getHackCost())
        precondition.sort((a, b) => b.getHackCost() - a.getHackCost())
    } else {
        let workerNames: string[] = []
        if (props.useHome) {
            workerNames = workerNames.concat("home")
        }

        if (props.usePurchased) {
            workerNames = workerNames.concat(purchasedServers)
        }

        if (props.useNetwork) {
            workerNames = workerNames.concat(companyServers)
        }

        if (workerNames.length > 0) {
            for (let workerName of workerNames) {
                const ram = companyServers.includes(workerName) ? props.reservedCompanyRAM : props.reservedPlayerRAM
                const worker = new Worker(workerName, ram)
                if (worker.getAvailableThreads() > 1) {
                    _ns.print(`Adding new worker: ${JSON.stringify(worker)}`)
                    await _ns.scp([SCRIPTS.grow, SCRIPTS.hack, SCRIPTS.weaken], worker.name)
                    workers.push(worker)
                }
            }
        }

        let allTargets = targetServers
            .filter((name) => _ns.getServerMaxMoney(name) > 0 && _ns.getServerMoneyAvailable(name) > 0)
            .map((name) => new Target(name))
            .sort((a, b) => b.getHackCost() - a.getHackCost())

        if (allTargets.length > 0) {
            let newOptimal = allTargets.filter((target) => target.isOptimal())
            for (let target of newOptimal) {
                _ns.print(`Adding new target as optimized: ${JSON.stringify(target)}`)
                target.preconditioning = false
                optimized.push(target)
            }

            let newPrecondition = allTargets.filter((target) => !target.isOptimal())
            for (let target of newPrecondition) {
                _ns.print(`Adding new target as precondition: ${JSON.stringify(target)}`)
                precondition.push(target)
            }
        }

        // ns.print(`Workers: ${JSON.stringify(workers)}`)
        // ns.print(`Optimized: ${JSON.stringify(optimized)}`)
        // ns.print(`Precondition: ${JSON.stringify(precondition)}`)
    }

    return {
        allServers: allServers,
        playerServers: playerServers,
        companyServers: companyServers,
        purchasedServers: purchasedServers,
        workers: workers,
        precondition: precondition,
        optimized: optimized
    }
}

const maybeBuyServer = (config: Config): string => {
    const ts = new Date()
    const now = `${ts.toLocaleDateString()} ${ts.toLocaleTimeString()}`
    let result = ""
    // do we need to buy a server?
    if ((getAvailableThreads(config.workers) / getMaxThreads(config.workers)) * 1.0 < FREE_THREAD_RATIO_THRESHOLD) {
        //  can we buy a new one?
        const limit = _ns.getPurchasedServerLimit()
        let purchased = _ns.getPurchasedServers()

        if (purchased.length === limit) {
            // can we sell a smaller one?
            purchased = _ns.getPurchasedServers().filter((name) => name.includes(WORKER_SERVER_NAME))
            if (purchased.length > 0) {
                const smallest = purchased.reduce(
                    (acc, server) => (_ns.getServerMaxRam(server) < _ns.getServerMaxRam(acc) ? server : acc),
                    purchased[0]
                )
                if (_ns.getServerMaxRam(smallest) < 1048576) {
                    _ns.deleteServer(smallest)
                } else {
                    result = `[${now}] Want to buy server, but currently all worker nodes are fully upgraded.`
                }
            } else {
                result = `[${now}] Want to buy server, but currently at purchased server limit and there are no worker nodes to upgrade.`
            }
            purchased = _ns.getPurchasedServers()
        }

        if (purchased.length < limit) {
            // don't buy a smaller server, min size is 1tb and max size is 1pb.
            const minServerSize = Math.min(
                Math.max(
                    purchased.reduce(
                        (acc, server) => (_ns.getServerMaxRam(server) > acc ? _ns.getServerMaxRam(server) : acc),
                        0
                    ) * 2,
                    1 * 1024
                ),
                1048576
            )
            const diff = _ns.getPurchasedServerCost(minServerSize) - _ns.getPlayer().money
            if (diff < 0) {
                const res = _ns.purchaseServer(WORKER_SERVER_NAME, minServerSize)
                if (res.length === 0) {
                    result = `[${now}] Somehow failed to purchase server with ${minServerSize} RAM`
                } else {
                    result = `[${now}] Purchased server with ${minServerSize} RAM`
                }
            } else {
                result = `[${now}] Want to purchase a sever with ${minServerSize} RAM, but no money (${niceRound(
                    (_ns.getPlayer().money / _ns.getPurchasedServerCost(minServerSize)) * 100
                )}%)`
            }
        }
    }

    return result
}

export async function main(ns: NS) {
    _ns = ns
    shutup(_ns)
    _ns.tail()

    const configProps: ConfigProps = {
        // amount of RAM to reserve on a host (in GB) for player and company servers
        reservedPlayerRAM: 0,
        reservedCompanyRAM: 0,
        // use home server as a worker: [true] / false
        useHome: true,
        // use purchased servers as workers: [true] / false
        usePurchased: true,
        // use network servers as workers: true / [false]
        useNetwork: true,
        // option to kill other scripts on worker servers: [true] / false
        killOtherScripts: true,
        // list of script names to not kill, regardless of `killOtherScripts` option
        scriptAllowlist: [_ns.getScriptName()].concat("contracts.js", "share.js", "wget-all.js"),
        // list of servers NOT to use as workers (exact name match)
        excludeList: ["sharing"],
        // list of servers NOT to use as workers (regex-like via inverse `includes`)
        excludeListReverse: ["sharing-"]
    }

    let config = await doConfigure(configProps)

    // ns.tprint(`Available threads: ${getAvailableThreads(ns, config.workers)}`)

    if (configProps.killOtherScripts) {
        for (let worker of config.workers) {
            const processes = _ns.ps(worker.name)
            for (let process of processes) {
                if (!configProps.scriptAllowlist.includes(process.filename)) {
                    _ns.kill(process.filename, worker.name, ...process.args)
                }
            }
        }
    }

    let iters = 0
    let lastPurchaseResult = ""

    while (true) {
        // ~ every second
        if (iters % 25 === 0) {
            let now = new Date()
            if (now.valueOf() > MAX_RUNTIME) {
                // respawn every 2h
                _ns.spawn(_ns.getScriptName())
            }

            // ns.tprint("started config regen")
            config = await doConfigure(configProps, config)
            // ns.tprint("completed config regen")

            _ns.clearLog()
            _ns.print(`=============================================`)
            _ns.print(`Time: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`)
            _ns.print(
                `Available threads: ${getAvailableThreads(config.workers)} / ${getMaxThreads(
                    config.workers
                )} (${niceRound((getAvailableThreads(config.workers) / getMaxThreads(config.workers)) * 100.0)}%)`
            )

            const purchaseResult = maybeBuyServer(config)
            if (purchaseResult.length > 0) {
                lastPurchaseResult = purchaseResult
            }

            if (lastPurchaseResult.length > 0) {
                _ns.print(lastPurchaseResult)
            }

            _ns.print(`Optimized: ${config.optimized.length}, Precondition: ${config.precondition.length}`)

            if (config.optimized.length > 0) {
                let o = config.optimized[0]
                _ns.print(
                    `[O: ${o.name}]: Extrasec: ${niceRound(o.getExtraSecurity())}, Money: ${niceRound(
                        o.getAvailableMoneyRatio()
                    )}, Cost: ${niceRound(o.getHackCost())}`
                )
            }

            if (config.precondition.length > 0) {
                let p = config.precondition[0]
                _ns.print(
                    `[P: ${p.name}]: Extrasec: ${niceRound(p.getExtraSecurity())}, Money: ${niceRound(
                        p.getAvailableMoneyRatio()
                    )}, Cost: ${niceRound(p.getHackCost())}`
                )
            }
            _ns.print(`=============================================`)
        }

        // ns.tprint(`now: ${new Date().valueOf()}`)
        // try to schedule at least the most optimal hack()
        let firstOptimalName = ""
        if (getAvailableThreads(config.workers) > 4 && config.optimized.length > 0) {
            let firstOptimal = config.optimized[0]
            // ns.tprint(`Starting check for optimal[0] ${firstOptimal.name}`)
            firstOptimalName = firstOptimal.name
            let maxCycleTime = _ns.getWeakenTime(firstOptimal.name) * 2
            let now = new Date().valueOf()
            let valid = true
            while (firstOptimal.scheduleAfter < now + maxCycleTime && valid) {
                // ns.tprint(`Trying to schedule optimal[0] ${firstOptimal.name} hack`)
                // ns.print(
                //     `firstOptimal.scheduleAfter: ${
                //         firstOptimal.scheduleAfter
                //     }, now: ${now}, maxCycle: ${maxCycleTime}, now+: ${now + maxCycleTime}`
                // )
                const ops = generateHackOps(firstOptimal, config.workers)
                // ns.tprint("ops ", ops)
                if (ops.length > 0) {
                    // assign / distribute
                    // ns.tprint(`Distributing optimal[0] ${firstOptimal.name} assignment`)
                    distributeToNetwork(firstOptimal, ops, config.workers)
                    // ns.tprint(`Distributed optimal[0] ${firstOptimal.name} assignment`)
                } else {
                    valid = false
                }
                now = new Date().valueOf()
            }
            // ns.tprint(`Completed check for optimal[0] ${firstOptimal.name}`)
        }

        // after, try to schedule optimizing the first precondition
        if (getAvailableThreads(config.workers) > 2 && config.precondition.length > 0) {
            let firstPrecondition = config.precondition[0]
            let now = new Date().valueOf()
            if (firstPrecondition.scheduleAfter < now) {
                // ns.tprint(`Trying to schedule preconditioning[0] ${firstPrecondition.name} conditions`)
                const ops = generatePreconditionOps(firstPrecondition, config.workers)
                // ns.print("precondition ops ", JSON.stringify(ops))
                if (ops.length > 0) {
                    // assign / distribute
                    // ns.tprint(`Distributing preconditioning[0] ${firstPrecondition.name} assignment`)
                    distributeToNetwork(firstPrecondition, ops, config.workers, true)
                    // ns.tprint(`Distributed preconditioning[0] ${firstPrecondition.name} assignment`)
                }
            }
        }

        // try to schedule the remaining hacks
        let exhausted = false
        if (getAvailableThreads(config.workers) > 4) {
            for (let target of config.optimized) {
                if (getAvailableThreads(config.workers) > 4 && !exhausted && target.name !== firstOptimalName) {
                    let maxCycleTime = _ns.getWeakenTime(target.name) * 2
                    let now = new Date().valueOf()
                    let valid = true
                    while (target.scheduleAfter < now + maxCycleTime && valid) {
                        // ns.tprint(`Trying to schedule a target hack for ${target.name}`)
                        const ops = generateHackOps(target, config.workers)
                        if (ops.length > 0) {
                            // ns.print("assign ops ", JSON.stringify(ops))
                            // assign / distribute
                            // ns.tprint(`Distributing ${target.name} hack`)
                            distributeToNetwork(target, ops, config.workers)
                            // ns.tprint(`Distributed ${target.name} hack`)
                        } else {
                            valid = false
                        }
                        now = new Date().valueOf()
                    }
                }
                if (getAvailableThreads(config.workers) <= 4) {
                    exhausted = true
                    break
                }
            }
        }

        // ns.print("config second ", JSON.stringify(config))
        //

        await _ns.asleep(SLEEP_BUFFER)
        iters = (iters + 1) % 10000
    }
}
