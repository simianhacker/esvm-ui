import { join } from 'path';

module.exports = (server) => {

  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: join(__dirname, '..', 'public')
      }
    }
  });

};
