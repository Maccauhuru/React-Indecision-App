const path = require("path");

module.exports = {
  entry: "./src/app",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        //create a loader that converts JS or SCSS files to regular JS and CSS
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  //create a devtool that can show us errors in our source code instead of bundle.js
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
