/*jshint esversion:6 */
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
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

//create a loader that converts JS or SCSS files to regular JS and CSS
