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
      index: {
        import: './code-split/src/index.js',
      },
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../_dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '代码分隔',
        template: './code-split/index.html'
      })
    ],
    optimization: {
      usedExports: true,
      splitChunks: {
        cacheGroups: {
          venders: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors'
          }
        }
      }
    }
  };
};