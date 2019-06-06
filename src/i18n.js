import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from './store';

Vue.use(VueI18n);

const messages = {
	en: {

	},
	ru: {

	}
};

const dateTimeFormatsDefault = {
	short: {
		year: 'numeric', month: 'long', day: '2-digit'
	},
	long: {
		year: 'numeric', month: 'long', day: '2-digit',
		weekday: 'short', hour: 'numeric', minute: 'numeric'
	},
	day: {
		day: '2-digit'
	},
	month: {
		month: 'long'
	},
	year: {
		year: 'numeric'
	},
	dayMonth: {
		day: '2-digit',
		month: 'long'
	}
};

const dateTimeFormats = {
	en: dateTimeFormatsDefault,
	ru: dateTimeFormatsDefault
};

export default new VueI18n({
	locale: store.state.locale,
	fallbackLocale: 'en',
	messages,
	dateTimeFormats
});
