import { NS } from "../types/bitburner"
import { pwnAll } from "./pwnAll"

export async function main(ns: NS) {
    pwnAll(ns, true)
}
