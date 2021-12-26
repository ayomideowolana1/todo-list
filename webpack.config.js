const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project Tracker",
    }),
  ],
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:["style-loader","css-loader"]
      },
    ],
  },
  mode: "development",
};
