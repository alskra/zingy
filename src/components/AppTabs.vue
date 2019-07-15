<template lang="pug">
	.app-tabs(
		:set.prop=`(
			tabs = $getSlot('tabs'),
			activeTab = tabs && tabs[activeIndex].slots
		)`
	)
		.body
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
						.tabs-nav
							button.tabs-nav-item(
								v-for="({slots: {title}}, index) of tabs"
								:key="index"
								type="button"
								@click.prevent="activeIndex = index"
							) {{ $getText(title) }}

						.tabs
							.tabs-number {{ (activeIndex < 9 ? '0' : '') + (activeIndex + 1) }}

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

	export default {
		name: 'AppTabs',
		components: {
			Loading
		},
		data() {
			return {
				activeIndex: 0,
				activeImage: null,
				loading: false,
				cache: []
			};
		},
		watch: {
			activeIndex(val) {
				this.getImage();

				// if (this.$refs.nav.swiper.initialized) {
				// 	this.$refs.nav.swiper.slideTo(val);
				// }
			},
			// windowWidth: {
			// 	handler(val) {
			// 		this.vueSwiperNavOptions.init = val < 1024;
			// 	},
			// 	immediate: true
			// }
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

	.grid-row {
		display: flex;
		flex-wrap: wrap;
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
			flex: 0 0 percentage(890 / 1920);
			flex-direction: row;
		}
	}

	.image-box {
		position: relative;
		margin-top: range(50px, 100px);

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
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.15);
			pointer-events: none;
			transition: opacity 0.2s;
		}

		/*&:hover {*/
		/*	&::after {*/
		/*		opacity: 0;*/
		/*	}*/
		/*}*/
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.tabs-nav {
		display: flex;
		box-sizing: border-box;
		order: 1;
		position: relative;
		z-index: 1;
		margin-left: -100%;
		flex: 0 0 auto;
		min-width: 0;
		max-width: 100%;
		flex-direction: column;
	}

	.tabs {
		display: flex;
		box-sizing: border-box;
		padding: range(30px, 60px) range(10px, 80px);
		flex: 0 0 100%;
		min-width: 0;
		flex-direction: column;
		background-color: #f0f0f0;
	}
</style>
