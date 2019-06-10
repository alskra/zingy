<template lang="pug">
	.vue-swiper.app-gallery-thumbs
		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				.swiper-slide(
					v-for="(image, index) of images"
					:key="index"
				)
					img.image.swiper-lazy(
						:data-src="image.thumb || image.src"
						:alt="image.caption | striphtml"
						@click="$emit('open', swiper.realIndex)"
					)

					.swiper-lazy-preloader

			.nav(v-if="images.length > 1")
				button.nav-button.nav-button-is-prev(
					type="button"
					:disabled="swiper.isBeginning"
					@click="swiper.slidePrev()"
				)
					base-icon.nav-button-icon(name="angle-left")

				button.nav-button.nav-button-is-next(
					type="button"
					:disabled="swiper.isEnd"
					@click="swiper.slideNext()"
				)
					base-icon.nav-button-icon(name="angle-left")

		.caption(
			v-if="swiper.realIndex !== undefined && images[swiper.realIndex].caption"
			v-html="images[swiper.realIndex].caption"
		)
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
					spaceBetween: 10,
					slidesPerView: 1,
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
			display: flex;
			flex-flow: column;
			position: relative;
		}
	}

	.swiper-container {
		width: 100%;
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
			filter: blur(10px);
			transition: filter 0.5s;
			will-change: filter;
		}

		&.swiper-lazy-loaded {
			opacity: 1;
			filter: blur(0);
		}
	}

	.nav {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: flex-end;
		pointer-events: none;
	}

	.nav-button {
		all: initial;
		pointer-events: auto;

		& {
			box-sizing: border-box;
			padding: scale-down(10px, 0.8);
			width: scale-down(50px, 0.8);
			height: scale-down(50px, 0.8);
			color: var(--color);
			background-color: rgba(#f0f0f0, 0.75);
			cursor: pointer;
			margin: 1px;
			transition: opacity 0.2s;
		}

		&:disabled {
			opacity: var(--disabled_opacity);
			cursor: default;
		}
	}

	.nav-button-is-prev {

	}

	.nav-button-is-next {
		.base-icon.nav-button-icon {
			transform-origin: 50% 50%;
			transform: rotate(180deg);
		}
	}

	.base-icon.nav-button-icon {

	}

	.caption {
		color: #999999;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-style: italic;
		line-height: 1.25;
		padding: 10px 0 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		>>> * {
			display: inline;
		}

		>>> p {
			margin: 0;
		}

		>>> a {
			color: var(--color-link);
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
