import { NS } from "../types/bitburner"

export const getAvailableServerThreads = (ns: NS, server: string, script: string) => {
    if (ns.hasRootAccess(server)) {
        let ramAvailable = ns.getServerMaxRam(server) - ns.getServerUsedRam(server)
        let ramPerThread = ns.getScriptRam(script)
        return Math.floor(ramAvailable / ramPerThread)
    } else {
        return 0
    }
}
