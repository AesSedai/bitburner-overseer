import { NS } from "../types/bitburner"

export const getHackCost = (ns: NS, server: string) => {
    const isDead = (ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server)) * 1.0 < 0.05 ? 0 : 1
    return (
        ((ns.hackAnalyze(server) *
            ns.getServerMaxMoney(server) *
            Math.log(Math.max(ns.getServerGrowth(server), 1)) *
            (ns.getPlayer().hacking - ns.getServerRequiredHackingLevel(server))) /
            Math.max(1, ns.getServerMinSecurityLevel(server))) *
        isDead
    )
}
