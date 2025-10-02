// webpack.remote.config.js
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const common = require('./webpack.config.js');

module.exports = merge(common, {
  output: {
    publicPath: 'auto',
    clean: true,
    library: { type: 'module' },
  },
  experiments: {
    outputModule: true, // cần cho library.type = module
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plantGrowthPhaser',
      filename: 'remoteEntry.js',
      exposes: {
        './PhaserMount': './src/phaser-entry.ts',
      },
      shared: {
        phaser: { singleton: true }, // remote không eager
      },
      library: { type: 'module' },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
