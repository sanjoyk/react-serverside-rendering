const path = require("path");
const webpackMerge = require('webpack-merge');
const commonConfig = require("./webpack.common");


const config ={
    entry:"./src/client/client.js",
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
}
module.exports=webpackMerge(config, commonConfig);