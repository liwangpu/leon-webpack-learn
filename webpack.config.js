const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    {
        entry: {
            index: './src/index.js',
            tool: './src/tool.js'
        },
        mode: 'development',
        optimization: {
            minimize: false,
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: 'source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
        },
        module: {
            rules: [
                // { test: /\.ts$/, use: 'ts-loader' },
                // { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: '测试',
                minify: false,
                template: './index.html'
            })
        ]
    }
];