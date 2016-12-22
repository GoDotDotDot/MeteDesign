var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    watch: true,
    devtool: "eval-source-map",
    entry: __dirname + "/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },

    module: {
        // preLoaders: [
        //     {
        //         test: /\.(js|jsx)$/,
        //         exclude: /node_modules/,
        //         loader: 'eslint-loader'
        //     },
        // ],
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
                query: {
                    "presets": ["react", "es2015"],
                    "env": {
                        "development": {
                            "plugins": [["react-transform", {
                                "transforms": [{
                                    "transform": "react-transform-hmr",

                                    "imports": ["react"],

                                    "locals": ["module"]
                                }]
                            }]]
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=8024&name=/assets/images/[name].[ext]'
            }
        ]
    },
    plugins: [
       new webpack.optimize.UglifyJsPlugin({compress: {warnings: false } }),
        new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin("./css/[name].css"),
        new HtmlWebpackPlugin({ inject: "body", template: './public/indexTemplate.html' })
    ],
    //解决方案
    resolve: {
        root: [],
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 80,
        historyApiFallback: true,
        host: "0.0.0.0"
    },
    eslint: {
        configFile: './.eslintrc'
    }
}

//注：感叹号的作用在于使同一文件能够使用不同类型的loader