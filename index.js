const createServer = require('panels/server');

const LISTEN = process.env.LISTEN || 3000;

createServer(require('./package.json').panels).listen(LISTEN);

console.log(`panels is ready at http://0.0.0.0:${LISTEN}`);
