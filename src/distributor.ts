import { NS } from "../types/bitburner"
import { killAll } from "./killAll"
import { getHackCost } from "./getHackCost"
import { getNetworkThreads } from "./getNetworkThreads"
import { getAvailableServerThreads } from "./getAvailableServerThreads"
import { shutup } from "./shutup"
import { scrape } from "./scrape"

const SCRIPTS = {
    grow: "grow.js",
    hack: "hack.js",
    weaken: "weaken.js"
}

type Server = {
    server: string
    pid: number
    threads: number
}

type Batch = {
    script: string
    threads: number
    args: [string, number]
    servers: Server[]
}

const generateBatch = (ns: NS, target: string, availableThreads: number): Batch[] => {
    const sleepBuffer = 40 // in milliseconds
    let takeRatio = 0.5
    const extraSecurity = ns.getServerSecurityLevel(target) - ns.getServerMinSecurityLevel(target)
    const availableMoneyRatio =
        1 - (ns.getServerMaxMoney(target) - ns.getServerMoneyAvailable(target)) / ns.getServerMaxMoney(target)
    const secMult = extraSecurity > 0 ? 1 : 0

    // pre-conditioning
    if (extraSecurity > 5) {
        const weakenThreadsRequired = Math.ceil(extraSecurity / 0.05)
        ns.print(
            `Generating precondition (weaken) batch for ${target} (extra: ${
                Math.round((extraSecurity + Number.EPSILON) * 100) / 100
            }, t: ${weakenThreadsRequired})`
        )
        return [{ script: SCRIPTS.weaken, threads: weakenThreadsRequired, args: [target, 0], servers: [] }]
    }

    // also preconditioning
    if (availableMoneyRatio < 0.95) {
        const growRatio = ns.getServerMaxMoney(target) / ns.getServerMoneyAvailable(target)
        const growThreadsRequired = Math.ceil(ns.growthAnalyze(target, growRatio))
        const growSecGrowth = ns.growthAnalyzeSecurity(growThreadsRequired)
        const weakenThreadsRequired = Math.ceil(growSecGrowth / 0.05)
        ns.print(
            `Generating precondition (grow) batch for ${target} (ratio: ${
                Math.round((availableMoneyRatio + Number.EPSILON) * 100) / 100
            }, g: ${growThreadsRequired}, w: ${weakenThreadsRequired})`
        )
        return [
            { script: SCRIPTS.grow, threads: growThreadsRequired, args: [target, 0], servers: [] },
            { script: SCRIPTS.weaken, threads: weakenThreadsRequired, args: [target, 0], servers: [] }
        ]
    }

    let valid = false
    let returnBatch: Batch[] = []
    let decrementer = takeRatio * 0.01
    while (!valid && takeRatio > 0) {
        const now = new Date().valueOf()
        const toTake = Math.min(ns.getServerMaxMoney(target) * takeRatio, ns.getServerMoneyAvailable(target))
        const hackThreadsRequired = Math.floor(ns.hackAnalyzeThreads(target, toTake))
        const hackSecGrowth = ns.hackAnalyzeSecurity(hackThreadsRequired)
        const weaken1ThreadsRequired = Math.ceil((hackSecGrowth + extraSecurity * secMult) / 0.05)
        const growRatio = Math.max(ns.getServerMaxMoney(target) / (ns.getServerMoneyAvailable(target) - toTake + 1), 1)
        const growThreadsRequired = Math.ceil(ns.growthAnalyze(target, growRatio))
        const growSecGrowth = ns.growthAnalyzeSecurity(growThreadsRequired)
        const weaken2ThreadsRequired = Math.ceil(growSecGrowth / 0.05)

        const hackSleep = ns.getWeakenTime(target) + now
        const weaken1Sleep = ns.getWeakenTime(target) + sleepBuffer + now
        const growSleep = ns.getWeakenTime(target) + sleepBuffer * 2 + now
        const weaken2Sleep = ns.getWeakenTime(target) + sleepBuffer * 3 + now

        if (
            hackThreadsRequired + growThreadsRequired + weaken1ThreadsRequired + weaken2ThreadsRequired <
            availableThreads
        ) {
            returnBatch = [
                {
                    script: SCRIPTS.weaken,
                    threads: weaken1ThreadsRequired,
                    args: [target, weaken1Sleep],
                    servers: []
                },
                { script: SCRIPTS.weaken, threads: weaken2ThreadsRequired, args: [target, weaken2Sleep], servers: [] },
                { script: SCRIPTS.hack, threads: hackThreadsRequired, args: [target, hackSleep], servers: [] },
                { script: SCRIPTS.grow, threads: growThreadsRequired, args: [target, growSleep], servers: [] }
            ]
            valid = true
        } else {
            takeRatio -= decrementer
        }
    }

    return returnBatch
}

