const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const copyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
  return {
    mode: 'development',
    devtool: false,
    // experiments: {
    //   outputModule: true,
    // },
    entry: {
      index: {
        import: './code-split/src/index.js',
      },
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../_dist'),
      clean: true,
      // library: {
      //   // name: 'tool',
      //   type: 'module'
      // },
    },
    plugins: [
      new MiniCssExtractPlugin(),
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
    },
    // exclude:path.resolve(__dirname, "node_modules")
    externals: {
      lodash: 'lodash'
    }
    // module: {
    //   rules: [
    //     {
    //       test: require.resolve('./src/tool.js'),
    //       use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
    //     }
    //   ]
    // }
  };
};