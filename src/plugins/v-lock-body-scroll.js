import cssVars from 'css-vars-ponyfill';

// Lock function
const lockBodyScroll = (locked = true) => {
	const initialLockCounter = JSON.parse(document.documentElement.dataset.vLockBodyScroll || 0);
	let lockCounter = initialLockCounter;

	if (locked) {
		lockCounter++;
	} else if (!locked && initialLockCounter > 0) {
		lockCounter--;
	}

	document.documentElement.dataset.vLockBodyScroll = lockCounter;

	if (!initialLockCounter && lockCounter) {
		cssVars({
			variables: {
				'--body-scroll-locked_padding': window.innerWidth - document.documentElement.clientWidth + 'px'
			}
		});
	} else if (lockCounter === 0) {
		cssVars({
			variables: {
				'--body-scroll-locked_padding': ''
			}
		});
	}

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


