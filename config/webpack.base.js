let path = require('path');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'production',
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'../dist'),
        // 上线后配置线上域名资源根目录
        // publicPath: 'http://img.zhufengpeixun.cn'
    },
    // 对模块处理
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:['@babel/plugin-syntax-dynamic-import']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
    ]
}