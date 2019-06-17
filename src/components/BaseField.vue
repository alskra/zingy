<template lang="pug">
	input.base-field(
		:value="value"
		@input="$emit('input', $event.target.value)"
	)
</template>

<script>
	export default {
		name: 'BaseField',
		props: {
			value: {
				type: String,
				default: null
			}
		}
	};
</script>

<style scoped>
	.base-field {
		all: initial;

		& {
			display: inline-flex;
			vertical-align: top;
			box-sizing: border-box;
			padding: 5px range(15px, 20px);
			max-width: 100%;
			height: range(44px, 56px);
			border: 1px solid currentColor;
			color: var(--color);
			font-family: var(--font-family);
			font-size: range(1.6rem, 1.8rem);
			line-height: 1.25;
			background-color: white;
			transition:
				color,
				border-color,
				background-color,
				box-shadow;
			transition-duration: 0.2s;
		}

		&::placeholder {
			color: #575757;
			font-weight: 300;
		}

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 1px;
		}

		&:disabled {
			cursor: default;
			opacity: var(--disabled_opacity);
		}

		&:invalid.is-validate {
			color: var(--color-error);
		}

		&.is-full-width {
			width: 100%;
		}
	}
</style>
