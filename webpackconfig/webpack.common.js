const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

// Common webpack configuration for both development and production
module.exports = (PATHS) => {
  return merge([
    {
      // For each entry point, webpack will begin to create it's dependency graph starting at the entries defined
      entry: {
        app: path.join(PATHS.app, 'main'),

        // Vendor Bundle
        vendor: ['react'],
      },

      // Where webpack will write my compiled files
      output: {
        path: PATHS.build,
        filename: 'js/[name].[chunkhash].js',
        libraryTarget: 'amd',
      },

      resolve: {
        alias: {
          js: path.join(PATHS.app, 'js'),
          css: path.join(PATHS.app, 'style'),
        },
      },

      externals: [
        // Handles Dojo/ArcGIS JS API requests
        (context, request, callback) => {
          if (/^dojo/.test(request) || /^dojox/.test(request) || /^dijit/.test(request) || /^esri/.test(request)) {
            callback(null, 'amd ' + request);
          } else {
            callback();
          }
        },
      ],

      plugins: [
        // Enable Progress Feedback
        new webpack.ProgressPlugin(),
        // Simplifies creation of HTML file
        new HtmlWebpackPlugin({
          title: 'Awesome Project',
          template: path.join(PATHS.app, '/index.html'),
          hash: true,
          inject: false
        }),

      ],
    },

    // Lint JavaScript Module
    parts.lintJavaScript({
      include: PATHS.app,
      options: {
        emitWarning: true,
      },
    }),

    // Transpile JavaScript
    parts.loadJavaScript({ include: PATHS.app }),

    // Load SVG
    parts.loadSVG({ include: PATHS.app }),

  ]);
};
