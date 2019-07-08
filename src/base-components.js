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
			required: true
		}
	},
	render(createElement, {props, parent}) {
		// console.log(props.vnodes);
		if (parent.$options._scopeId) {
			props.vnodes.forEach(vnode => {
				vnode.data = vnode.data || {};
				vnode.data.attrs = vnode.data.attrs || {};
				vnode.data.attrs[parent.$options._scopeId] = '';
			})
		}

		return props.vnodes;
	}
});

Vue.component('StyleScope', {
	functional: true,
	render(createElement, {props, parent, slots}) {
		return createElement({
			// functional: true,
			name: props.scope || parent.$options._scopeId,
			_scopeId: props.scope || parent.$options._scopeId,
			render() {
				return slots().default[0];
			}
		});
	}
});
