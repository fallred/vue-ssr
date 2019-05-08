
let webpack = require('webpack');
let path = require('path');
let merge = require('webpack-merge');
let base = require('./webpack.base');
let VueSSRClinetPlugin = require('vue-server-renderer/client-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =merge(base,{
    // 入口
    entry:{
        client:path.resolve(__dirname,'../src/client/entry.js')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins:[
        new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VUE_ENV': '"client"'
        }),
        // 这将 webpack 运行时分离到一个引导 chunk 中，
        // 以便可以在之后正确注入异步 chunk。
        // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
        new VueSSRClinetPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'../public/index.html')
        })
    ]
})