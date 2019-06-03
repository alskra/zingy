<template lang="pug">
	transition(appear)
		.base-title(
			:is="tag"
			:class="'base-title-is-' + tag"
		)
			slot
</template>

<script>
	export default {
		name: 'BaseTitle',
		props: {
			tag: {
				type: String,
				default: 'h1'
			}
		}
	};
</script>

<style scoped>
	.base-title {
		all: initial;

		& {
			display: block;
			color: var(--base-title_color, var(--color));
			font-family: var(--font-family);
			font-size: var(--h1_font-size);
			font-weight: 500;
			line-height: 1.25;
		}

		&.v-enter-active,
		&.v-leae-active {
			transition: opacity 0.4s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}
</style>
