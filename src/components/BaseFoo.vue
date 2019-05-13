<template lang="pug">
	.foo.foo.foo
		p Foo
</template>

<script>
	// import Vue from 'vue';

	const BaseFoo = {
		name: 'BaseFoo',
		// functional: true,
		// template: `<p></p>`,
		// render(createElement, ctx) {
		// 	return ctx.props.vnodes;
		// },
		// beforeCreate() {
		// 	console.log(this);
		// 	console.log(this.$el);
		// },
		// created() {
		// 	console.log(this);
		// 	console.log(this.$el);
		// },
		// mounted() {
		// 	console.log(this);
		// 	console.log(this.$el);
		// }
	};

	export default BaseFoo;

	// Vue.component('BaseFooExt', {
	// 	name: 'BaseFooExt',
	// 	extends: BaseFoo,
	// 	render(...args) {
	// 		return BaseFoo.render.call(this, ...args);
	// 	}
	// })
</script>

<style scoped>
	@custom-selector :--host .foo:not(.foo > .foo);

	:--host {
		color: red;
	}

	.foo:not(.foo > .foo) {

	}
</style>
