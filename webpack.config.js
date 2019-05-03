module.exports = {
  mode: 'development', // default production
  module:
  {
    output: { path: `${__dirname}/build` },
    rules:
    [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:
        [
          {
            loader: 'babel-loader',
            options: { presets: ['env', 'react'] },
          },
        ],
      },
      { test: /\.html$/, use: 'html-loader' },
    ],
  },
  watch: true,
};
