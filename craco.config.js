// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.resolve = webpackConfig.resolve || {};
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          "url": require.resolve("url/"),
          "util": require.resolve("util/"),
          "crypto": require.resolve("crypto-browserify"),
          "buffer": require.resolve("buffer/")
        };
        return webpackConfig;
      },
    },
  };
  