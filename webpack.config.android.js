var webpack = require('webpack'),
    path = require('path'),
    AnybarWebpackPlugin = require('anybar-webpack');

module.exports = {
    watch: true,
    entry: path.join(__dirname, '/src/index.android.jsx'),
    module: {
        loaders: [
            { test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loaders: ['babel-loader?optional=runtime&stage=0'] }
        ]
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'index.android.js',
        libraryTarget: 'commonjs'
    },
    externals: [require('./ignore-modules')],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new AnybarWebpackPlugin()
    ]
};
