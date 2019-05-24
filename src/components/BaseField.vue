<template lang="pug">
	.host.base-field
		input(
			:class="['input', {'is-invalid': error}]"
			v-bind="$attrs"
			:value="value"
			@input="$emit('input', $event.target.value)"
		)

		transition
			slot(name="error")
				.error(v-if="error") {{ error }}
</template>

<script>
	export default {
		name: 'BaseField',
		inheritAttrs: false,
		props: {
			value: {
				type: String,
				default: ''
			},
			error: {
				type: String,
				default: null
			}
		}
	};
</script>

<style scoped>
	.base-field {
		display: inline-flex;
		vertical-align: top;
		flex-flow: column;
		max-width: 100%;
		position: relative;

		&.is-full-width {
			width: 100%;
		}
	}

	.input {
		all: initial;

		& {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding: 5px range(15px, 20px);
			width: 100%;
			height: range(44px, 56px);
			border: 1px solid currentColor;
			color: var(--color);
			font-family: var(--font-family);
			font-size: range(1.6rem, 1.8rem);
			line-height: 1.25;
			background-color: white;
			transition-property:
				color,
				background-color,
				border-color,
				box-shadow;
			transition-duration: 0.2s;
		}

		&::placeholder {
			color: var(--color);
			font-weight: 300;
		}

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 1px;
		}

		&:disabled {
			cursor: default;
			opacity: 0.6;
		}

		&.is-invalid {
			color: red;

			&::placeholder {
				color: red;
			}
		}
	}

	.error {
		color: white;
		font-family: var(--font-family);
		font-size: 1.2rem;
		line-height: 1.25;
		background: var(--color-link);
		padding: 3px 10px;
		margin-top: 4px;
		/*position: absolute;*/
		/*z-index: 1;*/
		/*top: 100%;*/
		/*right: 0;*/
		/*left: 0;*/

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.2s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}
</style>
