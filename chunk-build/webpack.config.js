const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: false,
    entry: {
      index: { import: './chunk-build/src/index.js' },
      tool: { import: './chunk-build/src/tool.js', runtime: false },
    },
    output: {
      path: path.resolve(__dirname, '../_dist'),
      clean: true,
      library: 'myLib',
      libraryTarget: 'umd',
      filename: '[name].js',
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    externals: {
      tool: 'tool'
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          './chunk-build/index.html',
          './chunk-build/index.css'
        ]
      }),
    ],
  };
};