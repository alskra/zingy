import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from './store';

Vue.use(VueI18n);

const messages = {
	ru: {

	},
	en: {

	}
};

export default new VueI18n({
	locale: store.state.locale,
	fallbackLocale: 'en',
	messages
});
