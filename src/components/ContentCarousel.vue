<script>
	import 'swiper/dist/css/swiper.css';
	import {swiper as SwiperContainer, swiperSlide} from 'vue-awesome-swiper';

	export default {
		name: 'ContentCarousel',
		components: {
			SwiperContainer,
			swiperSlide
		},
		data() {
			return {
				swiperOptions: {
					slidesPerView: 'auto',
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction',
						formatFractionCurrent: (number) => String(number).padStart(2, '0'),
						formatFractionTotal: (number) => String(number).padStart(2, '0')
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}
			};
		},
		computed: {
			swiper() {
				return this.$refs.swiperContainer.swiper
			}
		}
	};
</script>

<style scoped>
	.ContentCarousel {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}

		&:hover {
			.swiper-button-prev-is-large,
			.swiper-button-next-is-large {
				opacity: 1;
			}
		}
	}

	.swiper-container {
		display: flex;
		flex-flow: column;
	}

	.swiper-pagination-box {
		order: -1;
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		margin: 0 auto range(20px, 30px);

		@media (width < 768px) {
			order: 1;
			margin-top: range(20px, 30px);
			margin-bottom: 0;
		}
	}

	.swiper-pagination-cell {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		@media (width < 768px) {
			justify-content: center;
		}
	}

	.swiper-button-prev,
	.swiper-button-next {
		all: initial;
		pointer-events: auto;
	}

	.swiper-button-prev-is-small,
	.swiper-button-next-is-small {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 31px;
		height: 24px;
		cursor: pointer;
		transition: color 0.2s;

		&:hover:not(.swiper-button-disabled) {
			color: var(--color-link);
		}

		&.swiper-button-disabled {
			opacity: 0.35;
			cursor: default;
		}
	}

	.swiper-button-prev-is-small {
		margin-right: range(20px, 50px);

		.base-icon {
			transform-origin: 50% 50%;
			transform: rotateY(-180deg);
		}
	}

	.swiper-button-next-is-small {
		margin-left: range(20px, 50px);
	}

	.swiper-pagination {
		all: initial;

		& {
			flex-shrink: 0;
			color: var(--color);
			font-family: var(--font-family);
			font-size: range(1.4rem, 1.6rem);
			line-height: 1.25;
			cursor: default;
			user-select: none;
		}
	}

	.swiper-button-prev-is-large,
	.swiper-button-next-is-large {
		display: block;
		width: range(186px / 2, 186px);
		height: range(347px / 2, 347px);
		cursor: pointer;
		background: url("../assets/img/icons/dots-arrow.png") no-repeat 50% 50% / contain;
		position: absolute;
		z-index: 1;
		top: range(30px, 60px);
		transition: opacity 0.2s;
		opacity: 0;

		&.swiper-button-disabled {
			visibility: hidden;
		}

		@media (width < 1440px) {
			display: none;
		}
	}

	.swiper-button-prev-is-large {
		left: var(--grid-padding);
		transform: rotateY(-180deg);
	}

	.swiper-button-next-is-large {
		right: var(--grid-padding);
	}
</style>
