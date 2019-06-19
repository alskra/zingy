import cssVars from 'css-vars-ponyfill';

// Lock function
const lockBodyScroll = (locked = true) => {
	let lockCounter = JSON.parse(document.documentElement.dataset.vLockBodyScroll || 0);

	if (locked) {
		lockCounter++;
	} else if (!locked && lockCounter > 0) {
		lockCounter--;
	}

	document.documentElement.dataset.vLockBodyScroll = lockCounter;

	cssVars({
		variables: {
			'--body-scroll-locked_padding': lockCounter ?
				window.innerWidth - document.documentElement.clientWidth + 'px'
				: ''
		}
	});

	[document.documentElement, document.body]
		.forEach(el => {
			el.style.overflow = lockCounter ? 'hidden' : '';
			el.classList.toggle('v-lock-body-scroll-active', lockCounter);
		});
};

// Export directive
export const VLockBodyScroll = {
	bind(el, binding) {
		lockBodyScroll(binding.value);
	},
	update(el, binding) {
		if (binding.value !== binding.oldValue) {
			lockBodyScroll(binding.value);
		}
	}
};

// Export plugin
export default {
	install(Vue) {
		Vue.directive('lock-body-scroll', VLockBodyScroll);
		Vue.prototype.$lockBodyScroll = lockBodyScroll;
	}
}


