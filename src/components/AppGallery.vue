<template lang="pug">
	.vue-swiper.app-gallery
		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				.swiper-slide(v-for="(image, imageIndex) of images")
					img.swiper-lazy.image(
						:data-src="image.href"
						:alt="image.alt"
						@click="index = imageIndex"
					)

					.swiper-lazy-preloader

		button.nav-button.nav-button-is-prev(
			type="button"
			:disabled="isBeginning"
			@click="slidePrev"
		) navButtonIsPrev

		button.nav-button.nav-button-is-next(
			type="button"
			:disabled="isEnd"
			@click="slideNext"
		) navButtonIsNext

		.title {{ images[realIndex || 0].title }}

		vue-gallery(
			:images="images"
			:index="index"
			@close="index = null"
		)
</template>

<script>
	import VueSwiper from './VueSwiper';
	import VueGallery from 'vue-gallery';

	export default {
		name: 'AppGallery',
		extends: VueSwiper,
		components: {
			VueGallery
		},
		props: {
			images: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				defaultOptions: {
					// Disable preloading of all images
					preloadImages: false,
					// Enable lazy loading
					lazy: true,
					// watchSlidesVisibility: true,
					// pagination: {
					// 	el: null
					// }
				},
				index: null
			};
		}
	};
</script>

<style scoped>
	.swiper-slide {
		&::before {
			content: '';
			display: block;
			padding-top: percentage(480 / 770);
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
	}
</style>
