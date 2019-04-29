<template lang="pug">
	.base-page
		.front-layout
			slot

		.back-layout
			slot(name="about-zingy")
</template>

<script>
	export default {
		name: 'BasePage'
	};
</script>

<style scoped>
	.base-page {
		all: initial;
		display: block;
		overflow: hidden;
		min-height: 200vh;
	}

	.front-layout {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		background-color: white;
	}

	.back-layout {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
