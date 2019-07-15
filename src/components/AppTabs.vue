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
	export default {
		name: 'AppTabs',
		data() {
			return {
				activeIndex: 0,
				activeImage: null,
				loading: false,
				cache: []
			};
		},
		methods: {
			getImage() {
				const activeIndex = this.activeIndex;
				const tabs = this.$getSlot('tabs');
				const activeTab = tabs && tabs[activeIndex].slots;
				const activeImage = activeTab && activeTab.image && activeTab.image[0];
				const activeImageAttrs = activeImage && activeImage.data && activeImage.data.attrs;

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
		box-sizing: border-box;
		min-width: 0;

		&:nth-child(1) {
			flex: 0 0 percentage(680 / 1920);
		}

		&:nth-child(2) {
			flex: 0 0 percentage(680 / 1920);
		}
	}

	.image-box {
		position: relative;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(9 / 16);
		}
	}

	.image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
