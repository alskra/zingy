import SwiperModalGallery from './SwiperModalGallery';

export {SwiperModalGallery};

export default {
	install(Vue, options) {
		Vue.component('SwiperModalGallery', SwiperModalGallery);

		Vue.prototype.$swiperModalGallery = (images, initialSlide = 0) => {
			if (!document.getElementById('swiper-modal-gallery-dynamic')) {
				const mountEl = document.createElement('div');

				mountEl.id = 'swiper-modal-gallery-dynamic';
				document.body.appendChild(mountEl);
			}

			return new (Vue.extend(SwiperModalGallery))({
				...options,
				el: '#swiper-modal-gallery-dynamic',
				propsData: {
					images,
					options: {
						initialSlide
					}
				}
			});
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
					const captionEl = image.querySelector('.caption');

					return {
						thumb: image.dataset.thumb
							|| (imgEl && imgEl.src),
						src: image.dataset.src
							|| image.src
							|| image.href,
						srcset: image.dataset.srcset
							|| image.srcset,
						sizes: image.dataset.sizes
							|| image.sizes,
						caption: image.dataset.caption
							|| (captionEl && captionEl.innerHTML)
							|| image.title
							|| image.alt
							|| (imgEl && imgEl.title)
							|| (imgEl && imgEl.alt)
					}
				});

				Vue.prototype.$swiperModalGallery(images, initialSlide);
			}
		});
	}
};
