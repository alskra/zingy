<template src="./BaseFoo" lang="pug"></template>

<script>
	import BaseFoo from './BaseFoo';

	export default {
		name: 'BaseFooExtOuter',
		extends: BaseFoo
	};
</script>

<style scoped src="./BaseFoo">
	.foo {
		color: green;
	}
</style>

<style scoped>
	@custom-selector :--host .bar;

	:--host {
		color: yellow;
	}
</style>

<style>
	/*@import "./BaseFoo.vue";*/
</style>
