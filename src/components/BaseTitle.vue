<template lang="pug" functional>
	transition(appear)
		.base-title(
			:is="props.tag"
			v-bind="{...data.attrs, [parent.$options._scopeId]: ''}"
			v-on="listeners"
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
			color: var(--color);
			font-family: var(--font-family);
			font-size: var(--font-size-h1);
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
