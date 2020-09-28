const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
            { test: '/\.tsx?$/', use: 'ts-loader', exclude: '/node_modules/' },
            {
                test: '/\.css$/i',
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist')
    }
}