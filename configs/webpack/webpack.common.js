const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { compilerOptions } = require('../../tsconfig');
const { getWebpackPathAliases } = require('../utils/pathAliases');

const rootDir = path.resolve(__dirname, '../../');
const pathAliases = getWebpackPathAliases(compilerOptions.paths, rootDir);

module.exports = {
  entry: {
    app: path.join(rootDir, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.tsx?$/,
        },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.css$/,
        },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: './assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: './assets/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[hash:8].bundle.js',
    path: path.join(rootDir, 'dist'),
    chunkFilename: '[name].[hash:8].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: pathAliases,
  },
};
