<script>
	import VueSwiper from './VueSwiper';

	export default {
		name: 'SideNav',
		components: {
			VueSwiper
		},
		data() {
			return {
				swiperOptions: {
					init: true,
					slidesPerView: 'auto',
					roundLengths: true,
					// freeMode: true,
					// freeModeMomentum: false
				}
			};
		},
		watch: {
			windowWidth: {
				handler(val) {
					this.swiperOptions.init = val < 1024
				},
				immediate: true
			}
		}
	};
</script>

<style scoped>
	.side-nav {
		all: initial;

		& {
			display: block;
		}
	}

	.header {
		position: relative;
		color: #cb5053;
		background-color: currentColor;

		&::after {
			content: '';
			position: absolute;
			top: 100%;
			left: range(10px, 20px);
			border-top: range(5px, 10px) solid currentColor;
			border-left: range(5px, 10px) solid transparent;
			border-right: range(5px, 10px) solid transparent;
			pointer-events: none;
		}
	}

	.header-inner {
		padding: range(15px, 30px) range(10px, 20px);
	}

	.header-title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2rem, 2.4rem);
		font-weight: 500;
		line-height: 1.25;
		margin-bottom: 0.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-bottom: 3px;
	}

	.header-title-text {
		display: inline;
		background: linear-gradient(to right, #e4797b, #e4797b) no-repeat 0 100% / 100% 1px;
		padding-bottom: 3px;
	}

	.header-desc {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.6rem);
		font-weight: 400;
		line-height: 1.5;
	}

	.main {
		padding: range(10px, 20px);
		background-color: var(--side-nav_background-color, #f0f0f0);
	}

	.vue-swiper.main-inner {
		margin: 0 range(-10px, -20px);

		>>> .swiper-slide {
			width: auto;
			max-width: 100%;
		}

		@media (width >= 1024px) {
			>>> .swiper-wrapper {
				flex-flow: column;
			}
		}

		@media (width < 1024px) {
			margin: range(-10px, -20px);
		}
	}

	.nav-item {
		display: block;
		box-sizing: border-box;
		padding: range(6px, 13px) range(10px, 20px);
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;

		&:hover,
		&.is-active {
			.nav-item-text {
				background-size: 100% 1px;
			}
		}

		@media (width < 1024px) {
			padding-top: range(15px, 20px);
			padding-bottom: range(15px, 20px);
			white-space: nowrap;
		}
	}

	.nav-item-text {
		display: inline;
		background: linear-gradient(to right, var(--color-link), var(--color-link)) no-repeat 0 100% / 0 1px;
		padding-bottom: 1px;
		transition: background-size 0.2s;
	}

	.side-nav-wide {
		@media (width < 1024px) {
			margin: 0 calc(-1 * var(--grid_padding));
		}

		.header-inner {
			@media (width < 1024px) {
				padding-right: var(--grid_padding);
				padding-left: var(--grid_padding);
			}
		}
	}
</style>
