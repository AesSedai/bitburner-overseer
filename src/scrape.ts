import { NS } from "../types/bitburner"

export const scrape = (ns: NS) => {
    let toExplore = ["home"] //.concat(ns.getPurchasedServers())
    let serverConnections: { [k in string]: string[] } = {}

    while (toExplore.length > 0) {
        let server = toExplore.shift()

        if (server != null && !serverConnections[server]) {
            serverConnections[server] = []

            ns.scan(server).forEach((conServer) => {
                if (!["home"].includes(conServer)) {
                    if (server != null && !serverConnections[server].includes(conServer)) {
                        serverConnections[server].unshift(conServer)
                    }

                    if (!serverConnections[conServer]) {
                        toExplore.unshift(conServer)
                    }
                }
            })
        }
    }

    return serverConnections
}
