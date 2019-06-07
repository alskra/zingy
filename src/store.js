import queryString from 'query-string';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const locales = ['en', 'ru'];

function getLocale() {
	const locale = (
		queryString.parse(location.search).lang
		|| document.documentElement.getAttribute('lang')
		|| navigator.language
	).split('-')[0].toLowerCase();

	if (locales.includes(locale)) {
		return locale;
	}

	return 'en';
}

export default new Vuex.Store(
	{
		state: {
			locale: getLocale()
		},
		mutations: {
			setLocale(state, val) {
				val = val.split('-')[0].toLowerCase();

				if (locales.includes(val)) {
					state.locale = val;
				} else {
					state.locale = 'en';
				}
			}
		}
	}
);
