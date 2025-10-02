// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  devServer: {
    port: 4301,
    historyApiFallback: true,
    static: path.join(__dirname, 'public'),
    headers: {
      'Access-Control-Allow-Origin': '*', // ✅ Cho phép từ bất kỳ origin
    },
  },
  output: {
    publicPath: 'auto',
    clean: true,
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
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
