import Vue from 'vue';
import store from '../store';
import i18n from '../i18n';
import VueUtilities from './vue-utilities/vue-utilities';
import VueWindowSize from 'vue-window-size';
import VueWindowScroll from './vue-window-scroll';
import VModal from 'vue-js-modal';
import VueSticky from '../components/VueSticky';
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';
import {VLazyImagePlugin} from 'v-lazy-image';
import VShowSlide from 'v-show-slide';
import VueTruncateCollapsed from 'vue-truncate-collapsed';
import SwiperModalGallery from './swiper-modal-gallery/swiper-modal-gallery';
import VLockBodyScroll from './v-lock-body-scroll';
import StripHTML from './strip-html';
// import VueYmaps from './vue-ymaps/VueYmaps';

Vue.use(VueUtilities);
Vue.use(VueWindowSize);
Vue.use(VueWindowScroll);

Vue.use(VModal, {
	dynamic: true,
	injectModalsContainer: true
});

// Custom `vue-js-modal`
Vue.prototype.$showModal = (component, props, options, events) => {
	Vue.prototype.$modal.show(
		component,
		props || {},
		{
			scrollable: true,
			height: 'auto',
			transition: 'nice-modal-fade',
			...options,
			classes: ['app-modal']
				.concat(Array.isArray(options.classes) ? options.classes : options.classes ? [options.classes] : [])
		},
		{
			'before-open'() {
				Vue.prototype.$lockBodyScroll();
			},
			closed() {
				Vue.prototype.$lockBodyScroll(false);
			},
			...events
		}
	)
};

Vue.component('VueSticky', VueSticky);

Vue.use(Loading, {
	color: 'var(--color-accent)',
	backgroundColor: 'var(--overlay_background-color)',
	opacity: 1
});

Vue.use(VLazyImagePlugin);

Vue.use(VShowSlide);

Vue.component('VueTruncateCollapsed', VueTruncateCollapsed);

Vue.use(SwiperModalGallery, {
	store,
	i18n
});

Vue.use(VLockBodyScroll);

Vue.use(StripHTML);

// Vue.use(VueYmaps);
