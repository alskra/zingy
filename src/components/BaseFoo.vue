<template lang="pug">
	.foo.foo.foo
		p(@click="onClick") Foo
		slot(@click="onClick")
</template>

<script>
	/* eslint-disable */
	// import Vue from 'vue';

	const BaseFoo = {
		name: 'BaseFoo',
		// functional: true,
		// template: `<p></p>`,
		// render(createElement, ctx) {
		// 	return ctx.props.vnodes;
		// },

		methods: {
			onClick(){
				alert('click');
			}
		},
		beforeCreate() {
			console.log('beforeCreate');
			console.log(this);
			console.log(this.$el);
		},
		created() {
			console.log('created');
			console.log(this);
			console.log(this.$el);
		},
		mounted() {
			console.log('mounted');
			console.log(this);
			console.log(this.$el);
		}
	};

	export default BaseFoo;
</script>

<style scoped>
	.foo {
		color: red;
	}
</style>

<style scoped>
	.foo {
		color: black;
	}
</style>

<style scoped>
	.foo {
		color: green;
	}
</style>
