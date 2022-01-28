import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    const ram = ns.args[0]
    let hostname = "halp"

    if (typeof ram !== "number") {
        ns.tprint("fist argument (RAM) must be a number")
        return
    }

    if (ns.args.length === 2) {
        if (typeof ns.args[1] === "string") {
            hostname = ns.args[1]
        } else {
            ns.tprint("second argument (hostname) must be a string")
            return
        }
    }

    ns.purchaseServer(hostname, ram)
}
