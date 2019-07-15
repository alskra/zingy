<template lang="pug">
	.app-slider(
		:set.prop=`(
			slides = $getSlot('slides'),
			activeSlide = slides[activeIndex].slots
		)`
	)
		.body
			.grid-row
				.grid-cell

				.grid-cell
					vue-swiper.nav(
						ref="nav"
						:options="vueSwiperNavOptions"
					)
						.swiper-slide.nav-grid-cell(
							v-for="({slots: {title}}, index) of slides"
							:key="index"
							:class="{active: index === activeIndex}"
						)
							button.nav-item(
								:class="{active: index === activeIndex}"
								@click.prevent="(pause(), activeIndex = index)"
							)
								span.nav-item-text {{ $getText(title) }}

			.grid-row
				.grid-cell.grid-cell-is-image
					.image-box
						transition(appear)
							img.image(
								v-if="activeImage"
								:key="activeImage.data.attrs.src"
								v-bind="activeImage.data.attrs"
							)

						loading(
							:active="loading"
							:is-full-page="false"
							loader="bars"
							color="#fff"
							:opacity="0"
						)

				.grid-cell
					.main
						transition(
							appear
							@after-enter="play()"
						)
							.main-inner(:key="activeIndex")
								base-content.content
									vue-truncate-content.content-truncated(
										:length="300"
										:truncated.sync="contentTruncated"
									)
										template(#before)
											| 🦄

										.h2(
											v-if="activeSlide.title"
											:is="activeSlide.title[0].tag"
										) {{ $getText(activeSlide.title) }}

										v-nodes(:vnodes="activeSlide.content || []")

										template(#after)
											span.content-toggle(
												tabindex="0"
												@click="toggleContent"
												@keyup.enter="toggleContent"
											) {{ $t(contentTruncated ? 'more' : 'less') }}
</template>

<script>
	import Loading from 'vue-loading-overlay';
	import VueTruncateContent from '../plugins/vue-truncate-content/vue-truncate-content';
	import VueSwiper from './VueSwiper';

	export default {
		name: 'AppSlider',
		components: {
			Loading,
			VueTruncateContent,
			VueSwiper
		},
		i18n: {
			messages: {
				en: {
					more: 'Show more',
					less: 'Show less'
				},
				ru: {
					more: 'Показать полностью',
					less: 'Свернуть'
				}
			}
		},
		props: {
			autoplay: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				activeIndex: 0,
				activeImage: null,
				loading: false,
				cache: [],
				contentTruncated: true,
				paused: false,
				vueSwiperNavOptions: {
					init: false,
					slidesPerView: 'auto',
					roundLengths: true
				}
			};
		},
		watch: {
			activeIndex(val) {
				this.getImage();

				if (this.$refs.nav.swiper.initialized) {
					this.$refs.nav.swiper.slideTo(val);
				}
			},
			windowWidth: {
				handler(val) {
					this.vueSwiperNavOptions.init = val < 1024;
				},
				immediate: true
			}
		},
		methods: {
			getImage() {
				const activeIndex = this.activeIndex;
				const activeSlide = this.$getSlot('slides')[activeIndex].slots;
				const activeImage = activeSlide.image && activeSlide.image[0] || {};
				const activeImageAttrs = activeImage && activeImage.data && activeImage.data.attrs || {};

				if (!activeImageAttrs.src) {
					activeImageAttrs.src = activeImageAttrs['data-src'];
					delete activeImageAttrs['data-src'];
				}

				if (!activeImageAttrs.src || this.cache.includes(activeImageAttrs.src)) {
					this.loading = false;
					this.activeImage = activeImage;

					return;
				}

				const imgEl = document.createElement('img');

				imgEl.addEventListener('load', () => {
					this.cache.push(activeImageAttrs.src);

					if (activeIndex === this.activeIndex) {
						this.loading = false;
						this.activeImage = activeImage;
					}
				});

				this.loading = true;
				imgEl.src = activeImageAttrs.src;
			},
			play() {
				if (this.autoplay && !this.paused) {
					clearTimeout(this.autoplayTimer);

					this.autoplayTimer = setTimeout(() => {
						if (this.activeIndex < this.slides.length - 1) {
							this.activeIndex++;
						} else {
							this.activeIndex = 0;
						}
					}, 2500);
				}
			},
			pause() {
				this.paused = true;
				clearTimeout(this.autoplayTimer);
			},
			toggleContent() {
				this.pause();
				this.contentTruncated = !this.contentTruncated;
			}
		},
		mounted() {
			this.getImage();
		}
	};
</script>

<style scoped>
	.app-slider {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.body {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);

		@media (width < 1024px) {
			margin: 0;
			width: auto;
		}
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;

		& + & {
			@media (width >= 1024px) {
				margin-top: range(-55px, -110px);
			}
		}
	}

	.grid-cell {
		box-sizing: border-box;
		flex: 0 0 100%;
		min-width: 0;

		&:nth-child(1) {
			@media (width >= 1024px) {
				flex-basis: percentage(5 / 12);
			}
		}

		&:nth-child(2) {
			@media (width >= 1024px) {
				flex-basis: percentage(7 / 12);
			}
		}
	}

	.grid-cell-is-image {
		display: flex;
		flex-flow: column;

		@media (width < 1024px) {
			background-color: #e8e8e8;
		}
	}

	.image-box {
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(9 / 16);
		}

		&::after {
			content: '';
			position: absolute;
			z-index: 2;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.15);
			pointer-events: none;
			transition: opacity 0.3s;
		}

		&:hover {
			&::after {
				opacity: 0;
			}
		}

		@media (width >= 1024px) {
			margin-top: range(30px, 60px);
		}

		@media (width >= 1440px) {
			margin-left: -100px;
		}

		@media (width < 1024px) {
			margin: 0 auto;
			width: 100%;
			max-width: 480px;
		}
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;

		&.v-enter-active,
		&.v-leave-active {
			transition: transform;
		}

		&.v-enter-active {
			transition-duration: 0.3s;
			z-index: 1;
		}

		&.v-leave-active {
			transition-delay: 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateX(100%);
		}
	}

	.vue-swiper.nav {
		display: flex;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
		flex-flow: column;
		background-color: #2a2c2b;

		>>> .swiper-container {
			margin: 0;
		}

		>>> .swiper-slide {
			width: auto;
			max-width: 100%;
		}

		@media (width >= 1024px) {
			margin: 0 range(15px, -40px) 0 range(-15px, 40px);

			>>> .swiper-container {
				padding: range(0px, 15px) range(0px, 30px);
			}

			>>> .swiper-wrapper {
				flex-wrap: wrap;
			}
		}

		@media (width >= 1440px) {
			margin-right: -100px;
		}
	}

	.nav-grid-row {
		display: flex;
		flex-wrap: wrap;
	}

	.nav-grid-cell {
		box-sizing: border-box;
		min-width: 0;
	}

	.nav-item {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: 0 10px;
			width: 100%;
			height: range(48px, 58px);
			justify-content: center;
			align-items: center;
			color: #ffffff;
			font-family: var(--font-family);
			font-size: range(1.6rem, 1.8rem);
			font-weight: 500;
			line-height: 1.25;
			cursor: pointer;
		}

		&:hover,
		&.active {
			.nav-item-text {
				background-size: 100% 2px;
			}
		}
	}

	.nav-item-text {
		padding: 2px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: linear-gradient(to right, var(--color-accent), var(--color-accent)) no-repeat 0 100% / 0 2px;
		transition: background-size 0.3s;
	}

	.main {
		display: flex;
		box-sizing: border-box;
		position: relative;
		padding: range(15px, 30px) range(10px, 40px);
		min-height: 100%;
		overflow: hidden;
		background-color: #f0f0f0;
		perspective: 1000px;

		@media (width >= 1024px) {
			padding-top: range(70px, 140px);
		}
	}

	.main-inner {
		box-sizing: border-box;
		position: relative;
		flex: 0 0 100%;
		min-width: 0;

		& + & {
			margin-left: -100%;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity;
			transition-duration: 0.3s;
		}

		&.v-enter-active {
			z-index: 1;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.vue-truncate-content.content-truncated {
		height: 200px;

		.h2 {
			margin-bottom: 0.75em;
		}

		> :first-child {
			margin-top: 0 !important;
		}

		> :last-child {
			margin-bottom: 0 !important;
		}
	}

	.content-toggle {
		color: var(--color);
		text-decoration: none;
		font-size: var(--font-size);
		font-weight: 500;
		line-height: var(--line-height);
		cursor: pointer;
	}
</style>
