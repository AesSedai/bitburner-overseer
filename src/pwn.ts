import { NS } from "../types/bitburner"

export const pwn = (ns: NS, server: string, log: boolean = false) => {
    if (ns.hasRootAccess(server)) {
        return true
    }

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
    if (ns.fileExists("sqlinject.exe")) {
        ns.sqlinject(server)
        opened += 1
    }
    if (ns.getServerNumPortsRequired(server) <= opened) {
        ns.nuke(server)
        return true
    } else {
        if (log) {
            ns.tprint(`Can't nuke: ${server}`)
        }
        return false
    }
}
