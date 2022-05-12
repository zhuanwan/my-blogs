'use strict'
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空目录
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const config = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]_[contenthash:8].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      minSize: 30, //提取出的chunk的最小大小
      cacheGroups: {
        default: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2, //模块被引用2次以上的才抽离
          priority: -20,
        },
        vendors: {
          //拆分第三方库（通过npm|yarn安装的库）
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
        },
      },
    },
  },
}

module.exports = merge(config, baseConfig)