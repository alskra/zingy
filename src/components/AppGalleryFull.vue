<i18n>
	{
		"en": {
			"more": "Show more",
			"less": "Show less"
		},
		"ru": {
			"more": "Показать",
			"less": "Скрыть"
		}
	}
</i18n>

<template lang="pug">
	.vue-swiper.app-gallery-full(
		@keyup.esc="$emit('close')"
		tabindex="0"
	)
		transition(appear)
			.overlay

		transition(appear)
			.header(
				v-show="controlsAreShown && !isZoomed"
				@mouseenter="showControls"
				@touchstart="showControls"
			)
				button.close-button(
					@click="$emit('close')"
				)
					base-icon.close-button-icon(name="close")

		.swiper-container(
			ref="swiperContainer"
			:style="{zIndex: isZoomed ? 4 : ''}"
			@mousemove="mousemoveHandler"
			@touchend="touchendHandler"
		)
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
			v-if="false"
			type="button"
			:disabled="swiper.isBeginning"
			@click="swiper.slidePrev()"
		)

		button.nav-button.nav-button-is-next(
			v-if="false"
			type="button"
			:disabled="swiper.isEnd"
			@click="swiper.slideNext()"
		)

		transition(appear)
			.footer(
				v-show="controlsAreShown && !isZoomed && caption"
				@mouseenter="showControls"
				@touchstart="showControls"
			)
				vue-truncate-collapsed.caption(
					:clamp="$t('more')"
					:less="$t('less')"
					:length="100"
					type="html"
					:text="caption"
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
					spaceBetween: 10,
					slidesPerView: 1,
					centeredSlides: true,
					slideToClickedSlide: false,
					preloadImages: false,
					lazy: true,
					keyboard: {
						enabled: true
					},
					zoom: true,
					mousewheel: true,
					grabCursor: true,
					on: {
						init: () => {
							this.toggleControls(true);
						},
						slideChange: () => {
							this.toggleControls(true);
						},
						zoomChange: (scale) => {
							this.isZoomed = scale !== 1;
						}
					}
				},
				isZoomed: false,
				controlsAreShown: false
			};
		},
		computed: {
			caption() {
				const index = this.swiper.realIndex;

				if (index >= 0 && this.images[index].caption) {
					return this.images[index].caption;
				}

				return '';
			}
		},
		methods: {
			toggleControls(val = !this.controlsAreShown) {
				val = !!val;

				clearTimeout(this.controlsTimer);

				this.controlsAreShown = val;

				if (val) {
					this.controlsTimer = setTimeout(() => {
						this.controlsAreShown = false;
					}, 3000);
				}
			},
			showControls() {
				clearTimeout(this.controlsTimer);

				this.controlsAreShown = true;
			},
			mousemoveHandler() {
				if (document.ontouchstart === undefined) {
					this.toggleControls(true);
				}
			},
			touchendHandler() {
				this.toggleControls();
			},
			closeHandler(evt) {
				if (['Escape', 'GoBack'].includes(evt.key)) this.$emit('close');
			}
		},
		created() {
			[
				document.documentElement,
				document.body
			].forEach(elem => elem.classList.add('app-gallery-scroll-block'));

			document.addEventListener('keyup', this.closeHandler);
		},
		destroyed() {
			[
				document.documentElement,
				document.body
			].forEach(elem => elem.classList.remove('app-gallery-scroll-block'));

			document.removeEventListener('keyup', this.closeHandler);
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
			overflow: hidden;
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(#000000, 0.8);

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
		z-index: 2;
		top: 0;
		left: 0;
		display: flex;
		box-sizing: border-box;
		padding: range(8px, 40px) var(--grid_padding) 0;
		width: 100%;

		&.v-enter,
		&.v-leave-to {
			transform: translateY(-100%);
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: transform 0.3s;
		}
	}

	.close-button {
		all: initial;

		& {
			margin-left: auto;
			width: range(44px, 58px);
			height: range(44px, 58px);
			color: #f0f0f0;
			cursor: pointer;
		}
	}

	.swiper-container {
		width: 100%;
		height: 100%;
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
		all: initial;

		& {
			position: absolute;
			top: 0;
			bottom: 0;
		}
	}

	.footer {
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		display: flex;
		box-sizing: border-box;
		padding: range(8px, 15px) var(--grid_padding);
		width: 100%;
		max-height: 100%;
		background-color: rgba(#000000, 0.7);

		&.v-enter,
		&.v-leave-to {
			transform: translateY(100%);
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: transform 0.3s;
		}
	}

	.caption {
		color: white;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.8rem);
		font-weight: 300;
		line-height: 1.5;
		overflow: hidden;
		text-overflow: ellipsis;
		overflow-y: auto;
		flex-grow: 1;
		max-height: calc(100vh - 2 * range(8px, 15px));

		>>> p {
			margin: 0;

			&:last-child {
				margin-bottom: 0;
			}
		}

		>>> a {
			color: inherit;
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
