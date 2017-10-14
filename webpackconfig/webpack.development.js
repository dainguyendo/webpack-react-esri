const merge = require('webpack-merge');
const parts = require('./webpack.parts');

// Webpack configuration for development
module.exports = (PATHS) => {
  return merge([
    parts.devServer({
      // Customize host/port here - else defaults localhost, 8080
      host: process.env.HOST,
      port: 3000 || process.env.PORT,
      // Hot Module Replacement
      hot: true
    }),

    // Load Sass Module
    parts.loadSass({ include: PATHS.app }),

    // Load Images
    parts.loadImages(),

    // Source Maps
    {
      output: {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
    },
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map'}),
  ]);
};
