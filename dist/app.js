"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _about = _interopRequireDefault(require("./routes/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//preambulo
//en este commit se hace la actualizacion a codigo moderno
//crea servidores
// nucleo de node, ayuda al manejo de las rutas
//manejo de cookies
// log de peticiones
//rutas
//se crea instancia de express
//(res req, next) =>{...}
const app = (0, _express.default)(); // view engine setup

app.set('views', _path.default.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //Todos los middlewere gobales 
//van primero que cualquier  otro middlewere de la app

app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)()); //middlewere de archivos estaticos

app.use(_express.default.static(_path.default.join(__dirname, 'public')));
app.use('/', _index.default);
app.use('/users', _users.default);
app.use('/about', _about.default); // catch 404 and forward to error handler

app.use((req, res, next) => {
  next((0, _httpErrors.default)(404));
}); // error handler

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
}); //exportando instansia de App usando js Moderno

var _default = app;
exports.default = _default;