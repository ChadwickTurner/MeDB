const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require(__dirname + '/../../webpack.config.js');
const app = express();
const path = require('path');

const compiler = webpack(webpackConfig);
// console.log("From server:");
console.log(path.join(__dirname, '/../../'));
app.use(express.static(path.join(__dirname, '/../../views/')));
app.use(express.static('public'));
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/public/js',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

const server = app.listen(3000, function() {
    console.log('Listening at localhost:%s', server.address().port);
});