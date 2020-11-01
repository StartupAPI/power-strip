const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = require('config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'power-strip.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'power-strip.js.map'
    })
  ]
};

if (typeof config.startupapiDevProxy !== 'undefined' && config.startupapiDevProxy) {
  console.log(`[Startup API] Will proxy requests from '/users/ to ${config.startupapiDevProxy}`);

  module.exports.devServer = {
    proxy: {
      '/users': {
        target: config.startupapiDevProxy,
        pathRewrite: {'^/users/' : '/'},
        secure: false,
        changeOrigin: true
      }
    }
  };
}