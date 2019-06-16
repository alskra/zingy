import queryString from 'query-string'; // query-string@5 for IE support
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

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

const messages = {
	en: {
	},
	ru: {
	}
};

const defaultDateTimeFormats = {
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
	en: defaultDateTimeFormats,
	ru: defaultDateTimeFormats
};

export default new VueI18n({
	locale: getLocale(),
	fallbackLocale: 'en',
	messages,
	dateTimeFormats
});
