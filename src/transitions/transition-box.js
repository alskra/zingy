import Vue from 'vue';

Vue.component('TransitionBox', {
	functional: true,
	render(createElement, context) {
		return createElement('transition', context.data, context.children);
	}
});
