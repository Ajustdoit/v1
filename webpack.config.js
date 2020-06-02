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
    ]
};
