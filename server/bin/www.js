/* eslint-disable */
/* eslint no-import-assign: "error" */
/*     */ 
import app from '@s/app'; // resolvedor de rutas es necesario otro pluguin
import Debug from 'debug';
// var http = require('http');
import http from 'http';
import winston from '../config/winston';

import configKeys from '../config/configKeys';
// creando o ejecuntando con la instancia Db y el argumento
const debug = Debug('p01-projnotes:server');

const port = normalizePort(configKeys.port || '5000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // console.error(bind + ' requires elevated privileges'); interpolacion
      winston.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // console.error(bind + ' is already in use');
      winston.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port  ${addr.port}`;
  debug(`Listening on ${bind}`);
  winston.info(`escuchando en ${app.get('port')}`);
}
