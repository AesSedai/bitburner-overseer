import { NS } from "../types/bitburner"

const estimateFinish = (ns: NS, target: string): number => {
    return new Date().valueOf() + ns.getHackTime(target)
}

export async function main(ns: NS) {
    const target = ns.args[0]
    const finishAt = ns.args[1]

    if (typeof target === "string" && typeof finishAt === "number") {
        let estimate: number
        while ((estimate = estimateFinish(ns, target)) < finishAt) {
            await ns.sleep(Math.max(finishAt - estimate, 5))
        }
        await ns.hack(target)
    }
}
