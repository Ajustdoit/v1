const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin=require('vue-loader/lib/plugin')


module.exports={
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output')
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title:'hello world',
            template:'./template.html',
            filename:'./index.html',
            // chunks:['bundle']
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css"
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: '8888',
        proxy: {
            '/cfapi': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/cfapi': '/' },
                changeOrigin: true,
            },

        }
    }
};
