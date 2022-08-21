const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: false,
    entry: {
      index: './simple/src/index.js',
    },
    output: {
      path: path.resolve(__dirname, '../_dist'),
      clean: true,
    },
  };
};