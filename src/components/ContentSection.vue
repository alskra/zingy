<template lang="pug">
	.content-section
		.grid
			.grid-row
				.grid-cell.grid-cell-10.x-center
					base-content
						slot
</template>

<script>
	export default {
		name: 'ContentSection'
	};
</script>

<style scoped>
	.content-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: range(30px, 60px) 0;
			max-width: 100%;
			flex-flow: column;
			background-color: white;
		}
	}

	.grid {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}

	.grid-row {
		display: flex;
		margin: var(--grid-row_margin);
		flex-flow: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;

		&.x-center {
			margin: 0 auto;
		}
	}

	.grid-cell-10 {
		flex: 0 0 percentage(10 / 12);

		@media (width < 1024px) {
			flex-basis: 100%;
		}
	}
</style>
