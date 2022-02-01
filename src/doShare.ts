import { NS } from "../types/bitburner"
import { getAvailableServerThreads } from "./getAvailableServerThreads"

export async function main(ns: NS) {
    const script = "share.js"
    const hostname = "sharing"
    let idx = 0

    if (ns.args.length > 0) {
        if (typeof ns.args[0] === "number") {
            idx = ns.args[0]
        } else {
            ns.tprint("first argument must be a number")
            return
        }
    }

    while (ns.serverExists(`${hostname}-${idx}`)) {
        const server = `${hostname}-${idx}`
        ns.killall(server)
        await ns.scp(script, server)
        const threads = getAvailableServerThreads(ns, server, script)
        ns.exec(script, server, threads)
        idx += 1
    }
}
