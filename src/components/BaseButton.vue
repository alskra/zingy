<template lang="pug">
	.BaseButton(:is="tag")
		slot(name="icon")

		span.text(v-if="$scopedSlots.default")
			slot(name="default")
</template>

<script>
	export default {
		name: 'BaseButton',
		props: {
			tag: {
				type: String,
				default: 'button'
			}
		}
	};
</script>

<style scoped>
	.BaseButton {
		all: initial;

		& {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			vertical-align: top;
			max-width: 100%;
			cursor: pointer;

			&:disabled {
				cursor: default;
			}

			&.is-full-width {
				width: 100%;
			}
		}
	}

	.text {
		color: var(--color, #0a0a0a);
		font-family: var(--font-family, sans-serif);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
