const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                extractComments: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
            new OptimizeCssAssetsPlugin(),
        ],
    },
});