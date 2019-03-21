const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpackNodeExternals = require("webpack-node-externals");


const config = {
  target: "node",
  entry:"./src/index.js",
  output:{
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals:[webpackNodeExternals()]

}

module.exports = webpackMerge(config,commonConfig);
