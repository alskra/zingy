<template lang="pug">
	nav.app-pagination(v-if="$scopedSlots.default")
		.grid
			.grid-cell(v-for="(item, index) in $scopedSlots.default()" :key="index + 1")
				.item
					v-nodes(:vnodes="item")
</template>

<script>
	export default {
		name: 'AppPagination'
	};
</script>

<style scoped>
	.app-pagination {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			position: fixed;
			/*z-index: 99;*/
			top: 50%;
			left: var(--grid_padding);
		}
	}

	.grid {
		display: flex;
		flex-flow: column;
		margin: -6px 0;
	}

	.grid-cell {
		margin: 6px auto;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 23px;
		height: 23px;
		color: var(--app-pagination_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 300;
		line-height: 1.25;
		user-select: none;

		>>> span,
		>>> a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			padding: 0 4px;
		}

		>>> span {
			color: white;
			background-color: var(--color-accent);
			cursor: default;
		}

		>>> a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
