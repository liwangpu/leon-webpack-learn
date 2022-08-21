const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: false,
    entry: {
      index: './custom-loader/src/index.js',
    },
    output: {
      path: path.resolve(__dirname, '../_dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // loader: 'loader1',
          use: [
            'loader1',
            'loader2'
          ]
        }
      ]
    },
    resolveLoader: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'loaders')
      ]
    }
  };
};