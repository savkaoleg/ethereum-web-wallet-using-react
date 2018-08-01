const path = require('path');
const webpack = require('webpack');

const settings = {
  entry: {
    bundle: [
      "react-hot-loader/patch",
      "./src/frontend/index.js"
    ]
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve("build")
  },
  resolve: {
    extensions: [".js", ".json", ".css"],
	alias: {
		'fs': path.resolve(__dirname, './src/www/fs-fake.js')
	}
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-0', 'react'],
          plugins: [
            "transform-node-env-inline"
          ],
          env: {
            development: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve("src/www"),
    publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
    quiet: false,
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
};

module.exports = settings;