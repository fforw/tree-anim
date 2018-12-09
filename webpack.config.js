const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WatchCleanPlugin = require("./tooling/watch-clean");

const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const shellJs = require("shelljs");

const PRODUCTION = (process.env.NODE_ENV === "production");

const JS_OUTPUT_DIRECTORY = path.join(__dirname, "dist/");

if (!fs.existsSync(JS_OUTPUT_DIRECTORY))
{
    shellJs.mkdir("-p", JS_OUTPUT_DIRECTORY);
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        "tree-anim": "./src/index.js"
    },

    devtool: "source-map",

    output: {
        path: JS_OUTPUT_DIRECTORY,
        filename: "bundle-[name]-[chunkhash].js",
        chunkFilename: "bundle-[name]-[chunkhash].js",

        // TODO: change exposed entry-point
        library: "Demo",
        libraryTarget: "var"
    },


    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            chunks: ["vendors", "tree-anim"],
            template: "src/template.html",
            filename: "index.html"
        }),

        new MiniCssExtractPlugin({
            filename: "bundle-[name]-[chunkhash].css",
            chunkFilename: "bundle-[id]-[chunkhash].css"
        }),

        new WatchCleanPlugin({
            suffixes: [
                ".js", ".js.map",
                ".css", ".css.map"
            ]
        }),

        new webpack.DefinePlugin({
            "__PROD": PRODUCTION,
            "__DEV": !PRODUCTION,
            "process.env.NODE_ENV": JSON.stringify(PRODUCTION ? "production" : "development")
        })

    ],

    module: {
        rules: [
            // babel transpilation ( see .babelrc for babel config)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            // this is just concatenating the .css modules in components to one bundle.
            // No postprocessing of that.
            {
                test: /\.css$/,
                //                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};
