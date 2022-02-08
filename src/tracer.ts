import { NS } from "../types/bitburner"
import { shutup } from "./shutup"
import { formatDate } from "./utils"

type Message = {
    host: string
    target: string
    sleepFor: number
    batchId: number
    batchThreads: number
    opIdx: number
    opCount: number
    tag: string
    scriptStart: number
    sleepStart: number
    sleepEnd: number
    scriptEnd: number
    securityBefore: number
    moneyBefore: number
    security: number
    money: number
    threads: number
}

const msgToString = (m: Message): string => {
    return `${m.host}, ${m.target}, ${m.batchId}, ${m.batchThreads}, ${m.sleepFor}, ${m.opIdx}, ${m.opCount}, ${
        m.tag
    }, ${formatDate(m.scriptStart)}, ${formatDate(m.sleepStart)}, ${formatDate(m.sleepEnd)}, ${formatDate(
        m.scriptEnd
    )}, ${m.scriptStart}, ${m.sleepStart}, ${m.sleepEnd}, ${m.scriptEnd}, ${m.securityBefore}, ${m.security}, ${
        m.moneyBefore
    }, ${m.money}, ${m.threads}\n`
}

export async function main(ns: NS) {
    shutup(ns)
    ns.tail()
    const cache: { [k in number]: { [k in string]: Message } } = {}

    const port = ns.getPortHandle(1)
    port.clear()

    await ns.write(
        "logger.txt",
        "host, target, batchID, batchThreads, sleepFor, opIdx, opCount, tag, scriptStartDate, sleepStartDate, sleepEndDate, scriptEndDate, scriptStart, sleepStart, sleepEnd, scriptEnd, securityBefore, security, moneyBefore, money, threads\n",
        "w"
    )

    while (true) {
        let message: string | number | "NULL PORT DATA"
        if (port.peek() != "NULL PORT DATA") {
            while ((message = port.read()) !== "NULL PORT DATA") {
                if (typeof message === "number") {
                    // blah
                } else {
                    const data: Message = JSON.parse(message)

                    ns.print(msgToString(data))

                    if (cache[data.batchId] == null) {
                        cache[data.batchId] = {
                            [`${data.host}:${data.opIdx}`]: data
                        }
                    } else {
                        cache[data.batchId][`${data.host}:${data.opIdx}`] = data
                    }

                    const receivedThreads = Object.values(cache[data.batchId]).reduce((acc, data) => acc + data.threads, 0)

                    // flush to file if all ops have been received
                    if (receivedThreads === data.batchThreads) {
                        for (let obj of Object.values(cache[data.batchId])) {
                            await ns.write("logger.txt", msgToString(obj), "a")
                        }
                    }
                }
            }
        }

        await ns.asleep(100)
    }
}
