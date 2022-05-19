"use strict";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取css
const WebpackBar = require("webpackbar");

// 是本地开发还是打包
const isBuild = process.env.REACT_APP_IS_BUILD === "true";

// less loader
const lessUseLoaders = (isModule) => [
  isBuild ? MiniCssExtractPlugin.loader : "style-loader",
  {
    loader: "css-loader",
    options: isModule
      ? {
          sourceMap: true,
          modules: {
            localIdentName: "[local]___[hash:base64:5]",
            // localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        }
      : {},
  },
  "postcss-loader",
  {
    loader: "less-loader",
    options: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  },
];

module.exports = {
  entry: { app: "./src/index.tsx" },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // tsc编译后，再用babel处理
          { loader: "babel-loader?compact=false" },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader?compact=false"],
      },
      {
        test: /\.css$/,
        use: isBuild
          ? [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
          : ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: lessUseLoaders(false),
      },
      {
        test: /\.module\.less$/,
        use: lessUseLoaders(true),
      },
      {
        test: /.(png|gif|jpe?g)$/,
        type: "asset", // 小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@less": path.resolve(__dirname, "../src/less"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
      chunks: ["app"],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
    new webpack.DefinePlugin({
      REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_RUNENV),
      REACT_APP_IS_BUILD:
        JSON.stringify(process.env.REACT_APP_IS_BUILD) === "true",
    }),
    new WebpackBar({
      color: "#85d", // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
  ],
};
