import { NS } from "../types/bitburner"
import { scrape } from "./scrape"
import { getAvailableServerThreads } from "./getAvailableServerThreads"

export const getNetworkThreads = (ns: NS, script: string) => {
    return Object.keys(scrape(ns)).reduce((acc, server) => {
        acc += getAvailableServerThreads(ns, server, script)
        return acc
    }, 0)
}
