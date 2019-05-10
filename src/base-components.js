import Vue from 'vue';

export const requireComponents = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/);

requireComponents.keys().forEach(fileName => {
	const componentConfig = requireComponents(fileName).default || requireComponents(fileName);

	const componentName = componentConfig.name || (
		fileName
			.replace(/^.+\//, '')
			.replace(/\.\w+$/, '')
	);

	Vue.component(componentName, componentConfig);
});

Vue.component('FVnodes', {
	functional: true,
	render(createElement, ctx) {
		return ctx.props.vnodes;
	}
});
