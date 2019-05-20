<template lang="pug">
	include BaseField.pug

	+BaseField()
</template>

<script>
	export default {
		name: 'BaseField'
	};
</script>

<style scoped>
	.BaseField {
		all: initial;

		& {
			display: inline-flex;
			vertical-align: top;
			align-items: center;
			box-sizing: border-box;
			padding: 5px 20px;
			height: 56px;
			border: 1px solid #050505;
			color: var(--color);
			font-family: var(--font-family);
			font-size: 1.8rem;
			line-height: 1.25;
			max-width: 100%;
			background-color: white;
			transition-property:
				color,
				background-color,
				border-color,
				box-shadow;
			transition-duration: 0.2s;
		}

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 1px;
		}

		&:disabled {
			cursor: default;
			opacity: 0.5;
		}

		&::placeholder {
			color: var(--color);
			font-weight: 300;
		}
	}
</style>
