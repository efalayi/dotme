const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('js'),
  entry: './app.js',
  output: {
    path: path.resolve('build/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
 plugins: [
  new ExtractTextPlugin('styles/main.css')
 ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!autoprefixer-loader!sass-loader'
        })
      },
      {
        test: /\.(png|jpe?g)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watch: true,
}