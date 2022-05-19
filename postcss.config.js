module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: ["html"],
      replace: true,
      mediaQuery: false,
      minPixelValue: 6,
      exclude: "/node_modules/i",
    },
  },
};
