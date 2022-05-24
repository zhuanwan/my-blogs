"use strict"
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const config = {
  target: "web",
  mode: "development",
  output: {
    publicPath: "/",
  },
  plugins: [new ReactRefreshPlugin()],
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: "none",
    },
    historyApiFallback: true,
  },
  stats: "errors-only",
  devtool: "cheap-source-map",
}

module.exports = merge(config, baseConfig)
