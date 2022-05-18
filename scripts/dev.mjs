import { createServer } from 'vite';
import { exec } from 'child_process'

const server = await createServer({ configFile: 'vite.config.ts'})

await server.listen()
server.printUrls()

await exec(`npm run electron`)
