//commonjs importing style
const path = require("path");
//to generate html files automatically
const HtmlWebpackPlugin = require("html-webpack-plugin");
//common js exporting style
module.exports = {
  //entry point path
  entry: "./src/index.js",
  //generating file path
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //modes
  mode: "production",
  devtool: "eval-source-map",
  //rules for loding files and modules
  //1.module is object
  module: {
    //2.rules is array of objects
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="root"></div></body></html>',
      filename: "index.html",
      title: "bgv",
    }),
  ],
};
