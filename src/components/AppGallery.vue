<template lang="pug">
	.app-gallery
		app-gallery-thumbs(:images="images")
</template>

<script>
	import i18n from '../i18n';
	import Vue from 'vue';
	import AppGalleryThumbs from './AppGalleryThumbs';
	import AppGalleryFull from './AppGalleryFull';

	export default {
		name: 'AppGallery',
		components: {
			AppGalleryThumbs
		},
		props: {
			images: {
				type: Array,
				required: true
			}
		}
	};

	// Dynamic AppGalleryFull
	document.addEventListener('click', evt => {
		const el = evt.target.closest('[data-gallery]');

		if (el) {
			evt.preventDefault();

			let images;

			if (el.dataset.gallery) {
				images = Array.from(document.querySelectorAll(`[data-gallery='${el.dataset.gallery}']`));
			} else {
				images = [el];
			}

			const initialSlide = images.findIndex(image => image === el);

			images = images.map(image => {
				return {
					thumb: image.dataset.thumb || image.querySelector('img').src,
					src: image.dataset.src || image.getAttribute('src') || image.getAttribute('href'),
					srcset: image.dataset.srcset || image.srcset,
					caption: image.dataset.caption || image.title || image.alt || image.querySelector('img').alt
				}
			});

			if (!document.getElementById('app-gallery-full-mount-el')) {
				const appGalleryFullMountEl = document.createElement('div');

				appGalleryFullMountEl.id = 'app-gallery-full-mount-el';
				document.body.appendChild(appGalleryFullMountEl);
			}

			const appGalleryFull = new (Vue.extend(AppGalleryFull))({
				i18n,
				el: '#app-gallery-full-mount-el',
				propsData: {
					images,
					options: {
						initialSlide
					}
				},
				destroyed() {
					this.$el.parentNode.removeChild(this.$el);
				}
			});

			appGalleryFull.$on('close', () => appGalleryFull.$destroy());
		}
	});
</script>

<style scoped>
	.app-gallery {
		all: initial;

		& {
			display: block;
		}
	}
</style>
