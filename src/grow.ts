import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    const target = ns.args[0]
    const duration = ns.args[1]

    if (typeof target === "string" && typeof duration === "number") {
        await ns.sleep(duration)
        await ns.grow(target)
    }
}
