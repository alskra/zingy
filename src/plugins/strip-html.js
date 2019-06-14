// Export filter
export const StripHTML = str => {
	const div = document.createElement('div');

	div.innerHTML = str;

	return (div.textContent || div.innerText || '')
		.replace(/^\s*(\S.*\S)\s*$/s, (match, capture) => capture.replace(/\s+/g, ' '));
};

// Export plugin
export default {
	install(Vue) {
		Vue.filter('strip-html', StripHTML);
		Vue.prototype.$stripHTML = StripHTML;
	}
}
