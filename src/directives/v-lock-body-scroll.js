import Vue from 'vue';

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

		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

		[document.documentElement, document.body]
			.forEach(el => {
				el.style.overflow = lockCounter ? 'hidden' : '';
				el.classList.toggle('v-lock-body-scroll-is-active', lockCounter);
			});

		document.body.style.paddingRight = lockCounter ? scrollBarWidth + 'px' : '';
	}
});
