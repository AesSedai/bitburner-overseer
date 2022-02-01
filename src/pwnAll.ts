import { NS } from "../types/bitburner"
import { pwn } from "./pwn"
import { scrape } from "./scrape"

export const pwnAll = (ns: NS, log: boolean = false) => {
    for (let server of Object.keys(scrape(ns))) {
        pwn(ns, server, log)
    }
}
