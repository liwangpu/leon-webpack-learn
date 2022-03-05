const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const copyPlugin = require("copy-webpack-plugin");

module.exports = [
    {
        entry: {
            // index: {
            //     import: './src/index.js',
            //     dependOn: 'tool',
            // },
            // tool: {
            //     import: './src/tool.js',
            //     dependOn: 'shared',
            // },
            // shared: 'lodash',
            index: './src/index.ts',
            // tool: './src/tool.js'
        },
        devtool: false,
        mode: 'development',
        // mode: 'production',
        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            // minimize: false,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        output: {
            // filename: '[name].bundle.js',
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
            chunkLoadingGlobal: 'myWebSiteLib',
        },
        // devtool: 'source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
            // hot: true,
            open: false
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Webpack学习',
                minify: false,
                template: './index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new copyPlugin({
                patterns: [
                    "./favicon.ico"
                ],
            }),
        ]
    }
];