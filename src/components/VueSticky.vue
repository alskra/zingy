<script>
	export default {
		name: 'VueSticky',
		render() {
			return this.$scopedSlots.default();
		},
		props: {
			top: {
				type: [Number, Boolean],
				default: true
			},
			bottom: {
				type: [Number, Boolean],
				default: false
			},
		},
		data() {
			return {
				topState: {
					sticky: false,
					edge: false
				},
				bottomState: {
					sticky: false,
					edge: false
				}
			}
		},
		computed: {
			topPosition() {
				if (typeof this.top !== 'number') {
					return 0;
				}

				return this.top;
			},
			bottomPosition() {
				if (typeof this.bottom !== 'number') {
					return 0;
				}

				return this.bottom;
			},
			isSticky() {
				return this.topState.sticky || this.bottomState.sticky;
			}
		},
		watch: {
			isSticky() {
				this.$el.classList.toggle('is-sticky', this.isSticky);
				this.$el.classList.toggle('is-sticky-top', this.topState.sticky);
				this.$el.classList.toggle('is-sticky-bottom', this.bottomState.sticky);
			},
			$props: {
				handler() {
					if (this.topState.sticky && !this.topState.edge) {
						this.$el.style.top = this.top + 'px';
					}

					if (this.bottomState.sticky && !this.bottomState.edge) {
						this.$el.style.bottom = this.bottom + 'px';
					}

					this.sticky();
				},
				deep: true
			}
		},
		methods: {
			sticky() {
				const offsetParentStyles = getComputedStyle(this.offsetParent);

				if ((typeof this.top === 'number' || this.top) && !this.bottomState.sticky) {
					if (
						!this.topState.sticky
						&& !this.topState.edge
						&& this.$el.getBoundingClientRect().top < this.topPosition
					) {
						Object.assign(this.placeholder.style, {
							position: '',
							height: getComputedStyle(this.$el).height
						});

						Object.assign(this.$el.style, {
							position: 'fixed',
							top: this.topPosition + 'px',
							bottom: '',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.topState, 'sticky', true);
					}

					if (
						this.topState.sticky
						&& !this.topState.edge
						&& this.offsetParent.getBoundingClientRect().bottom
						- parseFloat(offsetParentStyles.borderBottomWidth)
						- parseFloat(offsetParentStyles.paddingBottom)
						< this.$el.getBoundingClientRect().bottom
					) {
						Object.assign(this.$el.style, {
							position: 'absolute',
							top: '',
							bottom: offsetParentStyles.paddingBottom,
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.topState, 'edge', true);
					}

					if (
						this.topState.sticky
						&& this.topState.edge
						&& this.$el.getBoundingClientRect().top > this.topPosition
					) {
						Object.assign(this.$el.style, {
							position: 'fixed',
							top: this.topPosition + 'px',
							bottom: '',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.topState, 'edge', false);
					}

					if (
						this.topState.sticky
						&& !this.topState.edge
						&& this.placeholder.getBoundingClientRect().top > this.topPosition
					) {
						Object.assign(this.placeholder.style, {
							position: 'absolute',
							height: ''
						});

						Object.assign(this.$el.style, {
							position: '',
							top: '',
							bottom: '',
							marginTop: '',
							marginBottom: '',
							width: ''
						});

						this.$set(this.topState, 'sticky', false);
					}
				}

				// bottom
				if ((typeof this.bottom === 'number' || this.bottom) && !this.topState.sticky) {
					if (
						!this.bottomState.sticky
						&& !this.bottomState.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom < this.bottomPosition
					) {
						Object.assign(this.placeholder.style, {
							position: '',
							height: getComputedStyle(this.$el).height
						});

						Object.assign(this.$el.style, {
							position: 'fixed',
							top: '',
							bottom: this.bottomPosition + 'px',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.bottomState, 'sticky', true);
					}

					if (
						this.bottomState.sticky
						&& !this.bottomState.edge
						&& this.offsetParent.getBoundingClientRect().top
						+ parseFloat(offsetParentStyles.borderTopWidth)
						+ parseFloat(offsetParentStyles.paddingTop)
						> this.$el.getBoundingClientRect().top
					) {
						Object.assign(this.$el.style, {
							position: 'absolute',
							top: offsetParentStyles.paddingTop,
							bottom: '',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.bottomState, 'edge', true);
					}

					if (
						this.bottomState.sticky
						&& this.bottomState.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom > this.bottomPosition
					) {
						Object.assign(this.$el.style, {
							position: 'fixed',
							top: '',
							bottom: this.bottomPosition + 'px',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.bottomState, 'edge', false);
					}

					if (
						this.bottomState.sticky
						&& !this.bottomState.edge
						&& window.innerHeight - this.placeholder.getBoundingClientRect().bottom > this.bottomPosition
					) {
						Object.assign(this.placeholder.style, {
							position: 'absolute',
							height: ''
						});

						Object.assign(this.$el.style, {
							position: '',
							top: '',
							bottom: '',
							marginTop: '',
							marginBottom: '',
							width: ''
						});

						this.$set(this.bottomState, 'sticky', false);
					}
				}
			},
			onScroll() {
				this.sticky();
			},
			onResize() {
				this.sticky();

				if (this.isSticky) {
					this.$el.style.width = getComputedStyle(this.placeholder).width;
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.onScroll);
			window.addEventListener('resize', this.onResize);
		},
		destroyed() {
			this.placeholder.parentElement.removeChild(this.placeholder);

			window.removeEventListener('scroll', this.onScroll);
			window.removeEventListener('resize', this.onResize);
		},
		mounted() {
			this.offsetParent = this.$el.offsetParent;
			this.placeholder = this.$el.cloneNode();
			this.placeholder.classList.add('vue-sticky-placeholder');

			Object.assign(this.placeholder.style, {
				position: 'absolute',
				visibility: 'hidden'
			});

			this.$el.parentElement.insertBefore(this.placeholder, this.$el);

			this.sticky();
		}
	};
</script>

<style scoped>
	.stick-element {
		width: 200px;
		height: 300px;
		border: 2px solid red;
		margin: 100px 0;
		background-color: white;
	}
</style>
