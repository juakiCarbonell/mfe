const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // transpiles modern JS to ES5
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // transpiles modern JS to ES5
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}
