const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');


// TODO: Add Lazy Loading, Optimize code splitting, Split chunks

module.exports = merge(baseConfig, {
  // devtool: 'eval-source-map',

  module: {
    rules: [
    ],
  },

  plugins: [
  ],

  // Turn off performance hints during development
  performance: {
    hints: false,
  },

});
