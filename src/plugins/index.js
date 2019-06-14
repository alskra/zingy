import Vue from 'vue';
import store from '../store';
import i18n from '../i18n';
import VueWindowSize from 'vue-window-size';
import VModal from 'vue-js-modal';
import checkView from 'vue-check-view';
import ResizeSensor from 'resize-sensor';
import VueStickyDirective from '@renatodeleao/vue-sticky-directive';
import VueDragscroll from 'vue-dragscroll';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {VLazyImagePlugin} from 'v-lazy-image';
import VShowSlide from 'v-show-slide';
import VueTruncateCollapsed from 'vue-truncate-collapsed';
import SwiperModalGallery from './swiper-modal-gallery/swiper-modal-gallery';
import VLockBodyScroll from './v-lock-body-scroll';
import StripHTML from './strip-html';

Vue.use(VueWindowSize);

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

Vue.use(checkView);

window.ResizeSensor = ResizeSensor;
Vue.use(VueStickyDirective);

Vue.use(VueDragscroll);

Vue.use(Loading, {
	color: 'var(--color-accent)',
	backgroundColor: 'var(--overlay_background-color)',
	opacity: 1
});

Vue.use(VLazyImagePlugin);

Vue.use(VShowSlide);

Vue.component('vue-truncate-collapsed', VueTruncateCollapsed);

Vue.use(SwiperModalGallery, {store, i18n});

Vue.use(VLockBodyScroll);

Vue.use(StripHTML);