export const distributeBatchToNetwork = async (ns: NS, workers: { [k in string]: Worker }, batch: Batch[]) => {
    const toDistribute = []

    for (let op of batch) {
        let threadsRequired = op.threads
        let execs: { [k in string]: { threads: number } } = {}
        let abandon = false
        while (threadsRequired > 0 && !abandon) {
            // ns.print(`required threads left: ${threadsRequired}`)
            const server = Object.values(workers).find((server) => server.availableThreads >= 1)
            if (server != null) {
                if (workers[server.name].availableThreads >= threadsRequired) {
                    workers[server.name].availableThreads -= threadsRequired
                    execs[server.name] = { threads: threadsRequired }
                    threadsRequired = 0
                } else {
                    threadsRequired -= workers[server.name].availableThreads
                    execs[server.name] = { threads: workers[server.name].availableThreads }
                    workers[server.name].availableThreads = 0
                }
            } else {
                abandon = true
            }
            await ns.sleep(50)
        }

        toDistribute.push({ op: op, execs: execs })
    }

    // ns.tprint(toDistribute)

    // [
    // 	{ "op": { "script": "hack.js", "threads": 121, "args": ["n00dles", 25125] }, "execs": { "n00dles": 2, "foodnstuff": 9, "sigma-cosmetics": 9, "joesguns": 9, "hong-fang-tea": 9, "harakiri-sushi": 9, "iron-gym": 18, "chungus": 56 } },
    // 	{ "op": { "script": "weaken.js", "threads": 5, "args": ["n00dles", 40] }, "execs": { "chungus": 5 } },
    // 	{ "op": { "script": "grow.js", "threads": 7, "args": ["n00dles", 6780] }, "execs": { "chungus": 7 } },
    // 	{ "op": { "script": "weaken.js", "threads": 1, "args": ["n00dles", 120] }, "execs": { "chungus": 1 }, servers: [ { server: "chungus", pid: 91, threads: 1 } ] }
    // ]

    toDistribute.forEach((order) => {
        Object.entries(order.execs).forEach(([server, props]) => {
            const pid = ns.exec(order.op.script, server, props.threads, ...order.op.args)
            // ns.print(`Started ${order.op.script} (PID ${pid}) on ${server} (t=${props.threads}) with args ${order.op.args}`)
            if (pid > 0) {
                order.op.servers.push({ server: server, pid: pid, threads: props.threads })
            }
        })
    })
}

const getWorkpoolThreads = (ns: NS, workers: { [k in string]: Worker }) => {
    return Object.values(workers).reduce((acc, server) => {
        return acc + server.availableThreads
    }, 0)
}

type Worker = {
    name: string
    availableThreads: number
}

type Target = {
    name: string
    batch: Batch[]
}

export async function main(ns: NS) {
    shutup(ns)
    ns.tail()

    const servers = Object.keys(scrape(ns))
    killAll(ns)

    ns.tprint(`Available threads: ${getNetworkThreads(ns, "grow.js")}`)

    // let targets = servers
    //     .filter((server) => ns.hasRootAccess(server))
    //     .map((server): [string, number] => [server, getHackCost(ns, server)])
    //     .filter((server) => server[1] > 0 && server[0] != "foodnstuff")
    //     .sort((a, b) => b[1] - a[1])
    //     .map((server) => {
    //         return { name: server[0], batch: [] as Batch[] }
    //     })

    const targets = [
        { name: "n00dles", batch: [] },
        { name: "sigma-cosmetics", batch: [] },
        { name: "max-hardware", batch: [] }
        // { name: "harakiri-sushi", batch: [] },
        // { name: "phantasy", batch: [] }
    ].filter((server) => ns.hasRootAccess(server.name))

    ns.print("targets ", targets)

    // const workerNames = ["home"].concat(ns.getPurchasedServers().filter((server) => server.includes("helper")))

    const workerNames = servers.filter(
        (server) => ns.hasRootAccess(server) && getAvailableServerThreads(ns, server, SCRIPTS.weaken) > 1
    )

    const workers: { [k in string]: Worker } = {}

    for (let server of workerNames) {
        await ns.scp([SCRIPTS.grow, SCRIPTS.hack, SCRIPTS.weaken], server)
        workers[server] = {
            name: server,
            // server: ns.getServer(server),
            availableThreads: getAvailableServerThreads(ns, server, SCRIPTS.weaken)
        }
    }

    let working: Target[] = []

    while (true) {
        const workingNames = working.map((server) => server.name)
        const idle = targets
            .filter((server) => !workingNames.includes(server.name))
            .map((server): [string, number] => [server.name, getHackCost(ns, server.name)])
            .sort((a, b) => b[1] - a[1])
            .map((server) => {
                return { name: server[0], batch: [] as Batch[] }
            })

        for (let toAssign of idle) {
            const availableThreads = getWorkpoolThreads(ns, workers)
            if (availableThreads > 1) {
                ns.print(`trying to assign ${toAssign.name}`)
                const batch = generateBatch(ns, toAssign.name, availableThreads)
                ns.print(`batch: ${JSON.stringify(batch)}`)
                if (batch.length > 0) {
                    toAssign.batch = batch
                    await distributeBatchToNetwork(ns, workers, toAssign.batch)
                    ns.print(`generated batch for ${toAssign.name}: ${JSON.stringify(toAssign.batch)}`)
                    if (toAssign.batch.some((op) => op.servers.length > 0)) {
                        ns.print(`successfully assigned batch for ${toAssign.name}`)
                        working.push(toAssign)
                    } else {
                        ns.print(`no threads available for batch for ${toAssign.name}`)
                        break
                    }
                }
            }
        }

        // check for working done
        for (let target of working) {
            for (let op of target.batch) {
                for (let server of op.servers) {
                    if (!ns.isRunning(server.pid, server.server)) {
                        // ns.print(`finished running PID ${server.pid} on ${server.server}, releasing`)
                        // release threads
                        workers[server.server].availableThreads += server.threads
                        server.pid = -1
                    }
                }
                op.servers = op.servers.filter((server) => server.pid > 0)
            }

            target.batch = target.batch.filter((op) => op.servers.length > 0)
        }

        working = working.filter((work) => work.batch.length > 0)

        await ns.asleep(100)
    }
}
