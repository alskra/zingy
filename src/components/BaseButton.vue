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
	.base-button {
		display: inline-flex;
		vertical-align: top;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding: 5px 20px;
		max-width: 100%;
		height: range(40px, 56px);
		background-color: var(--color);
		transition: background-color 0.2s;
		cursor: pointer;

		&:hover:not(:disabled) {
			background-color: var(--color-link);
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
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.4rem);
		font-weight: 500;
		letter-spacing: calc(1.05 / 14 * 1em);
		line-height: 1.25;
		text-transform: uppercase;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
