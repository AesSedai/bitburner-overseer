## Purpose
This is an opinionated typesript starter kit for writing bitburner scripts in an external IDE and providing a way to fetch the compiled scripts into the game.

## Usage

Install dependencies:
```
$ npm install
```

Run server + watch for changes:
```
$ npm run watch
```

While `watch` is running, any changes to the `src/**/*` directory will cause a typescript recompile and the results will be written to the `dist/*` dir.

Running `watch` also starts a webserver on `0.0.0.0:8000`. 
- `0.0.0.0/files` returns a JSON array of the files in the `dist/*` dir
- `0.0.0.0/<filename>` serves `dist/*` assets and returns the contents of `<filename>`

Bitburner repo: https://github.com/danielyxie/bitburner
Types are found in dist: https://github.com/danielyxie/bitburner/blob/dev/dist/bitburner.d.ts
Last known release types: https://github.com/danielyxie/bitburner/blob/05cbc25a8fed73b9982925526940d65e55a842a1/dist/bitburner.d.ts

After running `watch`, you'll have to copy the `dist/wget-all.js` file into bitburner. From there, you can set an alias:
```
alias get="run wget-all.js"
```
From then on, you can run the alias in bitburner to fetch all the files from the web server.
