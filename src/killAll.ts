import { NS } from "../types/bitburner"
import { killAll } from "./utils"

export async function main(ns: NS) {
    killAll(ns)
}
