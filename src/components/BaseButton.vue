<template lang="pug">
	.BaseButton(:is="tag")
		span.l-icon-box(v-if="$scopedSlots.icon")
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
			display: flex;
			justify-content: center;
			align-items: center;

			&:not(:disabled) {
				cursor: pointer;
			}
		}
	}

	.l-icon-box {
		flex-shrink: 0;
	}

	.text {
		color: var(--color, #0a0a0a);
		font-family: var(--font-family, sans-serif);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
