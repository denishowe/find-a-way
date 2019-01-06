module.exports =
{
	mode: "development",	// default production
	module:
	{
		rules:
		[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use:
				[
					{
						loader: 'babel-loader',
						options: { presets: ["env", "react"] }
					}
				]
			}
		]
	},
    watch: true
};
