import { NS } from "../types/bitburner"
import { killAll } from "./killAll"

export async function main(ns: NS) {
    killAll(ns)
}
