<template lang="pug">
	include BaseButton.pug

	+BaseButton().BaseButtonIsPrimary
</template>

<script>
	import BaseButton from './BaseButton';

	export default {
		name: 'BaseButtonIsPrimary',
		extends: BaseButton
	};
</script>

<style scoped src="./BaseButton.vue"></style>

<style scoped>
	.BaseButtonIsPrimary {
		padding: 5px 20px;
		height: 56px;
		background-color: var(--color);
		transition: background-color 0.2s;

		&:hover:not(:disabled) {
			background-color: var(--color-link);
		}
	}

	.text {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.4rem);
		font-weight: 500;
		letter-spacing: calc(1.05 / 14 * 1em);
		text-transform: uppercase;
	}
</style>
