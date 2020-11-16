const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    filename: "power-strip.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index-bootstrap4.html",
      filename: "./index-bootstrap4.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index-plain.html",
      filename: "./index-plain.html",
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "power-strip.js.map",
    }),
  ],
};
