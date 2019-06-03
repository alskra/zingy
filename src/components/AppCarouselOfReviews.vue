<script>
	import AppCarousel from './AppCarousel';
	import ReviewsItem from './ReviewsItem';

	export default {
		name: 'AppCarouselOfReviews',
		extends: AppCarousel,
		components: {
			ReviewsItem
		},
		data() {
			return {
				defaultOptions: {
					slidesPerView: 'auto',
					// spaceBetween: 20,
					// autoHeight: true
				}
			}
		}
	};
</script>

<style scoped src="./AppCarousel.vue">
</style>

<style scoped>
	.header {
		position: relative;
		z-index: 1;
	}

	.grid-cell {
		position: relative;
	}

	.base-icon.background-quote {
		position: absolute;
		top: range(-20px, -30px);
		left: range(10px, -150px);
		width: range(376px / 2, 376px);
		height: range(277px / 2, 277px);
		color: #f0f0f0;
		pointer-events: none;
		background: url("../assets/img/open-quote.svg") no-repeat 50% 50% / contain;

		@media (width < 768px) {
			left: var(--grid-cell_padding);
		}
	}

	.swiper-container {
		margin: 0 var(--grid-row_margin);
	}

	.swiper-slide {
		width: calc(100% - 2 * var(--grid-cell_padding));
		margin: 0 var(--grid-cell_padding);
	}
</style>
