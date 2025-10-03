const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 4301,
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true,
    },
    watchFiles: ['src/**/*'],
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    clean: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
