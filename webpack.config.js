const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // devServer: {
    //     port: 8080,
    //     static: path.resolve(__dirname, 'dist')
    // },
    mode: 'development',

    module: {
        rules: [

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }],

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
    }), new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    })],
}