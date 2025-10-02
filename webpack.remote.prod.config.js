const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: 'auto',
    clean: true,
    filename: '[name].[contenthash].js',
    library: { type: 'module' },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plantGrowthPhaser',
      filename: 'remoteEntry.js',
      exposes: {
        './PhaserMount': './src/phaser-entry.ts',
      },
      shared: {
        phaser: { singleton: true },
      },
      library: { type: 'module' },
    }),
  ],
});
