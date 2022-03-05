const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'tool',
    },
    tool: {
      import: './src/tool.js',
    }
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin()
  ]
};