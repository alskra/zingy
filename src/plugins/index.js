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
import SwiperModalGalleryDynamic from './swiper-modal-gallery-dynamic';

Vue.use(VueWindowSize);

Vue.use(VModal, {
	dynamic: true,
	injectModalsContainer: true
});

Vue.prototype.$showModal = (component, props, options, events) => {
	Vue.prototype.$modal.show(
		component,
		props || {},
		{
			scrollable: true,
			height: 'auto',
			transition: 'nice-modal-fade',
			...options,
			classes: ['app-modal'].concat(Array.isArray(options.classes) ? options.classes : options.classes ? [options.classes] : [])
		},
		{
			'before-open'() {
				document.documentElement.classList.add('v--modal-block-scroll');
				document.body.classList.add('v--modal-block-scroll');
			},
			closed() {
				document.documentElement.classList.remove('v--modal-block-scroll');
				document.body.classList.remove('v--modal-block-scroll');
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

Vue.filter('striphtml', function (value) {
	const div = document.createElement('div');
	div.innerHTML = value;
	return (div.textContent || div.innerText || '')
		.replace(/^\s*(\S.*\S)\s*$/s, (match, capture) => capture.replace(/\s+/g, ' '));
});

Vue.use(VShowSlide);

Vue.component('vue-truncate-collapsed', VueTruncateCollapsed);

Vue.use(SwiperModalGalleryDynamic, {store, i18n});
