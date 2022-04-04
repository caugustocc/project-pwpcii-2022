// Importando dependecia path
const path = require('path');
//plugin de webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // paso 1 -> especificar el archivo de entrada
    entry: './client/index.js',
    // pas 2 -> especificar el archivo de salida
    output: {
        // 2.1 requiere la ruta absoluta de la salida
        path: path.resolve(__dirname, 'public'),
        //2.2 Nombre del archivo de salida
        // para poder ser multiplataforma es necesario concatenar las
        // rutas con path
        filename: path.join('javascript', 'bundle.js'),
        // 2.3 path publico 
        publicPath: '/',
    },
    // 3. modulos
    module: {
        rules: [
            //3.1 Esta es la primera regla de balbel
            {
                // en todos los archivos con terminacion JS se aplique esta regla
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    // 3.1.1 primer stage (configurador)
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', 
                                    {
                                        modules: false,
                                        useBuiltIns: "usage",
                                        targets: '> 0.25%, not dead',
                                        corejs: 3
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            // 3.2 Reglas para CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader]
            }
        ]
    },
    // 4. plugins
    plugins: [new MiniCssExtractPlugin({
        filename: path.join('stylesheets','styles.css')
    })]
};