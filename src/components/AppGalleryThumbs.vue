<template lang="pug">
	.vue-swiper.app-gallery-thumbs
		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				.swiper-slide(
					v-for="(image, index) of images"
					:key="index"
				)
					img.image.swiper-lazy(
						:data-src="image.thumb"
						:alt="image.caption"
						@click="$emit('open', swiper.realIndex)"
					)

					.swiper-lazy-preloader

		button.nav-button.nav-button-is-prev(
			type="button"
			:disabled="swiper.isBeginning"
			@click="swiper.slidePrev()"
		) navButtonIsPrev

		button.nav-button.nav-button-is-next(
			type="button"
			:disabled="swiper.isEnd"
			@click="swiper.slideNext()"
		) navButtonIsNext

		.caption {{ swiper.realIndex !== undefined ? images[swiper.realIndex].caption : null }}
</template>

<script>
	import VueSwiper from './VueSwiper';

	export default {
		name: 'AppGalleryThumbs',
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
					preloadImages: false,
					lazy: true
				}
			};
		}
	};
</script>

<style scoped>
	.app-gallery-thumbs {
		all: initial;

		& {
			display: block;
		}
	}

	.swiper-slide {
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
		object-fit: cover;
		cursor: pointer;

		&.swiper-lazy {
			opacity: 0;
			transition: opacity 0.5s;
		}

		&.swiper-lazy-loaded {
			opacity: 1;
		}
	}
</style>
