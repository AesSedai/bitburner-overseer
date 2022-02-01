import { NS } from "../types/bitburner"

export async function main(ns: NS) {

    const maxRam = ns.getPurchasedServerMaxRam()
    const cost = ns.getPurchasedServerCost(maxRam)
    const limit = ns.getPurchasedServerLimit()
    ns.tprint(limit)
    ns.tprint(`Max ram: ${maxRam}\tcost: ${cost}`)

    // const allServers = Object.keys(scrape(ns))
    // const playerServers = ["home"].concat(ns.getPurchasedServers())
    // const extras = [...new Set(allServers.filter((server) => !playerServers.includes(server)))]
    // ns.tprint(`${extras.length} servers`)

    // ns.tprint(
    //     extras.reduce((acc, server) => {
    //         return acc + ns.getServerMaxRam(server)
    //     }, 0),
    //     " GB"
    // )
}
