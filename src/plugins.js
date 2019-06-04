import Vue from 'vue';
import VueWindowSize from 'vue-window-size';
import VModal from 'vue-js-modal';
import checkView from 'vue-check-view';
import ResizeSensor from "resize-sensor";
import VueStickyDirective from '@renatodeleao/vue-sticky-directive';
import VueDragscroll from 'vue-dragscroll';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/ru';
import lineClamp from 'vue-line-clamp';
import {VLazyImagePlugin} from "v-lazy-image";

Vue.use(VueWindowSize);
Vue.use(VModal, {dynamic: true, injectModalsContainer: true});
Vue.use(checkView);
window.ResizeSensor = ResizeSensor;
Vue.use(VueStickyDirective);
Vue.use(VueDragscroll);

Vue.use(Loading, {
	color: 'var(--color)',
	backgroundColor: 'var(--overlay_background-color)',
	opacity: 1
});

Vue.use(VueMoment, {moment});

Vue.use(lineClamp, {
	importCss: true,
	defaultFallbackFunc(element) {
		element.style.lineHeight = getComputedStyle(element).lineHeight;
	}
});

Vue.use(VLazyImagePlugin);

Vue.filter('striphtml', function (value) {
	const div = document.createElement('div');
	div.innerHTML = value;
	return div.textContent || div.innerText || '';
});
