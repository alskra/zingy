<template lang="pug">
	include BaseButton.pug

	+BaseButton()
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
			box-sizing: border-box;
			max-width: 100%;
			cursor: pointer;
		}

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 1px;
		}

		&:disabled {
			cursor: default;
			opacity: 0.5;
		}

		&.is-full-width {
			width: 100%;
		}
	}

	.text {
		color: var(--color);
		font-family: var(--font-family);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
