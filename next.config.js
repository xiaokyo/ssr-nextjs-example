/* eslint-disable */
const withLess = require("@zeit/next-less");
const withCSS = require('@zeit/next-css');
// const lessToJS = require("less-vars-to-js");
// const fs = require("fs");
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

// Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(resolve("antd-custom.less"), "utf8")
// );

module.exports = withCSS(withLess({
  distDir: 'build',
  lessLoaderOptions: {
    javascriptEnabled: true,
    // modifyVars: themeVariables // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      _config: resolve('config'),
      _api: resolve("api"),
      _utils: resolve("utils"),
      _pages: resolve('pages'),
      _static: resolve('static')
    };
    return config;
  }
}));
