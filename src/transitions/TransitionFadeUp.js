import Vue from 'vue';

Vue.component('TransitionFaseUp', {
	functional: true,
	render(createElement, context) {
		const data = {
			props: {
				mode: 'out-in',
				...context.props
			}
		};

		return createElement('transition', data, context.children);
	}
});
