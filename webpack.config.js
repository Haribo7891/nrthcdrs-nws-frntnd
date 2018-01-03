const path = require('path');

const PATHS = {
  entry: path.join(__dirname, 'src', 'index.js'),
  public: path.join(__dirname, 'public'),
  src: path.join(__dirname, 'src')
};

module.exports = {
  entry: PATHS.entry,
  output: {
    filename: 'bundle.js',
    path: PATHS.public,
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        loader: 'babel-loader',
        options: {
          presets: [ 'react', 'env' ]
        }
      },
      {
        test: /\.js$/,
        include: PATHS.src,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          fix: true
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: PATHS.public,
    publicPath: '/',
    historyApiFallback: true,
    port: 9000
  }
};
