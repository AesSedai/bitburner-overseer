import { NS } from "../types/bitburner"

export async function main(ns: NS) {
    const host = "http://localhost:8000"
    const files = "/files"
    const fileListCache = "fileList.txt"

    const success = await ns.wget(`${host}${files}`, fileListCache, "home")

    if (success) {
        // fetch files
        const contents = JSON.parse(ns.read(fileListCache))
        for (let file of contents) {
            ns.tprint("fetching: ", file)
            const response = await ns.wget(`${host}/${file}`, file, "home")
            if (!response) {
                ns.tprint(`Error fetching file ${file} from ${host}/${file}`)
            }
        }
    } else {
        ns.tprint("Error contacting local server for file fetch")
    }
}
