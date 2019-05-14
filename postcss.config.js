const {environmentVariables} = require('./postcss.import');

module.exports = {
	parser: 'postcss-scss',
	plugins: {
		'postcss-import': {
			filter(path) {
				return path.match(/\.pcss$/);
			}
		},
		'postcss-hexrgba': {},
		'postcss-functions': {
			functions: {
				range(
					from,
					to,
					minBreakpoint = environmentVariables['--min-breakpoint'],
					maxBreakpoint = environmentVariables['--max-breakpoint']
				) {

					[minBreakpoint, maxBreakpoint] = [minBreakpoint, maxBreakpoint].map(value => {
						const number = parseFloat(value);

						if (isNaN(number)) {
							throw new Error(`Argument '${value}' is NaN`);
						}

						return number;
					});

					return `calc(${from} + (${to} - ${from}) / (${maxBreakpoint} - ${minBreakpoint}) * 1000 * (var(--resolved-breakpoint) - ${minBreakpoint}) / 1000)`;
				},
				percentage(expression) {
					return (new Function('', `return ${expression} * 100 + '%'`))();
				}
			}
		},
		// 'postcss-calc': {},
		'postcss-preset-env': {
			stage: false,
			features: {
				'all-property': {
					replace: true
				},
				'any-link-pseudo-class': true,
				'blank-pseudo-class': true,
				'color-functional-notation': true,
				'custom-media-queries': true,
				'custom-properties': false, // ?
				'custom-selectors': true,
				'environment-variables': true,
				'focus-visible-pseudo-class': {
					replaceWith: '[data-focus-visible-added]'
				},
				'focus-within-pseudo-class': true,
				'image-set-function': true,
				'matches-pseudo-class': true,
				'media-query-ranges': true,
				'nesting-rules': false, // ?
				'not-pseudo-class': true,
				'overflow-property': true,
				'overflow-wrap-property': true
			},
			autoprefixer: false,
			preserve: false,
			importFrom: {environmentVariables}
		},
		'postcss-nested': {},
		autoprefixer: {
			cascade: false,
			add: true,
			remove: true
		}
	}
};
