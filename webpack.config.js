const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
  //  './src/theme/elements.scss',
  //  './src/index.js'
  // patch hot-loader
   'react-hot-loader/patch',
   'webpack-dev-server/client?http://localhost:8080',
   // ยังจำได้ไหม webpack-der-server เราทำได้ทั้ง hot และ inline
   // แต่เราต้องการแค่ hot module replacement
   // เราไม่ต้องการ inline ที่จะแอบทะลึ่งไป reload เพจของเรา
   // เราจึงบอกว่าใช้ hot เท่านั้นนะ
   'webpack/hot/only-dev-server',
   './src/theme/elements.scss',
   './src/index.js'
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },

  plugins: [
  new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
        query: {
          presets: ['es2015', 'stage-0','react']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  devServer: {
    hot: true,
   inline: false,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:5000'
      }
    }
  }

};
