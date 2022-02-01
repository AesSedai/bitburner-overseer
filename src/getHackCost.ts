import { NS } from "../types/bitburner"

export const getHackCost = (ns: NS, server: string) => {
    return (
        (ns.hackAnalyze(server) * ns.getServerMaxMoney(server) * Math.log(Math.max(ns.getServerGrowth(server), 1))) /
        Math.max(1, ns.getServerMinSecurityLevel(server))
    )
}
