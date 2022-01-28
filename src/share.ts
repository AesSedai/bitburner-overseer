import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    while (true) {
        await ns.share()
    }
}
