import { NS } from "../types/bitburner"

export const scrape = (ns: NS) => {
    let toExplore = ["home"].concat(ns.getPurchasedServers())
    let serverConnections: { [k in string]: string[] } = {}

    while (toExplore.length > 0) {
        let server = toExplore.shift()

        if (server != null && !serverConnections[server]) {
            serverConnections[server] = []

            ns.scan(server).forEach((conServer) => {
                if (![".", "home"].includes(conServer)) {
                    if (server != null && !serverConnections[server].includes(conServer)) {
                        serverConnections[server].push(conServer)
                    }

                    if (!serverConnections[conServer]) {
                        toExplore.push(conServer)
                    }
                }
            })
        }
    }

    delete serverConnections["halp-0"]
    delete serverConnections["halp-1"]
    delete serverConnections["halp-2"]
    delete serverConnections["halp-3"]
    delete serverConnections["halp-4"]
    delete serverConnections["halp-5"]
    delete serverConnections["halp-6"]
    delete serverConnections["halp-7"]
    delete serverConnections["halp-8"]
    delete serverConnections["halp-9"]
    delete serverConnections["halp-10"]
    delete serverConnections["halp-11"]
    delete serverConnections["halp-12"]
    delete serverConnections["halp-13"]
    delete serverConnections["halp-14"]
    delete serverConnections["halp-15"]
    delete serverConnections["halp-16"]
    delete serverConnections["halp-17"]
    delete serverConnections["halp-18"]
    // delete serverConnections["halp-5"]

    return serverConnections
}

export const killAll = (ns: NS) => {
    Object.keys(scrape(ns)).forEach((server) => server != "home" && ns.hasRootAccess(server) && ns.killall(server))
}

export const pwn = (ns: NS, server: string) => {
    if (!ns.hasRootAccess(server)) {
        let opened = 0
        if (ns.fileExists("brutessh.exe")) {
            ns.brutessh(server)
            opened += 1
        }
        if (ns.fileExists("ftpcrack.exe")) {
            ns.ftpcrack(server)
            opened += 1
        }
        if (ns.fileExists("httpworm.exe")) {
            ns.httpworm(server)
            opened += 1
        }
        if (ns.fileExists("relaysmtp.exe")) {
            ns.relaysmtp(server)
            opened += 1
        }
        if (ns.getServerNumPortsRequired(server) <= opened) {
            ns.nuke(server)
            return true
        } else {
            ns.tprint(`Can't nuke: ${server}`)
            return false
        }
    }
}

export const pwnAll = (ns: NS) => {
    for (let server of Object.keys(scrape(ns))) {
        pwn(ns, server)
    }
}

export const getAvailableServerThreads = (ns: NS, server: string, script: string) => {
    if (ns.hasRootAccess(server)) {
        let ramAvailable = ns.getServerMaxRam(server) - ns.getServerUsedRam(server)
        let ramPerThread = ns.getScriptRam(script)
        return Math.floor(ramAvailable / ramPerThread)
    } else {
        return 0
    }
}

export const getNetworkThreads = (ns: NS, script: string) => {
    return Object.keys(scrape(ns)).reduce((acc, server) => {
        acc += getAvailableServerThreads(ns, server, script)
        return acc
    }, 0)
}

export const getHackCost = (ns: NS, server: string) => {
    return (
        (ns.hackAnalyzeChance(server) *
            ns.hackAnalyze(server) *
            ns.getServerMaxMoney(server) *
            Math.log(ns.getServerGrowth(server))) /
        Math.max(0, ns.getHackTime(server), ns.getGrowTime(server), ns.getWeakenTime(server))
    )
}
