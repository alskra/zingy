import './global.css';
import './polyfills';
import 'ninelines-ua-parser';
import Vue from 'vue';
import './plugins';
import './plugins.css';
import './base-components';
import App from './App';

Vue.config.productionTip = false;

new Vue({
	...App
}).$mount('#app');
