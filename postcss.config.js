const {environmentVariables} = require('./postcss.import');

module.exports = {
	parser: 'postcss-scss',
	plugins: {
		'postcss-nested': {},
		'postcss-calc': {},
		'postcss-functions': {
			functions: {
				'range'(
					from,
					to,
					minBreakpoint = environmentVariables['--min-breakpoint'],
					maxBreakpoint = environmentVariables['--max-breakpoint']
				) {
					const unit = (from + to).match(/rem$/) ? 'rem' : 'px';

					[from, to, minBreakpoint, maxBreakpoint] = [from, to, minBreakpoint, maxBreakpoint].map(value => {
						const number = parseFloat(value);

						if (isNaN(number)) {
							throw new Error(`Argument '${value}' is NaN`);
						}

						return number;
					});

					return `calc(${from}${unit} + (${to}${unit} - ${from}${unit}) / (${maxBreakpoint} - ${minBreakpoint}) * (var(--resolved-breakpoint) - ${minBreakpoint}))`;
				},
				percentage(expression) {
					return (new Function('', `return ${expression} * 100 + '%'`))();
				}
			}
		},
		'postcss-hexrgba': {},
		'postcss-preset-env': {
			stage: false,
			features: {
				'all-property': process.env.NODE_ENV === 'production' ? {
					replace: true
				} : false,
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
			autoprefixer: {
				cascade: false,
				add: true,
				remove: true
			},
			preserve: false,
			importFrom: {environmentVariables}
		}
	}
};
