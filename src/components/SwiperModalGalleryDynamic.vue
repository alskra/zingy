<script>
	import Vue from 'vue';
	import store from '../store';
	import i18n from '../i18n';
	import SwiperModalGallery from './SwiperModalGallery';

	export default {
		name: 'SwiperModalGalleryDynamic'
	};

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
				const imgEl = image.querySelector('img');

				return {
					thumb: image.dataset.thumb || (imgEl && imgEl.src),
					src: image.dataset.src || image.src || image.href,
					srcset: image.dataset.srcset || image.srcset,
					sizes: image.dataset.sizes || image.sizes,
					caption: image.dataset.caption || image.title || image.alt || (imgEl && imgEl.alt)
				}
			});

			if (!document.getElementById('swiper-modal-gallery-mount-el')) {
				const appGalleryFullMountEl = document.createElement('div');

				appGalleryFullMountEl.id = 'swiper-modal-gallery-mount-el';
				document.body.appendChild(appGalleryFullMountEl);
			}

			const appGalleryFull = new (Vue.extend(SwiperModalGallery))({
				store,
				i18n,
				el: '#swiper-modal-gallery-mount-el',
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

			appGalleryFull.$on('closed', () => appGalleryFull.$destroy());
		}
	});
</script>

<style scoped>
</style>
