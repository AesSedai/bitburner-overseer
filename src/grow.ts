import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    const scriptStart = new Date().valueOf()
    const host = ns.args[0]
    const target = ns.args[1]
    const sleepFor = ns.args[2]
    const batchId = ns.args[3]
    const batchThreads = ns.args[4]
    const opIdx = ns.args[5]
    const opCount = ns.args[6]
    const tag = ns.args[7]
    const minSec = ns.args[8]
    if (
        typeof host === "string" &&
        typeof target === "string" &&
        typeof sleepFor === "number" &&
        typeof batchId === "number" &&
        typeof batchThreads === "number" &&
        typeof tag === "string" &&
        typeof opIdx === "number" &&
        typeof opCount === "number" &&
        typeof minSec === "number"
    ) {
        const sleepStart = new Date().valueOf()
        await ns.sleep(sleepFor)
        const sleepEnd = new Date().valueOf()

        const securityBefore = ns.getServerSecurityLevel(target)
        const moneyBefore = ns.getServerMoneyAvailable(target)
        await ns.grow(target)
        const scriptEnd = new Date().valueOf()

        const info = ns.getRunningScript()

        const data = [
            JSON.stringify({
                host: host,
                target: target,
                sleepFor: sleepFor,
                batchId: batchId,
                batchThreads: batchThreads,
                opIdx: opIdx,
                opCount: opCount,
                tag: tag,
                scriptStart: scriptStart,
                sleepStart: sleepStart,
                sleepEnd: sleepEnd,
                scriptEnd: scriptEnd,
                securityBefore: securityBefore,
                moneyBefore: moneyBefore,
                security: ns.getServerSecurityLevel(target),
                money: ns.getServerMoneyAvailable(target),
                threads: info.threads
            })
        ]

        let tries = 0
        let maxTries = 5

        while (tries < maxTries && !(await ns.tryWritePort(1, data))) {
            tries += 1
            await ns.asleep(100)
        }
    }
}
