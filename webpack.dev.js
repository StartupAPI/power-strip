const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('config');

let webpackConfig = merge(common, {
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});

if (typeof config.startupapiDevProxy !== 'undefined' && config.startupapiDevProxy) {
  console.log(`[Startup API] Will proxy requests from '/users/ to ${config.startupapiDevProxy}`);

  webpackConfig = merge(webpackConfig, {
    devServer: {
      proxy: {
        '/users': {
          target: config.startupapiDevProxy,
          pathRewrite: {'^/users/' : '/'},
          secure: false,
          changeOrigin: true
        }
      }
    }
  })
}

module.exports = webpackConfig;