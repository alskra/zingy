// Export filter
export const StripHTML = str => {
	const el = document.createElement('div');

	el.innerHTML = str;

	return (el.textContent || el.innerText || '')
		.replace(/^\s+|\s+$/g, '')
		.replace(/\s+/g, ' ');
};

// Export plugin
export default {
	install(Vue) {
		Vue.filter('strip-html', StripHTML);
		Vue.prototype.$stripHTML = StripHTML;
	}
}
