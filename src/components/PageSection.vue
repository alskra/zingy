<template lang="pug">
	section.page-section
		header.header
			.header-grid
				.header-grid-row
					.header-grid-cell
						.title(
							v-if="title"
							:is="title[0].tag"
						) {{ getVNodesTextContent(title[0].children) }}

		.main
			slot(name="main")

			app-carousel.app-carousel-of-articles.page-section-articles-carousel(
				v-if="articlesCarousel"
				:options="{slidesPerView: 'auto'}"
			)
				template(slot="slides")
					.article(
						v-for="({tag, data, slots: {image, title, description}}, index) of articlesCarousel"
						:key="index"
						:is="tag"
						:style="{backgroundColor: data.attrs['bg-color']}"
					)
						.article-image-box(v-if="image")
							img.article-image(
								v-if="image"
								v-bind="image[0].data.attrs"
							)

						.article-body
							.article-title(
								v-if="title"
								:is="title[0].tag"
							) {{ getVNodesTextContent(title[0].children) }}

							base-content.article-description(v-if="description")
								v-nodes(:vnodes="description")

			app-slider.page-section-slider(
				v-if="$scopedSlots.slider"
				:autoplay="true"
			)
				template(slot="slides")
					slot(name="slider")

			landing-cards.page-section-landing-cards(v-if="$scopedSlots['landing-cards']")
				template(slot="cards")
					slot(name="landing-cards")
</template>

<script>
	import {
		getScopedSlot,
		getVNodesTextContent,
	} from '../helpers';

	import AppCarousel from './AppCarousel';
	import AppCarouselOfWorks from './AppCarouselOfWorks';
	import AppCarouselOfReviews from './AppCarouselOfReviews';
	import AppSlider from './AppSlider';
	import LandingCards from './LandingCards';

	export default {
		name: 'PageSection',
		components: {
			AppCarousel,
			AppCarouselOfWorks,
			AppCarouselOfReviews,
			AppSlider,
			LandingCards
		},
		computed: {
			title() {
				return getScopedSlot(this.$scopedSlots.title);
			},
			articlesCarousel() {
				return getScopedSlot(this.$scopedSlots['articles-carousel']);
			}
		},
		methods: {
			getVNodesTextContent
		}
	};
</script>

<style scoped>
	.page-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: range(30px, 60px) 0;
			max-width: 100%;
			flex-flow: column;
			background-color: white;
		}
	}

	.header {
		margin-bottom: range(20px, 30px);
	}

	.content-box,
	.header-grid {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}

	.content-grid,
	.header-grid-row {
		margin: 0 var(--grid-row_margin);
	}

	.content-grid-item,
	.header-grid-cell {
		box-sizing: border-box;
		padding: 0 var(--grid-cell_padding);

		@media (width >= 1024px) {
			width: percentage(10 / 12);
		}

		@media (width >= 1440px) {
			margin-left: percentage(-1 / 12);
		}
	}

	.title {
		margin: 0;
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;
	}

	.article {
		box-sizing: border-box;
		margin: 0;
		height: 100%;
		max-width: 100%;
		overflow: hidden;
		background-color: #2d9695;
	}

	.article-image-box {
		box-sizing: border-box;
		float: right;
		margin: range(-5px, -10px) range(-5px, -10px) 0 0;
		padding: 0 0 range(10px, 20px) range(10px, 20px);
		width: range(120px, 240px);
		height: range(120px, 240px);
	}

	.article-image {
		display: block;
		width: 100%;
		height: 100%;
	}

	.article-body {
		padding: range(20px, 40px) range(10px, 40px);
	}

	.article-title {
		margin: 0 0 1em;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: var(--h2_font-size);
		font-weight: 500;
		line-height: 1.25;
	}

	.base-content.article-description {
		color: #ffffff;

		&::before {
			content: normal;
		}

		>>> a {
			color: inherit;
		}
	}

	.page-section-gray {
		padding: 0;
		background-color: #f0f0f0;

		.header {
			margin-bottom: 0;
			padding: range(15px, 20px) 0;
		}
	}
</style>
