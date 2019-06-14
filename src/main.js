import './global.css';
import './polyfills-ie';
import './polyfills';
import 'ninelines-ua-parser';
import Vue from 'vue';
import store from './store';
import i18n from './i18n';
import './plugins';
import './transitions';
import './base-components';
import App from './App';

Vue.config.productionTip = false;

new Vue({
	store,
	i18n,
	...App
}).$mount('#app');
