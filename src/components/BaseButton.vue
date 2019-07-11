<template lang="pug">
	.base-button(
		:is="tag"
		v-on="$listeners"
	)
		slot(name="icon")

		span.content(v-if="$scopedSlots.default")
			slot
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
	.base-button {
		all: initial;

		& {
			display: inline-flex;
			box-sizing: border-box;
			vertical-align: top;
			border: 1px solid var(--base-button_border-color, transparent);
			padding: 5px range(15px, 20px) 4px;
			max-width: 100%;
			height: range(44px, 56px);
			justify-content: center;
			align-items: center;
			color: var(--base-button_color, #ffffff);
			font-family: var(--font-family);
			font-size: range(1.2rem, 1.4rem);
			font-weight: 500;
			letter-spacing: calc(1.05 / 14 * 1em);
			line-height: 1.25;
			text-transform: uppercase;
			background-color: var(--base-button_background-color, var(--color));
			transition:
				color,
				border-color,
				background-color,
				box-shadow;
			transition-duration: 0.2s;
			cursor: pointer;
		}

		&:hover:not(:disabled) {
			color: var(--base-button-hover_color, #ffffff);
			background-color: var(--base-button-hover_background-color, var(--color-accent));
		}

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 1px;
		}

		&:matches(:disabled, .is-disabled) {
			cursor: default;
			opacity: var(--disabled_opacity);
		}

		&.is-block {
			display: flex;
		}

		&.wide,
		&.is-full-width {
			width: 100%;
		}
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
