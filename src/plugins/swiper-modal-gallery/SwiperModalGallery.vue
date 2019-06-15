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
	.vue-swiper.swiper-modal-gallery(v-lock-body-scroll="shown")
		transition
			.overlay(v-if="shown")
				.overlay-cover(:style="{backgroundImage: cover ? `url(${cover})` : ''}")

		transition
			.header(
				v-show="shown && controlsShown && !zoomed"
				@mouseenter="showControls"
				@touchstart="showControls"
			)
				.pagination(ref="pagination")

				button.close-button(
					@click="close"
				)
					base-icon.close-button-icon(name="close")

		.swiper-container(
			ref="swiperContainer"
			:class="{'shown': shown, 'zoomed': zoomed}"
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
							:data-srcset="image.srcset"
							:sizes="image.sizes"
							:alt="stripCaption(image.caption)"
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

		transition
			.footer(
				v-show="shown && controlsShown && !zoomed && caption"
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
	import VueSwiper from '../../components/VueSwiper';

	const resolveRef = document.createElement('link');

	export default {
		name: 'SwiperModalGallery',
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
					pagination: {
						type: 'fraction'
					},
					on: {
						init: () => {
							this.toggleControls(true);
						},
						slideChange: () => {
							this.toggleControls(true);
						},
						zoomChange: scale => {
							this.zoomed = scale !== 1;
						},
						lazyImageReady: (slideEl, imageEl) => {
							this.covers.push(imageEl.src);
						}
					}
				},
				shown: false,
				zoomed: false,
				controlsShown: false,
				covers: []
			};
		},
		computed: {
			cover() {
				try {
					const index = this.swiper.realIndex;
					const previousIndex = this.swiper.previousIndex;

					resolveRef.href = this.images[index].src;

					if (this.covers.includes(resolveRef.href)) {
						return this.images[index].src;
					}

					resolveRef.href = this.images[previousIndex].src;

					if (this.covers.includes(resolveRef.href)) {
						return this.images[previousIndex].src;
					}

					return '';
				} catch (e) {
					return '';
				}
			},
			caption() {
				const index = this.swiper.realIndex;

				if (index != null && this.images[index].caption != null) {
					return this.images[index].caption;
				}

				return '';
			}
		},
		methods: {
			stripCaption(caption) {
				if (caption != null) {
					caption = this.$stripHTML(caption);

					if (caption.length > 100) {
						caption = caption.slice(0, 100) + '...';
					}

					return caption;
				}

				return '';
			},
			toggleControls(val = !this.controlsShown) {
				this.controlsShown = !!val;
				clearTimeout(this.controlsTimer);

				if (this.controlsShown) {
					this.controlsTimer = setTimeout(() => {
						this.controlsShown = false;
					}, 3000);
				}
			},
			showControls() {
				this.controlsShown = true;
				clearTimeout(this.controlsTimer);
			},
			close() {
				this.$emit('before-close');
				this.shown = false;

				setTimeout(() => {
					this.$destroy();
				}, 300);
			},
			closeHandler(evt) {
				if (['Escape', 'GoBack'].includes(evt.key)) {
					this.close();
				}
			},
			mousemoveHandler() {
				if (document.ontouchstart === undefined) {
					this.toggleControls(true);
				}
			},
			touchendHandler() {
				this.toggleControls();
			}
		},
		created() {
			document.addEventListener('keyup', this.closeHandler);
		},
		mounted() {
			this.shown = true;
		},
		destroyed() {
			document.removeEventListener('keyup', this.closeHandler);
			this.$el.remove();
			this.$emit('closed');
		}
	};
</script>

<style scoped>
	.swiper-modal-gallery {
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
		overflow: hidden;
		background-color: rgba(#000000, 0.8);

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.overlay-cover {
		position: absolute;
		top: -30px;
		right: -30px;
		bottom: -30px;
		left: -30px;
		background: none no-repeat 50% 50% / cover;
		filter: blur(15px);

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(#000000, 0.2);
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

		&.v-enter-active,
		&.v-leave-active {
			transition: transform 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateY(-100%);
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
		opacity: 0;
		transition: opacity 0.3s;

		&.shown {
			transition-duration: 0s;
			opacity: 1;
		}

		&.zoomed {
			z-index: 4;
		}
	}

	.swiper-slide {
		&.swiper-slide-zoomed {
			z-index: 1;
		}
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
		align-items: baseline;
		box-sizing: border-box;
		padding: range(8px, 15px) var(--grid_padding);
		width: 100%;
		max-height: 100%;
		background-color: rgba(#000000, 0.7);

		&.v-enter-active,
		&.v-leave-active {
			transition: transform 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateY(100%);
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

	.pagination {
		margin: auto 0;
		flex-shrink: 0;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.8rem);
		line-height: 1.25;
		font-weight: 500;
		white-space: nowrap;
		user-select: none;
	}
</style>
