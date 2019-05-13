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

Vue.component('Vnodes', {
	functional: true,
	render(createElement, ctx) {
		return ctx.props.vnodes;
	}
});

// Vue.component('TransitionBox', {
// 	functional: true,
// 	// template: `<p>VTransition</p>`,
// 	render(createElement, ctx) {
// 		// console.log(ctx);
// 		return createElement('transition', ctx.data, ctx.children);
// 	},
// 	created() {
// 		// console.log(this);
// 		// console.log(this.$el);
// 	}
// });

Vue.component('TransitionBox', {
	extends: Vue.component('Transition')
});

// Vue.mixin({
// 	mounted() {
// 		this.$el.classList.add(this.$options.name);
// 	}
// });
