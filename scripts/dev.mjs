import { createServer } from 'vite';
import { spawn } from 'child_process';
import electron from 'electron';

const server = await createServer({ configFile: 'vite.config.ts'});
await server.listen();
server.printUrls();

// Insert address and port of the vite server into process.env
// 将 vite 服务的地址和端口插入到环境变量 process.env 中
const address = server.httpServer.address()
const env = Object.assign(process.env, {
  SERVER_HOST: address.address,
  SERVER_PORT: address.port,
})
await spawn(electron, ['.'], { env });
