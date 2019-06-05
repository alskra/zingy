import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store(
	{
		state: {
			locale: document.documentElement.getAttribute('lang') || 'en'
		},
		mutations: {
			setLocale(state, val) {
				state.locale = val || 'en';
			}
		}
	}
);
