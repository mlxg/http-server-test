const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, ''),
    entry: {
        main: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                // include: path.join(__dirname, '/node_modules/antd'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            /**
             *  antd.conf
             */
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new ExtractTextPlugin('index.css'),
        // new BundleAnalyzerPlugin()
    ],
    /*devServer: {
        proxy: {
            '*': {
                target: 'http://127.0.0.1:7001',
                changeOrigin: true
            }
        }
    },*/
};
