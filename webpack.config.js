// Dependencies
var path = require("path");

// Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TsConfigPathsPlugin = require("awesome-typescript-loader").TsConfigPathsPlugin;

// Path resolutions
var src = path.join(__dirname, "src");
var dist = path.join(__dirname, "dist");

module.exports = {
    entry: {
        app: path.join(src, "index.tsx")
    },
    output: {
        filename: "bundle.js",
        path: dist
    },
    devtool: "source-map",
    resolve: {
        plugins: [
            new TsConfigPathsPlugin()
        ],
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, "index.html")
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};