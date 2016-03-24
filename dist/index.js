'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _hapi2.default.Server();

server.connection({ port: 9999 });
server.register(_inert2.default, () => {});

// Require all the routes
var routePath = (0, _path.join)(__dirname, 'routes', '**', '*.js');
_glob2.default.sync(routePath).forEach(path => {
  require(path)(server);
});

server.start(err => {
  if (err) throw err;
  console.log('Server running at: ', server.info.uri);
});