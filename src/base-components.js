import Vue from 'vue';

export const requireComponents = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/);

requireComponents.keys().forEach(fileName => {
	/**
	 * Поиск опций компонента в `.default`, который будет существовать,
	 * если компонент экспортирован с помощью `export default`,
	 * иначе будет использован корневой уровень модуля.
	 */
	const componentConfig = requireComponents(fileName).default || requireComponents(fileName);

	const componentName = componentConfig.name || (
		fileName
			.replace(/^.+\//, '')
			.replace(/\.\w+$/, '')
	);

	Vue.component(componentName, componentConfig);
});

Vue.component('VNodes', {
	functional: true,
	props: {
		vnodes: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	render(createElement, {props, parent}) {
		const scopeId = parent.$options._scopeId;

		props.vnodes.forEach(vnode => {
			if (vnode.tag && scopeId) {
				vnode.data = vnode.data || {};
				vnode.data.attrs = vnode.data.attrs || {};
				vnode.data.attrs[scopeId] = '';
			}
		});

		return props.vnodes;
	}
});
