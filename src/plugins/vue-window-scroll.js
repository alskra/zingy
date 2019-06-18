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
					reachBeginningX: () => window.pageXOffset === 0,
					reachBeginningY: () => window.pageYOffset === 0,
					reachEndX: () => window.pageXOffset === this.getLimitX()
						|| document.body.getBoundingClientRect().right <= window.innerWidth,
					reachEndY: () => window.pageYOffset === this.getLimitY()
						|| document.body.getBoundingClientRect().bottom <= window.innerHeight
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
				updateData() {
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
				this.updateData();

				window.addEventListener('scroll', this.updateData);
				window.addEventListener('resize', this.updateData);

				// eslint-disable-next-line no-unused-vars
				this.observer = new MutationObserver((mutationsList, observer) => {
					// console.log('mutations:', mutationsList);
					this.updateData();
				});

				this.observer.observe(document.documentElement, {
					attributes: true,
					childList: true,
					characterData: true,
					subtree: true
				});
			},
			destroyed() {
				window.removeEventListener('scroll', this.updateData);
				window.removeEventListener('resize', this.updateData);
				this.observer.disconnect();
			}
		});

		// Vue.mixin({
		// 	computed: {
		// 		windowScroll() {
		// 			return vm.$data;
		// 		}
		// 	}
		// });

		Vue.prototype.$windowScroll = vm.$data;

		Vue.prototype.$windowScrollUpdate = () => {
			vm.updateData();
		};
	}
}
