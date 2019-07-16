<template lang="pug">
	mixin tabs-nav()
		.tabs-nav&attributes(attributes)
			vue-swiper(
				ref="tabsNavSwiper"
				:options="tabsNavSwiperOptions"
			)
				.swiper-slide(
					v-for="({slots: {title}}, index) of tabs"
					:key="index"
				)
					button.tabs-nav-item(
						type="button"
						:class="{active: index === activeIndex}"
						@click.prevent="activeIndex = index"
					)
						span.tabs-nav-item-text {{ $getText(title) }}

	.app-tabs(
		:set.prop=`(
			tabs = $getSlot('tabs'),
			activeTab = tabs && tabs[activeIndex].slots
		)`
	)
		.body
			+tabs-nav(v-if="windowWidth < 1024")

			.grid
				.grid-row
					.grid-cell
						.image-box
							transition(appear)
								img.image(
									v-if="activeImage"
									:key="activeIndex + activeImage.data.attrs.src"
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
						+tabs-nav(v-if="windowWidth >= 1024")

						.tabs
							.tabs-number
								transition(appear)
									.tabs-number-item(:key="activeIndex")
										| {{ (activeIndex < 9 ? '0' : '') + (activeIndex + 1) }}

							.tabs-box
								transition(appear)
									.tabs-item(:key="activeIndex")
										base-content.tabs-item-content
											.h2(
												v-if="activeTab.title"
												:is="activeTab.title[0].tag"
											) {{ $getText(activeTab.title) }}

											v-nodes(:vnodes="activeTab.content")
</template>

<script>
	import Loading from 'vue-loading-overlay';
	import VueSwiper from './VueSwiper';

	export default {
		name: 'AppTabs',
		components: {
			Loading,
			VueSwiper
		},
		data() {
			return {
				activeIndex: 0,
				activeImage: null,
				loading: false,
				cache: [],
				tabsNavSwiperOptions: {
					init: false,
					slidesPerView: 'auto',
					roundLengths: true
				}
			};
		},
		watch: {
			activeIndex(val) {
				this.getImage();

				if (this.$refs.tabsNavSwiper.swiper.initialized) {
					this.$refs.tabsNavSwiper.swiper.slideTo(val);
				}
			},
			windowWidth: {
				handler(val) {
					this.tabsNavSwiperOptions.init = val < 1024;
				},
				immediate: true
			}
		},
		methods: {
			getImage() {
				const activeIndex = this.activeIndex;
				const tabs = this.$getSlot('tabs');
				const activeTab = tabs && tabs[activeIndex].slots;
				const activeImage = activeTab && activeTab.image && activeTab.image[0];
				const activeImageAttrs = activeImage && activeImage.data && activeImage.data.attrs || {};

				if (activeImageAttrs.src || activeImageAttrs['data-src']) {
					if (!activeImageAttrs.src) {
						activeImageAttrs.src = activeImageAttrs['data-src'];
						delete activeImageAttrs['data-src'];
					}

					if (this.cache.includes(activeImageAttrs.src)) {
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
				} else {
					this.loading = false;
					this.activeImage = null;
				}
			}
		},
		mounted() {
			this.getImage();
		}
	};
</script>

<style scoped>
	.app-tabs {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-direction: column;
		}
	}

	.grid {
		margin: 0 auto;
		max-width: 1920px;
	}

	.grid-row {
		display: flex;

		@media (width < 1024px) {
			flex-wrap: wrap;
		}
	}

	.grid-cell {
		display: flex;
		box-sizing: border-box;
		min-width: 0;
		flex-direction: column;

		&:nth-child(1) {
			flex: 0 0 percentage(640 / 1920);
		}

		&:nth-child(2) {
			flex: 0 0 percentage(960 / 1920);
			flex-direction: row;
		}

		@media (width < 1440px) {
			&:nth-child(1) {
				flex: 0 0 percentage(480 / 1920);
			}

			&:nth-child(2) {
				flex: 1 1 auto;
			}
		}

		@media (width < 1024px) {
			&:nth-child(1),
			&:nth-child(2) {
				flex: 0 0 100%;
			}

			&:nth-child(1) {
				background-color: #e8e8e8;
				/*background-color: #b9b9b9;*/
			}
		}
	}

	.image-box {
		position: relative;
		margin-top: range(50px, 100px);
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(3 / 4);
		}

		&::after {
			content: '';
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.15);
			pointer-events: none;
			transition: opacity 0.2s;
		}

		@media (width < 1024px) {
			margin: 0 auto;
			width: 100%;
			max-width: 480px;

			&::before {
				padding-top: percentage(9 / 16);
			}
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

	.tabs-nav {
		display: flex;
		box-sizing: border-box;
		order: 1;
		align-self: flex-start;
		position: relative;
		z-index: 2;
		margin-top: range(20px, 50px);
		margin-left: calc(-100% - range(90px, 180px));
		flex: 0 0 range(160px, 320px);
		min-width: 0;
		max-width: 100%;
		flex-direction: column;
		background-color: #227996;

		>>> .swiper-slide {
			width: auto;
			max-width: 100%;
		}

		@media (width >= 1024px) {
			>>> .swiper-container {
				overflow: visible;
			}

			>>> .swiper-wrapper {
				flex-direction: column;
			}

			&:hover {
				.tabs-nav-item:not(:hover) {
					box-shadow: none;
				}
			}
		}

		@media (width < 1440px) {
			order: 0;
			/*align-self: stretch;*/
			margin-left: 0;
		}

		@media (width < 1024px) {
			margin-top: 0;
			flex: 0 0 100%;
		}
	}

	.tabs-nav-item {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: 10px range(10px, 15px);
			width: 100%;
			min-height: range(48px, 58px);
			justify-content: center;
			align-items: center;
			color: #ffffff;
			font-family: var(--font-family);
			font-size: range(1.6rem, 1.8rem);
			font-weight: 500;
			line-height: 1.25;
			box-shadow: 0 0 var(--color-accent);
			transition: background-color, box-shadow;
			transition-duration: 0.3s;
			cursor: pointer;
		}

		&.active {
			background-color: #1d647c;
		}

		@media (width >= 1024px) {
			&:hover,
			&.active {
				box-shadow: -5px 0 var(--color-accent);
			}
		}
	}

	.tabs-nav-item-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.tabs {
		display: flex;
		box-sizing: border-box;
		padding: range(20px, 50px) range(10px, 80px) range(20px, 50px) range(80px, 160px);
		flex: 0 0 100%;
		min-width: 0;
		flex-direction: column;
		background-color: #f0f0f0;

		@media (width < 1440px) {
			flex: 1 1 auto;
			padding-left: range(10px, 80px);
		}
	}

	.tabs-number {
		display: flex;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
		margin: 0 range(-10px - 30px, -80px - 60px) 10px auto;
		padding: 5px range(10px, 20px);
		min-width: range(115px, 230px);
		min-height: range(40px, 80px);
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background-color: var(--color-accent);

		@media (width < 1440px) {
			margin-right: 0;
		}

		@media (width < 1024px) {
			margin-top: range(-20px - 20px, -50px - 40px);
			margin-right: range(0px, -70px);
		}
	}

	.tabs-number-item {
		box-sizing: border-box;
		flex: 0 0 100%;
		min-width: 0;
		color: #b43e3d;
		font-family: var(--font-family);
		font-size: range(2.4rem, 4.8rem);
		font-weight: 700;
		line-height: 1.25;
		text-align: center;

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity;
			transition-duration: 0.3s;
		}

		&.v-enter-active {
			margin-left: -100%;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.tabs-box {
		display: flex;
		box-sizing: border-box;
	}

	.tabs-item {
		display: flex;
		box-sizing: border-box;
		flex: 0 0 100%;
		min-width: 0;

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity;
			transition-duration: 0.3s;
		}

		&.v-enter-active {
			z-index: 1;
			margin-left: -100%;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}
</style>
