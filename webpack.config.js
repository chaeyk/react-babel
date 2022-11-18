// webpack.config.js
const path = require('path')
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './public')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
}
