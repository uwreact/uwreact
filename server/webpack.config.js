const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const nodeModules = {};
fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  target: 'node',
  node: {
    __dirname: false
  },
  entry: [
    './index.js', ...(process.env.NODE_ENV === 'production'
      ? []
      : ['webpack/hot/poll'])
  ],
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'index.js'
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|scss)$/),
    new webpack.BannerPlugin({banner: 'require("source-map-support").install();', raw: true, entryOnly: false}),
    new LodashModuleReplacementPlugin(),
    ...(process.env.NODE_ENV === 'production'
      ? []
      : [new webpack.HotModuleReplacementPlugin()])
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-runtime', 'lodash'
            ],
            presets: ['es2015', 'stage-0']
          }
        }
      }
    ]
  }
};
