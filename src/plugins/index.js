import Vue from 'vue';
import store from '../store';
import i18n from '../i18n';
import VueWindowSize from 'vue-window-size';
import VueWindowScroll from './vue-window-scroll';
import VModal from 'vue-js-modal';
import checkView from 'vue-check-view';
import VueSticky from '../components/VueSticky';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {VLazyImagePlugin} from 'v-lazy-image';
import VShowSlide from 'v-show-slide';
import VueTruncateCollapsed from 'vue-truncate-collapsed';
import SwiperModalGallery from './swiper-modal-gallery/swiper-modal-gallery';
import VLockBodyScroll from './v-lock-body-scroll';
import StripHTML from './strip-html';
import * as VueGoogleMaps from 'vue2-google-maps';

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

Vue.use(checkView);

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

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBrtnFQgT8aDwxwpWB3ZgSXVoebGAYFbvg',
		libraries: 'places', // This is required if you use the Autocomplete plugin
		// OR: libraries: 'places,drawing'
		// OR: libraries: 'places,drawing,visualization'
		// (as you require)

		//// If you want to set the version, you can do so:
		// v: '3.26',
	},

	//// If you intend to programmatically custom event listener code
	//// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
	//// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
	//// you might need to turn this on.
	// autobindAllEvents: false,

	//// If you want to manually install components, e.g.
	//// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
	//// Vue.component('GmapMarker', GmapMarker)
	//// then disable the following:
	// installComponents: true,
});
