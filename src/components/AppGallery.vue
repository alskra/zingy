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
	import Vue from 'vue';
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
		}
	};

	// Dynamic AppGalleryFull
	document.addEventListener('click', (evt) => {
		const el = evt.target;

		if (el.hasAttribute('data-gallery')) {console.log('click on img');
			let images;

			if (el.dataset.gallery) {
				images = Array.from(document.querySelectorAll(`[data-gallery=${el.dataset.gallery}]`));
			} else {
				images = [el];
			}

			const initialSlide = images.findIndex(image => image === el);

			images = images.map(image => {
				return {
					thumb: image.dataset.thumb || image.dataset.src || image.getAttribute('src'),
					src: image.dataset.src || image.getAttribute('src'),
					caption: image.dataset.caption || ''
				}
			});

			if (!document.getElementById('app-gallery-full-mount-el')) {
				const appGalleryFullMountEl = document.createElement('div');

				appGalleryFullMountEl.id = 'app-gallery-full-mount-el';
				document.body.appendChild(appGalleryFullMountEl);
			}

			const appGalleryFull = new (Vue.extend(AppGalleryFull))({
				el: '#app-gallery-full-mount-el',
				destroyed() {
					this.$el.parentNode.removeChild(this.$el);
				},
				propsData: {
					images,
					options: {
						initialSlide
					}
				}
			});

			appGalleryFull.$on('close', () => appGalleryFull.$destroy());
		}
	});
</script>

<style>
	[data-gallery] {
		cursor: pointer;
	}
</style>

<style scoped>
	.app-gallery {
		all: initial;

		& {
			display: block;
		}
	}
</style>
