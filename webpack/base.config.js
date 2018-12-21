const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  // Compile for usage in a Node.js-like environment and load chunks
  // Do not touch any built in modules like fs or path
  target: 'node',

  // Omit the files from node_modules in the bundle
  // because the server can access these files directly
  externals: [nodeExternals()],

  // Define entry point
  entry:
  {
    main: [
      // Define server as an entry for SSR
      path.resolve(__dirname, '../src/server/index.js'),
    ],
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: '[name].[hash].bundle.js',
    // filename: '[name].bundle.js'
    filename: 'index.js',
  },

  node: {
    // Provide an empty object for FS
    fs: 'empty',
  },

  // Configurate webpack-dev-server
  devServer: {
    port: 3003,
  },

  module: {
    rules: [

      // The regular expression to take all .js* files for Babel to compile
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

      // Encode imgs files using the Base64 encoding.
      // Keep limits below 25kb
      // Example: Logo
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // Images larger than 12 KB won’t be inlined
            limit: 12 * 1024,
          },
        },
      },

      // Encode svg files using the URL encoding
      // Keep limits below 12kb
      // Example: Error page
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 12 * 1024,
          noquotes: true,
        },
      },

    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),

    // Copy all assets to dist folder
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      { from: 'src/config/*', to: '.', flatten: true }, // Cp all files from config and `flatten` to dest without directories
    ]),

    // Optimmize images
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      include: [
        path.resolve(__dirname, 'dist/assets'),
      ],
      cacheFolder: path.resolve('dist/assets/img-cached'),
      optipng: { optimizationLevel: 7 },
      gifsicle: { optimizationLevel: 3 },
      pngquant: { quality: '65-70', speed: 4 },
      svgo: { removeViewBox: false },
      jpegtran: null,
      plugins: [imageminMozjpeg({ quality: 80 })],
    }),
  ],
};
