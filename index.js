const panels = require('./package.json').panels;
const createServer = require('panels/server');

createServer({
  apps: panels.apps,
  heapId: panels.heapId
}).listen(panels.listen);

console.log(`panels is ready at http://0.0.0.0:${panels.listen}`);
