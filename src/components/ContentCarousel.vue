<script>
	import 'slick-carousel/slick/slick.css';
	import VueSlick from 'vue-slick';

	export default {
		name: 'ContentCarousel',
		props: {
			count: {
				type: Number,
				required: true
			},
			initial: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				slickOptions: {
					initialSlide: this.initial,
					infinite: false,
					arrows: false
				},
				currentIndex: this.initial
			};
		},
		components: {
			VueSlick
		},
		methods: {
			onSlickBeforeChange(event, slick, currentSlide, nextSlide) {
				this.currentIndex = nextSlide;
			},
			padStartNumber(value) {
				return (value + '').padStart(2, '0');
			}
		}
	};
</script>

<style scoped>
	.ContentCarousel {
		all: initial;

		& {
			display: block;
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
			margin-right: range(35px, 70px);
			transform: rotateY(-180deg);
		}

		&.actions-button-is-next {
			margin-left: range(35px, 70px);
		}
	}

	.actions-counter {
		color: #0a0a0a;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		line-height: 1.25;
		cursor: default;
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
			top: 0;
			transition: opacity 0.2s;
			opacity: 0;
			/*filter: drop-shadow(0 0 1px white) drop-shadow(0 0 1px white) drop-shadow(0 0 1px white);*/

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
