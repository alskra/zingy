export default {
	install(Vue) {
		const vm = new Vue({
			data: {
				x: 0,
				y: 0,
				deltaX: 0,
				deltaY: 0,
				directionX: '',
				directionY: ''
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
				onWindowScroll() {
					this.x = window.pageXOffset;
					this.y = window.pageYOffset;
				}
			},
			created() {
				window.addEventListener('scroll', this.onWindowScroll);
			},
			destroyed() {
				window.removeEventListener('scroll', this.onWindowScroll);
			}
		});

		Vue.mixin({
			computed: {
				windowScroll() {
					return vm.$data;
				}
			}
		});
	}
}
