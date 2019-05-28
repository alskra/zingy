<template lang="pug">
	.base-content
		slot
</template>

<script>
	export default {
		name: 'BaseContent'
	};
</script>

<style scoped>
	.base-content {
		all: initial;

		& {
			display: block;
			color: var(--color);
			font-family: var(--font-family);
			font-size: var(--font-size);
			font-weight: 400;
			line-height: 1.5;
		}

		>>> p {
			margin: 0 0 1.5em;
		}

		:last-child {
			margin-bottom: 0;
		}
	}
</style>
