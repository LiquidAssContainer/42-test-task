const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('./paths');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
require('dotenv').config();

const config = {
  entry: [paths.src],
  output: {
    path: paths.dist,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g)$/,
        use: 'url-loader',
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true,
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
    }),
    new InterpolateHtmlPlugin(process.env),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', path.join(__dirname, '../src')],
    // alias: {
    //   'react-dom': '@hot-loader/react-dom',
    // },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../tsconfig.json'),
      }),
    ],
  },
};

module.exports = config;
