import { NS } from "../types/bitburner"
import { scrape } from "./scrape"

export async function main(ns: NS) {
    const servers = Object.keys(scrape(ns))

    for (let server of servers) {
        const files = ns.ls(server).filter((filename) => !["grow.js", "hack.js", "weaken.js"].includes(filename))

        for (let file of files) {
            if (file.includes(".lit") || file.includes(".txt") || file.includes(".script")) {
                await ns.scp(file, server, "home")
            } else if (file.includes(".cct")) {
                ns.tprint(`Found .cct on ${server}: ${file}`)
            }
        }
    }
}
