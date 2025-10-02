const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/phaser-entry.ts',
  mode: 'development',
  devServer: {
    port: 4301,
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath: 'auto',
    clean: true,
    library: { type: 'module' }, // ✅ QUAN TRỌNG
  },
  experiments: {
    outputModule: true, // ✅ BẮT BUỘC khi dùng 'library.type: module'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'plantGrowthPhaser',
      filename: 'remoteEntry.js',
      exposes: {
        './PhaserMount': './src/phaser-entry.ts',
      },
      shared: {
        phaser: { singleton: true, eager: true }, // hoặc không eager nếu cần lazy load
      },
      library: { type: 'module' }, // ✅ CŨNG CẦN ở đây
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
