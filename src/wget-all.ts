import { NS } from "../types/bitburner"
import { shutup } from "./shutup"

export async function main(ns: NS) {
    ns.tail()
    shutup(ns)
    let lastUpdate = "0"
    const host = "http://localhost:8000"
    const files = "/files"
    const fileListCache = "fileList.txt"

    while (true) {
        const success = await ns.wget(`${host}${files}?since=${lastUpdate}`, fileListCache, "home")

        if (success) {
            // fetch files
            const rawContents = ns.read(fileListCache)
            if (rawContents.length > 0) {
                const contents = JSON.parse(ns.read(fileListCache))
                lastUpdate = contents.lastUpdate
                for (let file of contents.files) {
                    ns.print("fetching: ", file)
                    const response = await ns.wget(`${host}/${file}`, file, "home")
                    if (!response) {
                        ns.tprint(`Error fetching file ${file} from ${host}/${file}`)
                    }
                }
            }
        } else {
            ns.tprint("Error contacting local server for file fetch")
        }

        await ns.sleep(1000)
    }
}
