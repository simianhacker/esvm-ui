'use strict';

var _path = require('path');

module.exports = server => {

  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: (0, _path.join)(__dirname, '..', 'public')
      }
    }
  });
};