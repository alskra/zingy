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
	},
	article: {
		template: 'public/templates/article.pug',
		filename: 'article.html'
	},
	contacts: {
		template: 'public/templates/contacts.pug',
		filename: 'contacts.html'
	},
	service: {
		template: 'public/templates/service.pug',
		filename: 'service.html'
	},
	'vue-sticky-exm': {
		template: 'public/templates/vue-sticky-exm.pug',
		filename: 'vue-sticky-exm.html'
	}
};

const pugTemplateLoaders = '!!pug-loader?pretty!';

module.exports = {
	publicPath: '',
	runtimeCompiler: true,
	devServer: {
		host: 'localhost',
		setup(app) {
			app.post('*', (req, res) => {
				res.redirect(req.originalUrl);
			});
		}
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

		// console.log(config.plugins.has('copy'));
		if (config.plugins.has('copy')) {
			config.plugin('copy')
				.tap(([options]) => {
					options.forEach(optionObj => optionObj.ignore = [
						...optionObj.ignore,
						...['*.pug']
					]);

					return [options];
				});
		}

		config.module
			.rule('i18n')
			.resourceQuery(/blockType=i18n/)
			.type('javascript/auto')
			.use('i18n')
			.loader('@kazupon/vue-i18n-loader')
			.end();
	},
	css: {
		sourceMap: process.env.NODE_ENV !== 'production'
	},
	transpileDependencies: [
		'css-blank-pseudo',
		'focus-within',
		'swiper',
		'dom7',
		'vue-clamp',
		'resize-detector',
		'vue-goodshare'
	]
};
