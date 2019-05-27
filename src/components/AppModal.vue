<template lang="pug">
	modal(
		v-bind="$attrs"
		v-on="$listeners"
		:classes="['host', 'app-modal']"
		:adaptive="true"
		height="auto"
		:scrollable="true"
		:reset="true"
	)
		.body
			header.header
				slot(name="title")
					h2.title Modal Heading

			slot
				p Modal Content
</template>

<script>
	export default {
		name: 'AppModal'
	};
</script>

<style>
	.v--modal-background-click {
		display: flex;
		flex-flow: column;
		padding: var(--grid-padding) 0;
	}

	.app-modal {
		display: flex;
		top: auto !important;
		left: auto !important;
		width: var(--grid-width) !important;
		max-width: calc(100% - 2 * var(--grid-padding));
		height: auto !important;
		margin: auto !important;
	}
</style>

<style scoped>
	.body {
		box-sizing: border-box;
		width: 100%;
		padding: range(15px, 100px) range(10px, 90px);
		margin: scale-down(13px, 0.5) scale-down(12px, 0.5) 0 0;
		background-color: #f2f4f5;
	}
</style>
