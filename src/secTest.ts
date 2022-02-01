import { NS } from "../types/bitburner"
import { shutup } from "./shutup"
import { getHackCost } from "./getHackCost"
import { scrape } from "./scrape"

export async function main(ns: NS) {
    shutup(ns)
    ns.tail()

    const servers = Object.keys(scrape(ns))
        .filter((name) => ns.hasRootAccess(name) && ns.getServerMoneyAvailable(name) > 0)
        .map((name) => {
            return { name: name, cost: getHackCost(ns, name) }
        })
        .sort((a, b) => a.cost - b.cost)
    ns.print(servers)

    // for (let server of servers) {
    //     ns.print(
    //         `Server: ${server}, cost: ${Math.floor(getHackCost(ns, server))} growth: ${ns.getServerGrowth(
    //             server
    //         )} maxMoney: ${ns.getServerMaxMoney(server)} sec: ${ns.getServerSecurityLevel(
    //             server
    //         )} minsecurity: ${ns.getServerMinSecurityLevel(server)}, hack: ${ns.getHackTime(
    //             server
    //         )}, weaken: ${ns.getWeakenTime(server)}, grow: ${ns.getGrowTime(server)}`
    //     )
    // }
}
