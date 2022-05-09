/* eslint-disable no-console */
// preambulo
// en este commit se hace la actualizacion a codigo moderno
import createError from 'http-errors';
import express from 'express'; // crea servidores
import path from 'path'; // nucleo de node, ayuda al manejo de las rutas
import cookieParser from 'cookie-parser'; // manejo de cookies
import morgan from 'morgan'; // log de peticiones
// Importando configurador de plantillas

// rutas
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import templateEngineConf from './config/templateEngine';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import aboutRouter from './routes/about';
// Importando nuestro logger
import winston from './config/winston';
// Importando webpack
// Permite incrustar webpack en express
// Perimte la actualizacion
//
import webpackConfig from '../webpack.dev.config';

// se crea instancia de express
// (res req, next) =>{...}
const app = express();

// Recuperar el modo de ejecucion
const nodeEnv = process.env.NONE_ENV || 'development';
console.log(`< 🍕 > nodeEnv: ${nodeEnv}`);
// Decidiendo si embebemos el webpack mideleware
if (nodeEnv === 'development') {
  // Embebiendo webpck a mi apliacion
  console.log('ejecutando en mdo desarrollo 🤡');
  // Establecioendo el modo de webpack en desarrollo
  // en el configurador
  webpackConfig.mode = 'development';
  // Confirgurando la ruta del HMR
  // reload=true : Habilita la recarga automatica cuando un archivo JS cambia
  // timeout=1000: Tiempo de refresco de la pagina
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregando el plugin a la configuracion de desarrollo
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // Creamos un empaquetador a partir de un objeto de configuracion
  const bundler = webpack(webpackConfig);
  // Habilitamos el Middleware de webpack en express
  app.use(
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  // Habilitamos e middleware del webpack HRM
  app.use(WebpackHotMiddleware(bundler));
} else {
  console.log('ejecutando en mdo produccion ⚠');
}

// view engine setup
templateEngineConf(app);
// Todos los middlewere gobales
// van primero que cualquier  otro middlewere de la app
app.use(morgan('dev', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// middlewere de archivos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// exportando instansia de App usando js Moderno
export default app;
