<template lang="pug">
	.vue-swiper.swiper-gallery
		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				.swiper-slide(
					v-for="(image, index) of images"
					:key="index"
				)
					img.image.swiper-lazy(
						:data-src="image.thumb || image.src"
						:alt="stripCaption(image.caption)"
						@click="$swiperModalGallery(images, index)"
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

		.caption(v-html="caption || '&nbsp;'")
</template>

<script>
	import _ from 'lodash-es/lang.default';
	import VueSwiper from './VueSwiper';

	export default {
		name: 'SwiperGallery',
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
		},
		computed: {
			caption() {
				const index = this.swiper.realIndex;

				if (index >= 0 && _.isString(this.images[index].caption)) {
					return this.images[index].caption;
				}

				return '';
			}
		},
		methods:{
			stripCaption(caption) {
				if (_.isString(caption)) {
					caption = this.$stripHTML(caption);

					if (caption.length > 100) {
						caption = caption.slice(0, 100) + '...';
					}

					return caption;
				}

				return '';
			}
		}
	};
</script>

<style scoped>
	.swiper-gallery {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			box-sizing: border-box;
			max-width: 100%;
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

	.nav-button-is-next {
		.base-icon.nav-button-icon {
			transform-origin: 50% 50%;
			transform: rotate(180deg);
		}
	}

	.caption {
		margin-top: 10px;
		color: #999999;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-style: italic;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		>>> * {
			display: inline;
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
