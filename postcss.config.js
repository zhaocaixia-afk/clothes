module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
    //   unitToConvert: "px",
      viewportWidth: 375,
      viewportHeigth: 667,
      unitPrecision: 5,
    //   propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true
    }
  }
};
