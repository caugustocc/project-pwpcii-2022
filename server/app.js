//preambulo
//en este commit se hace la actualizacion a codigo moderno
import createError from "http-errors";
import  express from "express"; //crea servidores
import path from "path"; // nucleo de node, ayuda al manejo de las rutas
import cookieParser from "cookie-parser";//manejo de cookies
import logger from "morgan";// log de peticiones
//rutas
import indexRouter from"./routes/index";
import usersRouter from "./routes/users";
import aboutRouter from "./routes/about";
//se crea instancia de express
//(res req, next) =>{...}
const app = express();

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
app.use((req,res,next)=>{
  next(createError(404));
})
// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//exportando instansia de App usando js Moderno
export default app;