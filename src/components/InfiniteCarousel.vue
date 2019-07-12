<template lang="pug">
	.infinite-carousel
		vue-swiper(
			ref="swiper"
			v-if="slides"
			:options="swiperOptions"
		)
			.swiper-slide(
				v-for=`
					(
						{
							tag,
							data: {
								attrs = {}
							} = {},
							slots: {
								image
							}
						},
						index
					) of slides
				`
				:key="index"
				:is="tag"
				v-bind="attrs"
			)
				.image-box(
					v-if="image"
				)
					img.image(
						v-bind="image[0].data.attrs"
					)
</template>

<script>
	import {getScopedSlot as getSlot} from '../helpers';
	import VueSwiper from './VueSwiper';

	export default {
		name: 'InfiniteCarousel',
		components: {
			VueSwiper
		},
		data() {
			return {
				swiperOptions: {
					init: false,
					slidesPerView: 'auto',
					centerInsufficientSlides: true,
					speed: 7000,
					autoplay: {
						delay: 0
					},
					allowTouchMove: false,
					loop: true,
					// loopedSlides: this.slides && this.slides.length,
					disableOnInteraction: false,
					on: {
						resize: () => {
							this.$refs.swiper.swiper.autoplay.stop();
							this.$refs.swiper.swiper.slideToLoop(0, 0);
							this.$refs.swiper.swiper.autoplay.start();
						}
					}
				}
			};
		},
		computed: {
			slides() {
				return getSlot(this.$scopedSlots.slides);
			}
		},
		mounted() {
			setTimeout(() => {
				this.swiperOptions.init = true;
			}, 50);

			// this.$nextTick(() => {
			// 	this.swiperOptions.init = true;
			// });

			// window.addEventListener('resize', this.swiper.autoplay.start);
		}
	};
</script>

<style scoped>
	.infinite-carousel {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.vue-swiper {
		>>> .swiper-container {

		}

		>>> .swiper-wrapper {
			transition-timing-function: linear;
		}
	}

	.swiper-slide {
		margin: 0;
		box-sizing: border-box;
		padding: range(10px, 20px);
		width: range(150px, 300px);
	}

	.image-box {
		position: relative;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(9 / 16);
		}
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
