const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const copyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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