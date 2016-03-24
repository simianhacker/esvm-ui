import Hapi from 'hapi';
import Inert from 'inert';
import glob from 'glob';
import { join } from 'path';

const server = new Hapi.Server();

server.connection({ port: 9999 });
server.register(Inert, () => { });

// Require all the routes
var routePath = join(__dirname, 'routes', '**', '*.js');
glob.sync(routePath).forEach((path) => {
  require(path)(server);
});

server.start((err) => {
  if (err) throw err;
  console.log('Server running at: ', server.info.uri);
});
