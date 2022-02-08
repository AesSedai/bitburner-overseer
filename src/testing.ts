import { NS } from "../types/bitburner"
import { shutup } from "./shutup"

export async function main(ns: NS) {
    shutup(ns)
    ns.tail()
    const server = ns.getServer("the-hub")
    ns.print(JSON.stringify(server, null, 2))
}
