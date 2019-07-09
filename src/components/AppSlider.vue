<template lang="pug">
	.app-slider
		.body
			.grid-row
				.grid-cell
					.image-box(v-if="activeSlide.image")
						img.image(v-bind="activeSlide.image[0].attrs")

				.grid-cell
					nav.nav
						.nav-grid-row
							.nav-grid-cell(
								v-for="({slots: {title}}, index) of slides"
								:key="index"
								:class="{active: index === activeIndex}"
							)
								button.nav-item(
									:class="{active: index === activeIndex}"
									@click.prevent="activeIndex = index"
								) {{ getText(title[0].children) }}

					.title(
						v-if="activeSlide.title"
						:is="activeSlide.title[0].tag"
					) {{ getText(activeSlide.title[0].children) }}

					base-content.content
						v-nodes(:vnodes="activeSlide.content")
</template>

<script>
	import {
		getScopedSlot,
		getVNodesTextContent
	} from '../helpers';

	export default {
		name: 'AppSlider',
		data() {
			return {
				activeIndex: 0
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
		methods: {
			getText: getVNodesTextContent
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


</style>
