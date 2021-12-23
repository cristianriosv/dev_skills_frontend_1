const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules'
};

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    devServer: {
        port: 3000,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            typescriptRules
        ]
    },
    output: {
        filename: './static/app.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new EslintWebpackPlugin({
            extensions: ['tsx']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}