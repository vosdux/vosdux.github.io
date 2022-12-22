const path = require('path');

const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
      watch: true,
    },
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new Dotenv({
      path: './env/.env.development',
    }),
    new HtmlWebpackPlugin({
      template: './public/template.dev.html',
      // favicon: './src/assets/images/favicon.png',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
});
