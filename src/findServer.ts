import { NS } from "../types/bitburner"
import { scrape } from "./utils"

export async function main(ns: NS) {
    const servers = scrape(ns)

    let path: string[] = []
    let target = ns.args[0]

    if (typeof target !== "string") {
        ns.tprint("first argument must be a string")
        return
    }

    while (target != "home") {
        if (target == "home") {
            break
        }

        find_keys: {
            for (let server of Object.keys(servers)) {
                let serversToSearch = servers[server]

                if (serversToSearch.includes(target)) {
                    if (!path.includes(server)) {
                        path.unshift(server)
                        target = server
                    }
                    break find_keys
                }
            }
        }
    }

    ns.tprint(`Server: ${ns.args[0]}, path: ${path.join(", ")}`)
}
