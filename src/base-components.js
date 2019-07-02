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
	render(createElement, ctx) {
		// console.log(ctx.props.vnodes);
		return ctx.props.vnodes;
	}
});

Vue.component('StyleScope', {
	functional: true,
	render(createElement, ctx) {
		return createElement({
			// functional: true,
			name: ctx.props.scope || ctx.parent.$options._scopeId,
			_scopeId: ctx.props.scope || ctx.parent.$options._scopeId,
			render() {
				return ctx.slots().default[0];
			}
		});
	}
});
