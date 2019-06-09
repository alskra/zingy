<template lang="pug">
	.app-gallery
		app-gallery-thumbs(
			ref="appGalleryThumbs"
			:images="images"
			@open="appGalleryFullIndex = $event"
		)

		app-gallery-full(
			ref="appGalleryFull"
			:images="images"
			v-if="appGalleryFullIndex !== null"
			:options="{initialSlide: appGalleryFullIndex}"
			@close="appGalleryFullIndex = null"
		)
</template>

<script>
	import AppGalleryThumbs from './AppGalleryThumbs';
	import AppGalleryFull from './AppGalleryFull';

	export default {
		name: 'AppGallery',
		components: {
			AppGalleryThumbs,
			AppGalleryFull
		},
		props: {
			images: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				appGalleryFullIndex: null
			};
		},
		methods: {

		},
		mounted() {

		}
	};
</script>

<style scoped>
	.app-gallery {
		all: initial;

		& {
			display: block;
		}
	}
</style>
