const path = require('path');
console.log("from config:");
console.log(path.resolve(__dirname, 'public', 'js'));
module.exports = {
    entry: [
        './src/client/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'public','js'),
        filename: './bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        ],
    },
    devtool: '#eval-source-map',
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};