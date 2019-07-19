<template lang="pug">
	.faq
		.grid
			.grid-row
				.grid-cell(
					v-for="(item, index) of $getSlot('items')"
					:key="index"
				)
					app-faq-item.item(:item="item")
</template>

<script>
	import AppFaqItem from './AppFaqItem';

	export default {
		name: 'AppFaq',
		components: {
			AppFaqItem
		}
	};
</script>

<style scoped>
	.faq {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.grid {
		display: flex;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;
	}

	.grid-row {
		display: flex;
		margin: range(-5px, -10px) var(--grid-row_margin);
		flex-flow: wrap;
		justify-content: center;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(5px, 10px) var(--grid-cell_padding);
		flex: 0 0 percentage(10 / 12);
		min-width: 0;

		@media (width < 1024px) {
			flex-basis: 100%;
		}
	}
</style>
