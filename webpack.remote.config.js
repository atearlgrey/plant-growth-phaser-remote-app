// webpack.remote.config.js
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const common = require('./webpack.config.js');
const { dir } = require('console');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 4301,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true,
    },
    watchFiles: ['src/**/*'],
    headers: {
      'Access-Control-Allow-Origin': '*', // ✅ Cho phép từ bất kỳ origin
    },
  },
  output: {
    publicPath: 'auto',
    clean: false,
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
  ],
});
