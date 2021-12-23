const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const sass = require('sass');

const typescriptRules = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: '/node_modules',
};

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // Prefer `dart-sass`
        implementation: sass,
      },
    },
  ],
};

module.exports = (env, { mode }) => ({
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  devServer: {
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      typescriptRules,
      sassRules,
    ],
  },
  output: {
    filename: './static/app.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ['tsx'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    mode === 'production' && new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true,
      reportFilename: 'bundle_report.html',
    }),
  ].filter(Boolean),
});
