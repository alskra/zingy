import Vue from 'vue';

Vue.component('TransitionSlideX', {
	functional: true,
	render(createElement, context) {
		const setWidth = el => el.style.width = el.children[0].offsetWidth + 'px';
		const resetWidth = el => el.style.width = '';

		const data = {
			props: {
				mode: 'out-in',
				...context.props
			},
			on: {
				enter: setWidth,
				afterEnter: resetWidth,
				leave: setWidth,
				afterLeave: resetWidth
			}
		};

		return createElement('transition', data, context.children);
	}
});
