import { NS } from "../types/bitburner"
import { scrape } from "./scrape"

export const serverPath = (ns: NS, target: string) => {
    const servers = scrape(ns)

    let path: string[] = []

    if (!Object.keys(servers).includes(target)) {
        ns.tprint("Invalid server name")
        return []
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

    return path
}
