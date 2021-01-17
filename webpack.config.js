const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 8008,
    open:true,
  },
    plugins: [ new MiniCssExtractPlugin({filename: 'styles.css'}),
      new HtmlWebpackPlugin({template: './src/index.html'})],
    module: {
     rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: "babel-loader"
          },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        } 
    ]
    }
};
