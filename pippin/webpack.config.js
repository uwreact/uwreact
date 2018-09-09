const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  const entry = path.resolve(__dirname, 'src/index.js');

  const exclude = [/node_modules/];

  const buildPath = path.resolve(__dirname, 'build/');

  const rootModules = path.resolve(__dirname, '../node_modules');

  return {
    entry,
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude,
          use: ['babel-loader', 'eslint-loader'],
        },
      ],
    },
    resolve: { extensions: ['*', '.js'] },
    output: {
      filename: '[name].js',
      path: buildPath,
      library: 'blue',
      libraryTarget: 'umd',
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
      ],
    },
    target: 'node',
    externals: [
      nodeExternals(),
      nodeExternals({
        modulesDir: rootModules,
      }),
    ],
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
      }),
      new DotenvPlugin({
        path: `.env.${process.env.NODE_ENV}`,
      }),
      new CleanWebpackPlugin(['build']),
      new CopyWebpackPlugin([
        {
          from: 'package.json',
          transform: content =>
            Buffer.from(
              JSON.stringify({
                ...JSON.parse(content.toString()),
                scripts: undefined,
                devDependencies: undefined,
              }),
            ),
        },
      ]),
      new WebpackShellPlugin({
        onBuildExit: {
          scripts: ['./post-build.sh'],
        },
      }),
    ],
  };
};
