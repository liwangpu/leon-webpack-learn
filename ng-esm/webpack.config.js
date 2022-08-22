const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: false,
    entry: {
      index: './ng-esm/src/index.js',
    },
    output: {
      path: path.resolve(__dirname, '../_dist'),
      clean: true,
    },
    externals: {
      "@angular/core": "'@angular/core'",
      "@angular/common": "'@angular/common'"
    }
  };
};