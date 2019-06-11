const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/client/main.tsx',
  module: {
    rules: [{
      test: /\.(ts|tsx)?$/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'ts-loader'
      }],
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/client/index.html'),
      inject: true
    })
  ],
};
