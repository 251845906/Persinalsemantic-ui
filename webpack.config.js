/**
 * Created by 251845906 on 2018/8/11.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const StringReplacePlugin = require('string-replace-webpack-plugin');
module.exports = {
    devServer:{
        host:process.env.HOST,
        //    端口
        port:3000
    },
    entry: {
        main : './main.js',// 入口文件
    },
    output: {
        filename: 'js/[name].js',// 打js到哪个文件
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test:/\.(css|less)$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use : ['css-loader','less-loader']
                })
            },
            //打包css less 需要用到的loader
            {
                test: /\.(js|jsx)$/,
                //正则匹配后缀.js文件;
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },//打包js，react 需要用到的loader
                exclude: /node_modules/
                //加载babel-loader转译es6
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use:[{
                    loader: "file-loader",
                    options: {
                        name:'font/[name].[ext]',
                        publicPath:'../'
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'images/[name].[ext]',
                            publicPath:'../'
                        }
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            // {
            //     test: /semantic\.css$/,
            //     loader: StringReplacePlugin.replace({
            //         replacements: [{
            //             pattern: /https\:\/\/fonts\.googleapis\.com[^\']+/ig,
            //             replacement: function (match, p1, offset, string) {
            //                 return 'data:text/css,*{}'
            //             }
            //         }]
            //     })
            // },
        ],
    },
    plugins:[
        //这里会按照output的路径打包到css文件夹下面对应的css的名字
        new ExtractTextPlugin('css/[name].css'),
        // new StringReplacePlugin()
    ]

};