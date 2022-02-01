import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    if (ns.args[0] !== "string") {
        ns.print("Target argument must be a string")
        return
    }

    let target = ns.args[0]
    let securityMin = Math.round((ns.getServerMinSecurityLevel(target) + Number.EPSILON) * 100) / 100
    let securityMax = Math.round((securityMin + Number.EPSILON + 5) * 100) / 100
    let moneyMin = Math.round((ns.getServerMaxMoney(target) * 0.75 + Number.EPSILON + 5) * 100) / 100
    while (true) {
        let currentSec = Math.round((ns.getServerSecurityLevel(target) + Number.EPSILON) * 100) / 100
        let currentMoney = Math.round((ns.getServerMoneyAvailable(target) + Number.EPSILON) * 100) / 100
        let moneyPct = Math.round(((currentMoney / moneyMin) * 100 + Number.EPSILON) * 100) / 100
        let log = `Sec: ${currentSec} (${securityMin} / ${securityMax})\tMoney: ${currentMoney} / ${moneyMin} (${moneyPct}%)`
        if (currentSec > securityMax) {
            ns.print("Weakening: ", log)
            await ns.weaken(target)
        } else if (currentMoney < moneyMin) {
            ns.print("Growing: ", log)
            await ns.grow(target)
        } else {
            ns.print("Hacking: ", log)
            await ns.hack(target)
        }
    }
}
