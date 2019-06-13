import Vue from 'vue';
import cssVars from 'css-vars-ponyfill';

Vue.directive('lock-body-scroll', (el, binding) => {
	if (
		!binding.hasOwnProperty('oldValue')
		|| (binding.hasOwnProperty('oldValue') && binding.value !== binding.oldValue)
	) {
		let lockCounter = JSON.parse(document.documentElement.dataset.vLockBodyScroll || 0);

		if (binding.value) {
			lockCounter++;
		} else if (!binding.value && lockCounter > 0) {
			lockCounter--;
		}

		document.documentElement.dataset.vLockBodyScroll = lockCounter;

		cssVars({
			variables: {
				'--body-is-scroll-locked_padding': lockCounter ?
					window.innerWidth - document.documentElement.clientWidth + 'px'
					: ''
			}
		});

		[document.documentElement, document.body]
			.forEach(el => {
				el.style.overflow = lockCounter ? 'hidden' : '';
				el.classList.toggle('v-lock-body-scroll-is-active', lockCounter);
			});
	}
});
