const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.VUE_APP_NAME = 'Zingy';

const pages = {
	index: {
		template: 'public/templates/index.pug',
		filename: 'index.html'
	},
	blog: {
		template: 'public/templates/blog.pug',
		filename: 'blog.html'
	}
};

const pugTemplateLoaders = '!!pug-loader?pretty!';

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
						template: pugTemplateLoaders + pages.index.template,
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
										template: pugTemplateLoaders + pageOptions.template,
										filename: pageOptions.filename
									}
								}])
								.after('html');
						}
					});

				return [options];
			});

		config.plugins.has('copy') && config.plugin('copy')
			.tap(([options]) => {
				options.forEach(optionObj => optionObj.ignore = [
					...optionObj.ignore,
					...['*.pug']
				]);

				return [options];
			});
	},
	css: {
		sourceMap: process.env.NODE_ENV !== 'production'
	},
	transpileDependencies: [
		'css-blank-pseudo',
		'focus-within'
	]
};
