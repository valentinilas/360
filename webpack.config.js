const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        index: './src/index.js',
        styles: './src/styles/main.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs')
    },
    // devServer: {
    //     port: 8080,
    //     static: path.resolve(__dirname, 'dist')
    // },

    module: {
        rules: [

            // {
            //     test: /\.html$/i,
            //     use: [{
            //         loader: "html-loader",
            //     }],
            // },
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