//preambulo
var createError = require('http-errors');// manejo de errores http
var express = require('express'); //crea servidores
var path = require('path'); // nucleo de node, ayuda al manejo de las rutas
var cookieParser = require('cookie-parser'); //manejo de cookies
var logger = require('morgan');// log de peticiones

var indexRouter = require('./routes/index');
//para la clase sig
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
//se crea instancia de express
//(res req, next) =>{...}
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//Todos los middlewere gobales 
//van primero que cualquier  otro middlewere de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//middlewere de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;