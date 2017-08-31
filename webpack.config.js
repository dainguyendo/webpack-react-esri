const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpackconfig/webpack.common');
const development = require('./webpackconfig/webpack.development');
const production = require('./webpackconfig/webpack.production');

module.exports = (env) => {
  console.log('Environment:', env);

  // Webpack entry and output paths
  const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
  };

  // Default to development webpack unless production is specified
  if (env === 'production') {
    return merge(common(PATHS), production(PATHS));
  } else {
    return merge(common(PATHS), development(PATHS));
  }
};
