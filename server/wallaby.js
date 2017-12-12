/* eslint no-underscore-dangle: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const mod = require('module');
const babelCore = require('babel-core');
const config = require('dotenv');

const wallabyConfig = (wallaby) => {
  process.env.NODE_PATH += path.delimiter + path.join(__dirname, 'node_modules') + path.delimiter
    + path.join(__dirname, 'node_modules/react-scripts/node_modules');

  mod.Module._initPaths();

  config.config();
  process.env.NODE_ENV = 'development';

  return {
    files: [
      'src/**/*.js', '!src/**/*.test.js',
    ],

    tests: ['src/**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node',
    },

    workers: {
      recycle: true,
    },

    compilers: {
      'src/**/*.js': wallaby
        .compilers
        .babel({
          babel: babelCore,
          plugins: [
            'transform-runtime', 'lodash',
          ],
          presets: ['es2015', 'stage-0'],
        }),
    },

    testFramework: 'jest',
  };
};

module.exports = wallabyConfig;
