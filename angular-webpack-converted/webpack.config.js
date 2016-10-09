
var webpack = require('webpack');
var node_dir = __dirname + '/node_modules';
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular','underscore']
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer: {
        hot: true
    },
    resolve: {
        alias: {
               "underscore": node_dir+"/underscore/underscore-min.js",

        }
    }
};