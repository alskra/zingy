<script>
	import 'slick-carousel/slick/slick.css';
	import VueSlick from 'vue-slick';

	export default {
		name: 'ContentCarousel',
		data() {
			return {
				slickOptions: {
					initialSlide: 0,
					infinite: false,
					arrows: false
				},
				itemsCount: 0,
				currentItemIndex: 0,
				itemsPerPage: 1
			};
		},
		computed: {
			pagesCount() {
				return Math.ceil(this.itemsCount / this.itemsPerPage);
			},
			currentPageNumber: {
				get() {
					if (this.currentItemIndex === this.lastPageItemIndex) {
						return this.pagesCount;
					}

					return Math.ceil((this.currentItemIndex + 1) / this.itemsPerPage);
				},
				set(value) {
					if (value === this.pagesCount) {
						this.$refs.slick.goTo(this.lastPageItemIndex);
					} else {
						this.$refs.slick.goTo((value - 1) * this.itemsPerPage);
					}
				}
			},
			lastPageItemIndex() {
				if (this.itemsCount % this.itemsPerPage > 0) {
					return (this.pagesCount - 1) * this.itemsPerPage - (this.itemsPerPage - this.itemsCount % this.itemsPerPage);
				}

				return (this.pagesCount - 1) * this.itemsPerPage;
			}
		},
		components: {
			VueSlick
		},
		methods: {
			onSlickInit(event, slick) {
				// console.log(slick);
				this.itemsCount = slick.$slides.length;
				this.itemsPerPage = slick.slickGetOption('slidesToShow');
			},
			onSlickBreakpoint(event, slick) {
				this.itemsPerPage = slick.slickGetOption('slidesToShow');
			},
			onSlickBeforeChange(event, slick, currentSlide, nextSlide) {
				this.currentItemIndex = nextSlide;
			},
			padStartNumber(value) {
				return (value + '').padStart(2, '0');
			}
		},
		// created() {
		// 	console.log('created:', this.$el);
		// },
		// mounted() {
		// 	console.log('mounted:', this.$el.querySelectorAll('.slick-item').length);
		// 	this.itemsCount = this.$el.querySelectorAll('.slick-item').length;
		// }
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
			.arrow-button {
				opacity: 1;
			}
		}
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: calc(100% - 2 * var(--content-box-gutter));
		max-width: var(--content-box-width);
		margin: 0 auto range(25px, 50px);

		@media (width < 768px) {
			justify-content: center;
			order: 1;
			margin-top: range(25px, 50px);
			margin-bottom: 0;
		}
	}

	.actions-button {
		all: initial;

		& {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 31px;
			cursor: pointer;
			transition: color 0.2s;
		}

		&:hover {
			&:not(:disabled) {
				color: var(--color-link);
			}
		}

		&:disabled {
			opacity: 0.3;
			cursor: default;
		}

		&.actions-button-is-prev {
			margin-right: range(20px, 70px);
			transform: rotateY(-180deg);
		}

		&.actions-button-is-next {
			margin-left: range(20px, 70px);
		}
	}

	.actions-counter {
		flex-shrink: 0;
		color: #0a0a0a;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		line-height: 1.25;
		cursor: default;
		user-select: none;
	}

	.main {
		position: relative;
		min-height: range(347px / 2, 347px);
	}

	.arrow-button {
		all: initial;

		& {
			display: block;
			width: range(186px / 2, 186px);
			height: range(347px / 2, 347px);
			cursor: pointer;
			background: url("../assets/img/icons/dots-arrow.png") no-repeat 50% 50% / contain;
			position: absolute;
			top: range(30px, 60px);
			transition: opacity 0.2s;
			opacity: 0;

			@media (width < 1440px) {
				display: none;
			}
		}

		&:disabled {
			visibility: hidden;
		}

		&.arrow-button-is-prev {
			left: var(--content-box-gutter);
			transform: rotateY(-180deg);
		}

		&.arrow-button-is-next {
			right: var(--content-box-gutter);
		}
	}
</style>
