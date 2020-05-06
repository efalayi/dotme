const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const environment = process.env.NODE_ENV;
const isDevMode = environment === 'development';

module.exports = {
  mode: environment,
  entry: './js/app.js',
  output: {
    path: path.resolve('build/'),
    publicPath: 'build/',
    filename: 'bundle.js'
  },
  devServer: {
    compress: true
  },
 plugins: [
   new MiniCssExtractPlugin({
     filename: 'styles/[name].css',
     chunkFilename: 'styles/[id].css',
   })
 ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: isDevMode },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
  watch: isDevMode,
}