const path = require('path');

module.exports = [
    {
        entry: {
            main: './src/car.ts'
        },
        optimization: {
            minimize: false,
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                { test: /\.ts$/, use: 'ts-loader' }
            ]
        }
    }
];