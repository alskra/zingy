<template src="./BaseFoo" lang="pug"></template>

<script>
	import BaseFoo from './BaseFoo';

	export default {
		name: 'BaseFooExtOuter',
		extends: BaseFoo
	};
</script>

<style scoped src="./BaseFoo.vue">
	.foo {
		color: green;
	}
</style>

<style scoped src="./BaseFoo"></style>

<style src="./BaseFoo"></style>

<style scoped>

</style>

<style>
	/*@import "./BaseFoo.vue";*/
</style>
