const createServer = require('panels/server');

const APPS = process.env.APPS ? process.env.APPS.split(',') : require('./package.json').apps;
const LISTEN = process.env.LISTEN || 3000;

const server = createServer({
  apps: APPS
});

server.listen(LISTEN);

const at = typeof parseInt(LISTEN, 10) === 'number' ? `http://0.0.0.0/${LISTEN}` : LISTEN;
console.log(`panels-server is ready at ${at}`);
