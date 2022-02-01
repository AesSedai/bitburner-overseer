import express from "express"
import path from "path"
import cors from "cors"
import fs from "fs"
const port = 8000
const dist = path.join(__dirname, "dist")

const getFilePaths = (folderPath: string): string[] => {
    const entryPaths = fs.readdirSync(folderPath).map((entry) => path.join(folderPath, entry))
    const filePaths = entryPaths.filter((entryPath) => fs.statSync(entryPath).isFile())
    const dirPaths = entryPaths.filter((entryPath) => !filePaths.includes(entryPath))
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), [] as string[])
    return [...filePaths, ...dirFiles]
}

try {
    const app = express()

    app.use(cors())
    app.use(express.static(dist))

    app.get("/files", async (req, res) => {
        if (req.query.since != null) {
            // @ts-expect-error
            const querySince = new Date(req.query.since)
            const files = fs.readdirSync(dist)
            let lastUpdated = files.reduce((acc, file) => {
                let ts = fs.statSync(path.join(dist, file)).mtime
                return acc > ts ? acc : ts
            }, new Date("0"))
            if (querySince < lastUpdated) {
                res.send({ lastUpdate: lastUpdated, files: fs.readdirSync(dist) })
            } else {
                res.send()
            }
        } else {
            res.send(fs.readdirSync(dist))
        }
    })

    app.listen(port, "0.0.0.0", () => {
        console.log(`> Read on http://localhost:${port}`)
    })
} catch (e: any) {
    console.error(e.stack)
    process.exit(1)
}
