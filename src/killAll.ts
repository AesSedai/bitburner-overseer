import { NS } from "../types/bitburner"
import { scrape } from "./scrape"

export const killAll = (ns: NS, home: boolean = false) => {
    const exempt = [ns.getScriptName()].concat("contracts.js", "share.js", "wget-all.js")

    for (let server of Object.keys(scrape(ns))) {
        const processes = ns.ps(server)
        for (let process of processes) {
            if (!exempt.includes(process.filename)) {
                ns.kill(process.filename, server, ...process.args)
            }
        }
    }
}
