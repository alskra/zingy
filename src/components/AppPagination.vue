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
			top: 0;
			bottom: 0;
			left: var(--grid_padding);
			/*transform: translateY(-50%);*/
		}

		&.is-hidden {
			visibility: hidden;
		}

		@media (width < 1440px) {
			position: relative;
			left: auto;
		}
	}

	.grid {
		display: flex;
		flex-flow: column;
		margin: auto 0;

		@media (width < 1440px) {
			flex-flow: row;
			flex-wrap: wrap;
			justify-content: center;
			margin: -6px;
		}
	}

	.grid-cell {
		margin: 6px auto;

		& + .grid-cell {
			&::before {
				content: '';
				display: block;
				width: 1px;
				height: 20px;
				background-color: var(--color-accent);
				margin: 0 auto 12px;
			}
		}

		@media (width < 1440px) {
			margin: 6px;
			display: flex;

			& + .grid-cell {
				&::before {
					width: 20px;
					height: 1px;
					margin: auto 12px auto 0;
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
