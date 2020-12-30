const HtmlWebPackPlugin = require('html-webpack-plugin');

const html = new HtmlWebPackPlugin({ template: 'src/index.html' });

module.exports = {
  mode: 'development', // default: production
  module: {
    rules:
    [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:
        [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
          },
        ],
      },
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
  plugins: [html],
};
