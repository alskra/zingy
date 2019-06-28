export default {
	install(Vue) {
		const vm = new Vue({
			data() {
				return {
					x: 0,
					y: 0,
					deltaX: 0,
					deltaY: 0,
					directionX: null,
					directionY: null,
					limitX: 0,
					limitY: 0,
					isBeginningX: null,
					isBeginningY: null,
					isEndX: null,
					isEndY: null,
					getX: () => window.pageXOffset,
					getY: () => window.pageYOffset,
					getLimitX: () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
					getLimitY: () => document.documentElement.scrollHeight - document.documentElement.clientHeight,
					reachBeginningX: () => Math.abs(window.pageXOffset) < 1,
					reachBeginningY: () => Math.abs(window.pageYOffset) < 1,
					reachEndX: () => Math.abs(window.pageXOffset - this.getLimitX()) < 1
						|| Math.abs(document.body.getBoundingClientRect().right - window.innerWidth) < 1,
					reachEndY: () => Math.abs(window.pageYOffset - this.getLimitY()) < 1
						|| Math.abs(document.body.getBoundingClientRect().bottom - window.innerHeight) < 1
				};
			},
			watch: {
				x(val, oldVal) {
					this.deltaX = val - oldVal;
				},
				y(val, oldVal) {
					this.deltaY = val - oldVal;
				},
				deltaX(val, oldVal) {
					if (val > 0 && oldVal <= 0) {
						this.directionX = '>';
					} else if (val < 0 && oldVal >= 0) {
						this.directionX = '<';
					}
				},
				deltaY(val, oldVal) {
					if (val > 0 && oldVal <= 0) {
						this.directionY = '>';
					} else if (val < 0 && oldVal >= 0) {
						this.directionY = '<';
					}
				}
			},
			methods: {
				update() {
					// Changing on `scroll`
					this.x = this.getX();
					this.y = this.getY();

					// Changing on `resize`, `mutations`
					this.limitX = this.getLimitX();
					this.limitY = this.getLimitY();

					// Changing on `scroll`, `resize`, `mutations`
					this.isBeginningX = this.reachBeginningX();
					this.isBeginningY = this.reachBeginningY();
					this.isEndX = this.reachEndX();
					this.isEndY = this.reachEndY();
				}
			},
			created() {
				this.update();

				window.addEventListener('scroll', this.update);
				window.addEventListener('resize', this.update);

				// eslint-disable-next-line no-unused-vars
				this.observer = new MutationObserver((mutationsList, observer) => {
					// console.log('mutations:', mutationsList);
					this.update();
				});

				this.observer.observe(document, {
					attributes: true,
					characterData: true,
					childList: true,
					subtree: true
				});
			},
			destroyed() {
				window.removeEventListener('scroll', this.update);
				window.removeEventListener('resize', this.update);
				this.observer.disconnect();
			}
		});

		Vue.prototype.$windowScroll = vm.$data;
		Vue.prototype.$windowScrollUpdate = vm.update;
	}
}
