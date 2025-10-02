// webpack.dev.config.js
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
