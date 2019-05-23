import './global.css';
import './polyfills';
import 'ninelines-ua-parser';
import Vue from 'vue';
import './base-components';
import App from './App';

Vue.config.productionTip = false;

new Vue({
	...App
}).$mount('#app');
