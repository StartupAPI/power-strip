const webpack = require("webpack");

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
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    filename: "power-strip.js",
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "power-strip.js.map",
    }),
  ],
};
