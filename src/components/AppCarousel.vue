<template lang="pug">
	include ../../public/templates/components/parts/AppCarouselHeader.pug

	.vue-swiper.app-carousel
		+AppCarouselHeader()

		.main
			.swiper-container(ref="swiperContainer")
				.swiper-wrapper
					.swiper-slide(
						v-for="(slide, index) of slides"
						:key="index"
					)
						.swiper-slide-inner(
							:style=`{
								opacity: swiper.initialized ? '' : 0,
								transitionDelay: \`\${(index + 1) * 0.2}s\`
							}`
						)
							v-nodes(:vnodes="[slide]")
</template>

<script>
	import {getScopedSlot} from '../helpers';
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
		},
		computed: {
			slides() {
				return getScopedSlot(this.$scopedSlots.slides);
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
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}

	.grid-row {
		margin: 0 var(--grid-row_margin);
	}

	.grid-cell {
		box-sizing: border-box;
		padding: 0 var(--grid-cell_padding);

		@media (width >= 1440px) {
			margin: 0 percentage(-1 / 12);
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

	.swiper-slide-inner {
		height: 100%;
		transition: opacity 0.3s;
	}

	.app-carousel-of-articles {
		.main {
			margin: 0 auto;
			width: calc(100% - 2 * var(--grid_padding));
		}

		.swiper-container {
			margin: 0 calc(-1 * var(--grid_padding));
			padding: 0 range(0px, 20px);
		}

		.swiper-slide {
			margin: 0 range(10px, 20px);
			width: range(300px, 695px);
			height: auto;
		}
	}
</style>
