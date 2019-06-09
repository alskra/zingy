<template lang="pug">
	.vue-swiper.app-gallery-full
		transition(appear)
			.overlay

		.header
			.caption(
				v-if="swiper.realIndex !== undefined && images[swiper.realIndex].caption"
				v-html="images[swiper.realIndex].caption"
			)

			button.close-button(
				@click="$emit('close')"
			) Close

		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				.swiper-slide(
					v-for="(image, index) of images"
					:key="index"
				)
					.swiper-zoom-container
						img.image.swiper-lazy(
							:data-src="image.src"
							:alt="image.caption | striphtml"
						)

					.swiper-lazy-preloader.swiper-lazy-preloader-white

		button.nav-button.nav-button-is-prev(
			type="button"
			:disabled="swiper.isBeginning"
			@click="swiper.slidePrev()"
		)

		button.nav-button.nav-button-is-next(
			type="button"
			:disabled="swiper.isEnd"
			@click="swiper.slideNext()"
		)
</template>

<script>
	import VueSwiper from './VueSwiper';

	export default {
		name: 'AppGalleryFull',
		extends: VueSwiper,
		props: {
			images: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				defaultOptions: {
					spaceBetween: 20,
					slidesPerView: '1.125',
					centeredSlides: true,
					slideToClickedSlide: true,
					preloadImages: false,
					lazy: true,
					keyboard: {
						enabled: true
					},
					zoom: true,
					breakpoints: {
						1024: {
							slidesPerView: 1
						}
					}
				}
			};
		},
		created() {
			[document.documentElement, document.body].forEach(elem => elem.classList.add('app-gallery-scroll-block'));
		},
		destroyed() {
			[document.documentElement, document.body].forEach(elem => elem.classList.remove('app-gallery-scroll-block'));
		}
	};
</script>

<style>
	.app-gallery-scroll-block {
		overflow: hidden;
	}
</style>

<style scoped>
	.app-gallery-full {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			position: fixed;
			z-index: 999;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(#000000, 0.7);

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.3s;
		}
	}

	.header {
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
	}

	.caption {
	}

	.close-button {
		margin-left: auto;
	}

	.swiper-container {
		width: 100%;
		height: 100vh;
	}

	.swiper-slide {
		&.swiper-slide-zoomed {
			z-index: 1;
		}
	}

	.swiper-zoom-container {

	}

	.image {
		&.swiper-lazy {
			opacity: 0;
			filter: blur(10px);
			transition: filter 0.5s;
			will-change: filter;
		}

		&.swiper-lazy-loaded {
			opacity: 1;
			filter: blur(0);
		}
	}

	.nav-button {
		position: absolute;
	}
</style>
