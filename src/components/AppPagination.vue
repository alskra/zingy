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
			top: range(60px, 108px);
			bottom: 20px;
			left: var(--grid_padding);
		}

		&.is-hidden {
			display: none;
		}

		@media (width < 1366px) {
			position: relative;
			top: auto;
			bottom: auto;
			left: auto;
		}
	}

	.grid {
		margin: auto 0;
		display: flex;
		flex-flow: column;

		@media (width < 1366px) {
			flex-flow: row;
			flex-wrap: wrap;
			justify-content: center;
			margin: -5px;
		}
	}

	.grid-cell {
		margin: 5px auto;

		& + .grid-cell {
			&::before {
				content: '';
				display: block;
				width: 1px;
				height: 12px;
				background-color: var(--color-accent);
				margin: 0 auto 10px;
			}
		}

		@media (width < 1366px) {
			margin: 5px;
			display: flex;

			& + .grid-cell {
				&::before {
					width: 12px;
					height: 1px;
					margin: auto 10px auto 0;
				}
			}
		}
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 24px;
		height: 24px;
		color: var(--app-pagination_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 300;
		line-height: 1;
		user-select: none;

		>>> span,
		>>> a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 1px 4px 0;
		}

		>>> span {
			color: white;
			background-color: var(--color-accent);
			cursor: default;
		}

		>>> a {
			color: inherit;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: var(--color-accent);
			}
		}
	}
</style>
