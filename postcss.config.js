const environmentVariables = {
	'--vw-min': '320px',
	'--vw-max': '1920px',
	'--content-width-max': '1200px'
};

module.exports = {
	parser: 'postcss-scss',
	plugins: {
		'postcss-nested': {},
		'postcss-calc': {},
		'postcss-functions': {
			functions: {
				'from-to'(
					from,
					to,
					vwMin = environmentVariables['--vw-min'],
					vwMax = environmentVariables['--vw-max']
				) {
					[from, to, vwMin, vwMax] = [from, to, vwMin, vwMax].map(value => {
						const number = parseFloat(value);

						if (isNaN(number)) {
							throw new Error(`Argument is NaN`);
						}

						return number;
					});

					return `calc(${from}px + (${to} - ${from}) / (${vwMax} - ${vwMin}) * (var(--vw) - ${vwMin}px))`;
				},
				percentage(expression) {
					// return eval(expression) * 100 + '%';
					return (new Function('', `return ${expression} * 100 + '%'`))();
				}
			}
		},
		'postcss-hexrgba': {},
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
