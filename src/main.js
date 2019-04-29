import './polyfills';
import Vue from 'vue';
import './base-components';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	...App
}).$mount('#app');
