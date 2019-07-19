<template lang="pug">
	section.page-section
		header.header
			.header-grid
				.header-grid-row
					.header-grid-cell
						.title(
							v-if="title = $getSlot('title')"
							:is="title[0].tag"
						) {{ $getText(title) }}

						base-content.description(
							v-if="description = $getSlot('description')"
						)
							v-nodes(:vnodes="description")

		.main
			slot(name="main")

			app-carousel.app-carousel-of-articles.page-section-articles-carousel(
				v-if="articlesCarousel = $getSlot('articles-carousel')"
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
							) {{ $getText(title) }}

							base-content.article-description(v-if="description")
								v-nodes(:vnodes="description")

			app-slider.page-section-slider(
				v-if="$getSlot('slider')"
				:autoplay="true"
			)
				template(slot="slides")
					slot(name="slider")

			landing-cards.page-section-landing-cards(v-if="$getSlot('landing-cards')")
				template(slot="cards")
					slot(name="landing-cards")

			factors-list.page-section-factors-list(v-if="$getSlot('factors-list')")
				template(slot="factors")
					slot(name="factors-list")

			infinite-carousel.page-section-infinite-carousel(v-if="$getSlot('infinite-carousel')")
				template(slot="slides")
					slot(name="infinite-carousel")

			app-tabs.page-section-tabs(v-if="$getSlot('tabs')")
				template(slot="tabs")
					slot(name="tabs")

			ul.ul(v-if="ul = $getSlot('ul')")
				template(
					v-for="(item, index) of ul"
				)
					v-nodes(
						:key="index"
						:vnodes="item.children"
					)

			.figures(v-if="figures = $getSlot('figures')")
				//
					.figures-grid
						.figures-row
							.figures-cell(
								v-for="({tag, slots: {image, title, description}}, index) of figures"
								:key="index"
							)
				.figure(
					v-for="({tag, slots: {image, title, description}}, index) of figures"
					:key="index"
					:is="tag"
				)
					.figure-image-box(v-if="image")
						img.figure-image(
							v-bind="image[0].data.attrs"
						)

					.figure-body
						.figure-title(
							v-if="title"
							:is="title[0].tag"
						) {{ $getText(title) }}

						.figure-description(
							v-if="description"
						)
							v-nodes(:vnodes="description")
</template>

<script>
	import AppCarousel from './AppCarousel';
	import AppCarouselOfWorks from './AppCarouselOfWorks';
	import AppCarouselOfReviews from './AppCarouselOfReviews';
	import AppSlider from './AppSlider';
	import LandingCards from './LandingCards';
	import FactorsList from './FactorsList';
	import InfiniteCarousel from './InfiniteCarousel';
	import AppTabs from './AppTabs';

	export default {
		name: 'PageSection',
		components: {
			AppCarousel,
			AppCarouselOfWorks,
			AppCarouselOfReviews,
			AppSlider,
			LandingCards,
			FactorsList,
			InfiniteCarousel,
			AppTabs
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
		margin-bottom: range(20px, 40px);
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

	.base-content.description {
		margin-top: range(20px, 30px);
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

	.page-section-of-ul {
		background-color: #f0f0f0;
	}

	.ul-grid {
		display: flex;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-direction: column;

		@media (width >= 1440px) {
			max-width: calc(var(--grid_width) + 200px);
		}
	}

	.ul-grid-row {
		display: flex;
		margin: calc(var(--base-content_margin-y) / -2) range(-10px, -20px);
		flex-wrap: wrap;
	}

	.ul-grid-cell {
		box-sizing: border-box;
		padding: calc(var(--base-content_margin-y) / 2) range(10px, 20px);
		flex: 1 1 300px;
		min-width: 0;
	}

	.ul {
		margin: 0 auto;
		padding: 0;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--font-size);
		line-height: var(--line-height);
		column-width: 300px;
		column-gap: range(20px, 40px);

		> li {
			display: block;
			position: relative;
			margin-bottom: var(--base-content_margin-y);
			padding-left: 30px;
			page-break-inside: avoid;

			&::before {
				content: '';
				position: absolute;
				top: calc(var(--font-size) * var(--line-height) / 2);
				left: 0;
				width: 14px;
				height: 14px;
				background-color: var(--color-accent);
				transform: translateY(-50%);
				pointer-events: none;
			}

			> ol,
			> ul {
				margin-top: var(--base-content_margin-y);
			}

			&:last-child {
				margin-bottom: 0;
			}
		}

		@media (width >= 1440px) {
			max-width: calc(var(--grid_width) + 200px);
		}
	}

	.figures {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		column-width: 400px;
		column-gap: range(20px, 40px);

		@media (width >= 1440px) {
			max-width: calc(var(--grid_width) + 200px);
		}
	}

	.figures-grid {
		display: flex;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-direction: column;

		@media (width >= 1440px) {
			max-width: calc(var(--grid_width) + 200px);
		}
	}

	.figures-row {
		display: flex;
		margin: range(-10px, -20px);
		flex-wrap: wrap;
	}

	.figures-cell {
		box-sizing: border-box;
		padding: range(10px, 20px);
		flex: 0 0 percentage(1 / 3);
		min-width: 0;

		@media (width < 1366px) {
			flex: 0 0 percentage(1 / 2);
		}

		@media (width < 768px) {
			flex: 0 0 100%;
		}
	}

	.figure {
		display: flex;
		box-sizing: border-box;
		margin: 0 0 range(20px, 40px);
		page-break-inside: avoid;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.figure-image-box {
		margin-right: range(10px, 20px);
		flex: 0 0 range(50px, 70px);
		height: range(50px, 70px);
	}

	.figure-image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.figure-body {
		box-sizing: border-box;
		flex: 0 1 100%;
		min-width: 0;
	}

	.figure-title {
		margin: 0 0 range(10px, 15px);
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(2rem, 2.2rem);
		font-weight: 500;
		line-height: 1.25;
	}

	.figure-description {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		line-height: var(--line-height);

		p {
			display: inline;
		}
	}
</style>
