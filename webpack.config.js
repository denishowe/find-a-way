module.exports = {
  mode: 'development', // default: production
  output: { path: `${__dirname}/build` },
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
      { test: /\.html$/, use: 'html-loader' },
    ],
  },
  watch: true,
};
