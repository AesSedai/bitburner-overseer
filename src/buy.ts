import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    if (ns.args.length === 0 || (typeof ns.args[0] === "string" && ns.args[0].toLowerCase().includes("h"))) {
        ns.tprint(`Usage: run buy.js <RAM: number (G) | number+suffix (G, T, P) (ex: 32T)> [hostname] [amount]`)
        return
    }

    let ram = ns.args[0]
    let hostname = "halp"
    let amount = 1
    const playerMoney = ns.getPlayer().money

    if (typeof ram !== "number" && typeof ram !== "string") {
        ns.tprint("first argument (RAM) must be a string or number")
        return
    }

    if (typeof ram === "string") {
        // convert to number
        ram = ram.toLowerCase()
        if (ram === "max") {
            ram = ns.getPurchasedServerMaxRam()
        } else if (ram.includes("g")) {
            ram = parseInt(ram.replace("g", ""))
        } else if (ram.includes("t")) {
            ram = parseInt(ram.replace("t", "")) * 1024
        } else if (ram.includes("p")) {
            ram = parseInt(ram.replace("p", "")) * 1024 * 1024
        } else {
            ns.tprint("first argument (RAM) invalid")
            return
        }
    }

    if (!Number.isInteger(Math.log2(ram))) {
        ns.tprint(`RAM must be a power of 2`)
        return
    }

    if (ram > ns.getPurchasedServerMaxRam()) {
        ram = ns.getPurchasedServerMaxRam()
    }

    if (ns.args.length > 1) {
        if (typeof ns.args[1] === "string") {
            hostname = ns.args[1]
        } else {
            ns.tprint("second argument (hostname) must be a string")
            return
        }
    }

    if (ns.args.length > 2) {
        if (typeof ns.args[2] === "number") {
            const purchased = ns.getPurchasedServers().length
            amount = Math.min(ns.args[2], ns.getPurchasedServerLimit() - purchased)
        } else {
            ns.tprint("third argument (amount) must be a number")
            return
        }
    }

    const cost = ns.getPurchasedServerCost(ram) * amount
    if (cost > playerMoney) {
        const avail = Math.floor(playerMoney / cost)
        ns.tprint(`Too expensive, can only afford ${avail}`)
        return
    }

    for (let idx of Array.from(Array(amount).keys())) {
        ns.purchaseServer(hostname, ram)
    }
}
