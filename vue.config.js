const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadPlugin = require('@vue/preload-webpack-plugin');

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
	development: {
		template: 'public/templates/development.pug',
		filename: 'development.html'
	},
	services: {
		template: 'public/templates/services.pug',
		filename: 'services.html'
	},
	seo: {
		template: 'public/templates/seo.pug',
		filename: 'seo.html'
	},
	'audit-sajta': {
		template: 'public/templates/audit-sajta.pug',
		filename: 'audit-sajta.html'
	},
	'vue-sticky-exm': {
		template: 'public/templates/vue-sticky-exm.pug',
		filename: 'vue-sticky-exm.html'
	},
	'IBM-Plex-Sans/index': {
		template: 'public/templates/IBM-Plex-Sans/index.pug',
		filename: 'IBM-Plex-Sans/index.html'
	},
	'Source-Sans-Pro/index': {
		template: 'public/templates/Source-Sans-Pro/index.pug',
		filename: 'Source-Sans-Pro/index.html'
	},
	'Exo-2/index': {
		template: 'public/templates/Exo-2/index.pug',
		filename: 'Exo-2/index.html'
	}
};

const pugTemplateLoaders = '!!pug-loader?pretty!';

module.exports = {
	publicPath: '/',
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

		config.plugin('preload-async')
			.use(PreloadPlugin, [{
				rel: 'preload',
				include: 'asyncChunks',
				fileBlacklist: [
					/\.map$/,
					/\.js$/
				]
			}])
			.after('preload');

		if (config.plugins.has('prefetch')) {
			// config.plugin('prefetch').tap(options => {
			// 	options[0].rel = 'preload';
			//
			// 	return options;
			// });

			config.plugins.delete('prefetch');
		}
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
