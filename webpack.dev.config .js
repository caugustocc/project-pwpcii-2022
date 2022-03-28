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
        filename: path.join('javascript','bundle.js'),
        // 2.3 path publico 
        publicPath: '/',
    },
    //configurando el servidor de desarrollo
    devServer: {
        //3.1 folder de archivos estaticos
        static: path.join(__dirname,'public'),
        // 3.2 puerto del servidor de desarrollo
        // de WP (Webpack)
        //en dado caso que este ocupado podemos cambiaro a otro puerto
        port: 8080,
        //3.3 definiendo host
        host:'localhost'
    }
}