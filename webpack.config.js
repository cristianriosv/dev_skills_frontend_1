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

const svgRules = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
};

const generateSassRule = (test = /\.s[ac]ss$/i, global = false, exclude = []) => ({
  test,
  exclude,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: global ? '[local]' : '[local]__[hash:base64:5]',
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: sass,
      },
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.join(__dirname, 'src', 'styles', '_variables.scss'),
          path.join(__dirname, 'src', 'styles', '_mixins.scss'),
        ],
      },
    },
  ],
});
const sassRules = generateSassRule(/\.s[ac]ss$/i, false, [path.join(__dirname, 'src', 'styles', 'global.scss')]);
const sassRulesForGlobal = generateSassRule(/global.s[ac]ss$/i, true);

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
      sassRulesForGlobal,
      svgRules,
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
