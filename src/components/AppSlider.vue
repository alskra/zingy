<template lang="pug">
	.app-slider
		.body
			.grid-row
				.grid-cell
					.image-box
						transition(appear)
							img.image(
								v-if="image.src"
								:key="image.src"
								v-bind="image"
							)

						loading(
							:active="imageLoading"
							:is-full-page="false"
							loader="bars"
							color="#fff"
							:opacity="0"
						)

				.grid-cell
					.nav
						.nav-grid-row
							.nav-grid-cell(
								v-for="({slots: {title}}, index) of slides"
								:key="index"
								:class="{active: index === activeIndex}"
							)
								button.nav-item(
									:class="{active: index === activeIndex}"
									@click.prevent="activeIndex = index"
								)
									span.nav-item-text {{ getText(title[0].children) }}

					.main
						transition(appear)
							.main-inner(:key="activeIndex")
								base-content.content
									vue-truncate-content.content-truncated(
										:length="200"
										:truncated.sync="contentTruncated"
									)
										template(#before)
											| 🦄&nbsp;

										.h2(
											v-if="activeSlide.title"
											:is="activeSlide.title[0].tag"
										) {{ getText(activeSlide.title[0].children) }}

										v-nodes(:vnodes="activeSlide.content || []")

										template(#after)
											span.content-toggle(
												tabindex="0"
												@click="contentTruncated = !contentTruncated"
												@keyup.enter="contentTruncated = !contentTruncated"
											) {{ $t(contentTruncated ? 'more' : 'less') }}
</template>

<script>
	import {
		getScopedSlot,
		getVNodesTextContent
	} from '../helpers';

	import Loading from 'vue-loading-overlay';
	import VueTruncateContent from '../plugins/vue-truncate-content/vue-truncate-content';

	export default {
		name: 'AppSlider',
		components: {
			Loading,
			VueTruncateContent
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
		data() {
			return {
				activeIndex: 0,
				imageLoading: false,
				image: {},
				imagesCache: [],
				contentTruncated: true
			};
		},
		computed: {
			slides() {
				return getScopedSlot(this.$scopedSlots.slides);
			},
			activeSlide() {
				return this.slides && this.slides[this.activeIndex].slots;
			}
		},
		watch: {
			activeIndex() {
				this.getImage();
			}
		},
		methods: {
			getText: getVNodesTextContent,
			getImage() {
				const {'data-src': src, alt} = this.activeSlide.image
					&& this.activeSlide.image[0].data
					&& this.activeSlide.image[0].data.attrs
					|| {};

				if (src && !this.imageLoading) {
					if (this.imagesCache.includes(src)) {
						this.image = {
							src,
							alt
						};
					} else {
						this.imageLoading = true;

						const imgEl = document.createElement('img');

						imgEl.addEventListener('load', () => {
							this.imageLoading = false;

							this.image = {
								src: imgEl.src,
								alt: imgEl.alt
							};

							this.imagesCache.push(src);
						});

						imgEl.src = src;
						imgEl.alt = alt;
					}
				}
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
		width: calc(100% - var(--grid_padding));
		max-width: var(--grid_width);
	}

	.grid-row {
		display: flex;
	}

	.grid-cell {
		box-sizing: border-box;
		flex: 0 0 100%;
		min-width: 0;

		&:nth-child(1) {
			flex-basis: percentage(5 / 12);
		}

		&:nth-child(2) {
			flex-basis: percentage(7 / 12);
		}
	}

	.image-box {
		position: relative;
		margin-top: range(45px, 90px);
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

		@media (width >= 1440px) {
			margin-left: -100px;
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

	.nav {
		position: relative;
		z-index: 1;
		margin: 0 range(-10px, -40px) 0 range(10px, 40px);
		background-color: #2a2c2b;
		height: 170px;

		@media (width >= 1440px) {
			margin-right: -100px;
		}
	}

	.main {
		display: flex;
		box-sizing: border-box;
		margin-top: range(-70px, -140px);
		padding: range(15px, 185px) range(10px, 40px) range(15px, 30px);
		height: 100%;
		overflow: hidden;
		background-color: #f0f0f0;
		perspective: 1000px;
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
		font-weight: 500;
		cursor: pointer;
	}
</style>
