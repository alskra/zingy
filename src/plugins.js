import Vue from 'vue';
import VueWindowSize from 'vue-window-size';
import VModal from 'vue-js-modal';
import checkView from 'vue-check-view';
import ResizeSensor from "resize-sensor";
import VueStickyDirective from '@renatodeleao/vue-sticky-directive';
import VueDragscroll from 'vue-dragscroll';

Vue.use(VueWindowSize);
Vue.use(VModal, {dynamic: true, injectModalsContainer: true});
Vue.use(checkView);
window.ResizeSensor = ResizeSensor;
Vue.use(VueStickyDirective);
Vue.use(VueDragscroll);
