<script>
	import ContentCarousel from './ContentCarousel';
	import AppReview from './AppReview';

	export default {
		name: 'ContentCarouselOfReviews',
		extends: ContentCarousel,
		components: {
			AppReview
		},
		data() {
			return {
				swiperOptions: {
					// slidesPerView: 1,
					// effect: 'fade',
					// autoHeight: true
				}
			};
		}
	};
</script>

<style scoped src="./ContentCarousel.vue"></style>

<style scoped>
	.main {
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		margin: 0 auto;
	}

	.grid {
		margin: 0 calc(-1 * var(--grid-cell-padding));
	}

	.grid-item {
		box-sizing: border-box;
		width: percentage(10 / 12);
		padding: 0 var(--grid-cell-padding);
		margin: 0 auto;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: range(10px, 20px);
			left: range(10px, -160px);
			width: range(376px / 2, 376px);
			height: range(277px / 2, 277px);
			color: #f0f0f0;
			pointer-events: none;
			background: url("../assets/img/open-quote.svg") no-repeat 50% 50% / contain;

			@media (width < 768px) {
				left: 10px;
			}
		}

		@media (width < 768px) {
			width: 100%;
		}
	}

	.swiper-container {
		margin: 0 calc(-1 * var(--grid-cell-padding));
	}

	.swiper-slide {
		padding: 0 var(--grid-cell-padding);
		box-sizing: border-box;
		width: 100%;
	}

	.swiper-pagination-box {
		width: 100%;
	}

	.swiper-pagination-cell {
		padding: 0 var(--grid-cell-padding);
	}
</style>
