// Importando dependecia path
 const path = require ('path');
module.exports = {
    // paso 1 -> especificar el archivo de entrada
    entry: './client/index.js',
    // pas 2 -> especificar el archivo de salida
    output:{
        // 2.1 requiere la ruta absoluta de la salida
        path: path.resolve(__dirname,'public'),
        //2.2 Nombre del archivo de salida
        // para poder ser multiplataforma es necesario concatenar las
        // rutas con path
        filename: path.join('javascript','bundle.js'),
        // 2.3 path publico 
        publicPath: '/',
    }
}