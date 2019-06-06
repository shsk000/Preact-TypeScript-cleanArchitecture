module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: "./src/index.ts",
  module: {
    rules: [{
      test: /\.ts?$/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'ts-loader'
      }],
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
  },
};
