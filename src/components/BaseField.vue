<template lang="pug">
	include BaseField.pug

	+BaseField()
</template>

<script>
	export default {
		name: 'BaseField',
		data() {
			return {
				valid: true
			};
		},
		methods: {
			onInput(event) {
				event.target.classList.remove('is-invalid');
				event.target.setCustomValidity('');
				event.target.checkValidity();
			},
			onInvalid(event) {
				event.target.classList.add('is-invalid');

				if (event.target.validity.patternMismatch) {
					event.target.setCustomValidity(event.target.dataset.patternMismatch)
				} else if (!event.target.validity.valid) {
					event.target.setCustomValidity('Обязательное поле!')
				}
			}
		}
	};
</script>

<style scoped>
	.base-field {
		display: inline-flex;
		vertical-align: top;
		align-items: center;
		box-sizing: border-box;
		padding: 5px range(15px, 20px);
		height: range(40px, 56px);
		border: 1px solid currentColor;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		line-height: 1.25;
		max-width: 100%;
		background-color: white;
		transition-property:
			color,
			background-color,
			border-color,
			box-shadow;
		transition-duration: 0.2s;

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
			opacity: 0.5;
		}

		&.is-invalid {
			color: red;

			&::placeholder {
				color: red;
			}
		}

		&.is-full-width {
			width: 100%;
		}
	}
</style>
