export default {
	install(Vue) {
		const vm = new Vue({
			data: {
				x: 0,
				y: 0,
				deltaX: 0,
				deltaY: 0,
				directionX: null,
				directionY: null,
				isBeginningX: null,
				isEndX: null,
				isBeginningY: null,
				isEndY: null,
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
				updateOffset() {
					this.x = window.pageXOffset;
					this.y = window.pageYOffset;
				},
				updateState() {
					this.isBeginningX = this.x === 0;
					this.isEndX = this.x === document.documentElement.scrollWidth - document.documentElement.clientWidth;

					this.isBeginningY = this.y === 0;
					this.isEndY = this.y === document.documentElement.scrollHeight - document.documentElement.clientHeight;
				}
			},
			created() {
				this.updateOffset();
				this.updateState();

				window.addEventListener('scroll', this.updateOffset);
				window.addEventListener('scroll', this.updateState);

				const vm = this;

				vm.updateFrame = requestAnimationFrame(function updateState() {
					vm.updateState();
					vm.updateFrame = requestAnimationFrame(updateState);
				})
			},
			destroyed() {
				window.removeEventListener('scroll', this.updateOffset);
				window.removeEventListener('scroll', this.updateState);
				cancelAnimationFrame(this.updateFrame);
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
	}
}
