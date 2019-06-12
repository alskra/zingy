<template lang="pug">
	button.like-button(v-on="$listeners")
		base-icon.icon(name="heart")

		.counter
			slot
</template>

<script>
	export default {
		name: 'LikeButton'
	};
</script>

<style scoped>
	.like-button {
		all: initial;

		& {
			display: inline-flex;
			vertical-align: top;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			padding: 0 10px;
			height: 34px;
			cursor: pointer;
		}
	}

	.base-icon.icon {
		flex: 0 0 auto;
		width: 24px;
		height: 24px;
		color: #cb5053;
	}

	.counter {
		flex: 0 0 auto;
		color: #999999;
		font-family: var(--font-family);
		font-size: 14px;
		font-weight: 500;
		line-height: 1.25;
		margin-left: 10px;
	}
</style>
