const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.VUE_APP_NAME = 'Zingy';

const pages = {
	index: {
		template: 'public/index.pug',
		filename: 'index.html'
	},
	blog: {
		template: 'public/blog.pug',
		filename: 'blog.html'
	}
};

module.exports = {
	runtimeCompiler: true,
	devServer: {
		host: 'localhost'
	},
	chainWebpack(config) {
		config.plugin('html')
			.tap(([options]) => {
				options = {
					...options,
					...{
						template: '!!pug-loader?pretty!' + pages.index.template,
						filename: pages.index.filename,
						minify: false
					}
				};

				Object.entries(pages)
					.reverse()
					.forEach(([pageKey, pageOptions]) => {
						if (pageKey !== 'index') {
							config.plugin(`html-${pageKey}`)
								.use(HtmlWebpackPlugin, [{
									...options,
									...{
										template: '!!pug-loader?pretty!' + pageOptions.template,
										filename: pageOptions.filename
									}
								}])
								.after('html');
						}
					});

				return [options];
			});

		config.plugin('copy')
			.tap(([options]) => {
				options[0].ignore = [
					...options[0].ignore,
					...['*.pug']
				];

				return [options];
			});
	},
	css: {
		sourceMap: process.env.NODE_ENV !== 'production'
	}
};
