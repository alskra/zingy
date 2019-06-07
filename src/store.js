import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store(
	{
		state: {
			locale: (
				document.documentElement.getAttribute('lang')
				|| navigator.language
				|| 'en'
			).split('-')[0].toLowerCase()
		},
		mutations: {
			setLocale(state, val) {
				state.locale = (val || 'en').split('-')[0].toLowerCase();
			}
		}
	}
);
