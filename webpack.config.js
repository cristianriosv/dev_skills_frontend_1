const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules'
};

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}