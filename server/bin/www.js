#!/usr/bin/env node
/**
 * Module dependencies.
 */
// var app = require('../app');
//importando de forma moderna en js
import app from '../app';
//importa la funcion debug y luego con la funcion crea la 
//instancia con los siguientes agumentos
//var debug = require('debug')('p01-projnotes:server');
//importando Debug
import Debug from 'debug';
// var http = require('http');
import http from 'http';
//creando o ejecuntando con la instancia Db y el argumento
const debug = Debug("p01-projnotes:server");


const port = normalizePort(process.env.PORT || '3000');
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

  if (isNaN(port)) {
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

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      //console.error(bind + ' requires elevated privileges'); interpolacion
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // console.error(bind + ' is already in use');
      console.error(`${bind} is already in use`);
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
  //const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port; operador ternario
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port  ${addr.port}`;
  debug(`Listening on ${bind}`);
  console.log(`escuchando en ${port}`)
}
