<script>
	import VueSwiper from './VueSwiper';

	export default {
		name: 'AppCarousel',
		extends: VueSwiper,
		data() {
			return {
				defaultOptions: {
					pagination: {
						type: 'fraction',
						formatFractionCurrent(number) {
							return String(number).padStart(2, '0')
						},
						formatFractionTotal(number) {
							return String(number).padStart(2, '0')
						}
					}
				}
			}
		}
	};
</script>

<style scoped>
	.app-carousel {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}
	}

	.header {
		margin-bottom: range(20px, 30px);

		@media (width < 768px) {
			order: 1;
			margin-top: range(20px, 30px);
			margin-bottom: 0;
		}
	}

	.grid {
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		margin: 0 auto;
	}

	.grid-row {
		margin: 0 var(--grid-row_margin);
	}

	.grid-cell {
		box-sizing: border-box;
		width: percentage(10 / 12);
		padding: 0 var(--grid-cell_padding);
		margin: 0 auto;

		@media (width < 768px) {
			width: 100%;
		}
	}

	.nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		@media (width < 768px) {
			justify-content: center;
		}
	}

	.nav-button {
		all: initial;

		& {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 31px;
			height: 24px;
			color: var(--color);
			cursor: pointer;
			transition: color 0.2s;
		}

		&:hover:not(:disabled) {
			color: var(--color-accent);
		}

		&:disabled {
			opacity: 0.35;
			cursor: default;
		}
	}

	.nav-button-is-prev {
		transform-origin: 50% 50%;
		transform: rotate(-180deg);
	}

	.pagination {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		line-height: 1.25;
		cursor: default;
		user-select: none;
		margin: 0 range(20px, 50px);
	}
</style>
