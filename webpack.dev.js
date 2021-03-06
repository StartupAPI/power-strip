const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = require("config");

let webpackConfig = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    reactsample: "./src/sample-react-app.jsx",
  },
  module: {
    rules: [
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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: [],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index-bootstrap4.html",
      filename: "./index-bootstrap4.html",
      chunks: ["bootstrap4"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index-plain.html",
      filename: "./index-plain.html",
      chunks: ["plain"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index-reactsample.html",
      filename: "./index-reactsample.html",
      chunks: ["reactsample"],
    }),
  ],
});

if (
  typeof config.startupapiDevProxy !== "undefined" &&
  config.startupapiDevProxy
) {
  console.log(
    `[Startup API] Will proxy requests from '/users/ to ${config.startupapiDevProxy}`
  );

  webpackConfig = merge(webpackConfig, {
    devServer: {
      proxy: {
        "/users": {
          target: config.startupapiDevProxy,
          pathRewrite: { "^/users/": "/" },
          secure: false,
          changeOrigin: true,
        },
      },
    },
  });
}

module.exports = webpackConfig;
