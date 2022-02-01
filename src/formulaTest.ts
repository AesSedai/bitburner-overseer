import { NS } from "../types/bitburner"
import { shutup } from "./shutup"

export async function main(ns: NS) {
    shutup(ns)
    ns.tail()

    const server = "the-hub"

    const maxRam = ns.getPurchasedServerMaxRam()
    ns.tprint(`getHackTime: ${ns.getHackTime(server)}`)
    ns.tprint(`formulas.hackingTime: ${ns.formulas.hacking.hackTime(ns.getServer(server), ns.getPlayer())}`)
    ns.tprint(`getGrowTime: ${ns.getGrowTime(server)}`)
    ns.tprint(`formulas.growTime: ${ns.formulas.hacking.growTime(ns.getServer(server), ns.getPlayer())}`)
    ns.tprint(`getWeakenTime: ${ns.getWeakenTime(server)}`)
    ns.tprint(`formulas.weakenTime: ${ns.formulas.hacking.weakenTime(ns.getServer(server), ns.getPlayer())}`)
}
