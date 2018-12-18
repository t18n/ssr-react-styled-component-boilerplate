const merge = require('webpack-merge');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./base.config.js');


module.exports = merge(baseConfig, {

  // Define Build output
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
  },

  module: {
    rules: [
    ],
  },

  plugins: [
    // Create an interactive treemap visualization of the contents of all your bundles
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // In static mode single HTML file with bundle report will be generated
      openAnalyzer: true, // Automatically open report in default browser.
      reportFilename: 'report/report.html',
      generateStatsFile: true,
      statsFilename: 'report/stats.json',
    }),

    // Compress
    new CompressionPlugin({
      // asset: 'compressed/[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  optimization: {

    // Extract common dependencies into an existing entry chunk or an entirely new chunk
    // Code Splitting
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        utilities: {
          test: /[\\/]src[\\/]utilities[\\/]/,
          minSize: 0,
        },
      },
    },

    minimizer: [
      // Miniffy JS
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          },
          compress: true,
        },
        cache: true,
        sourceMap: false,
      }),

    ],
  },
});
