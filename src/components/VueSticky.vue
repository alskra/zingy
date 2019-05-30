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
					this.sticky();
				},
				deep: true
			}
		},
		methods: {
			setPlaceholder() {
				return Object.assign(this.placeholder.style, {
					position: '',
					height: getComputedStyle(this.$el).height
				});
			},
			unsetPlaceholder() {
				return Object.assign(this.placeholder.style, {
					position: 'absolute',
					height: ''
				});
			},
			setTopFixedStyle() {
				this.offsetParent = this.placeholder.offsetParent;
				this.offsetParentStyle = getComputedStyle(this.offsetParent);

				return Object.assign(this.$el.style, {
					position: 'fixed',
					top: this.topPosition + 'px',
					bottom: '',
					left: this.placeholder.getBoundingClientRect().left + 'px',
					marginTop: 0,
					marginBottom: 0,
					width: this.placeholderStyle.width
				});
			},
			setBottomAbsoluteStyle() {
				return Object.assign(this.$el.style, {
					position: 'absolute',
					top: '',
					bottom: this.offsetParentStyle.paddingBottom,
					left: this.placeholder.offsetLeft + 'px',
					marginTop: 0,
					marginBottom: 0,
					width: this.placeholderStyle.width
				});
			},
			setBottomFixedStyle() {
				return Object.assign(this.$el.style, {
					position: 'fixed',
					top: '',
					bottom: this.bottomPosition + 'px',
					left: this.placeholder.getBoundingClientRect().left + 'px',
					marginTop: 0,
					marginBottom: 0,
					width: this.placeholderStyle.width
				});
			},
			setTopAbsoluteStyle() {
				return Object.assign(this.$el.style, {
					position: 'absolute',
					top: this.offsetParentStyle.paddingTop,
					bottom: '',
					left: this.placeholder.offsetLeft + 'px',
					marginTop: 0,
					marginBottom: 0,
					width: this.placeholderStyle.width
				});
			},
			resetStyle() {
				return Object.assign(this.$el.style, {
					position: '',
					top: '',
					bottom: '',
					left: '',
					marginTop: '',
					marginBottom: '',
					width: ''
				});
			},
			updateStyle() {
				if (this.topState.sticky) {
					this.setPlaceholder();

					if (!this.topState.edge) {
						this.setTopFixedStyle();
					}
					else {
						this.setBottomAbsoluteStyle();
					}
				} else if (this.bottomState.sticky) {
					this.setPlaceholder();

					if (!this.bottomState.edge) {
						this.setBottomFixedStyle();
					}
					else {
						this.setTopAbsoluteStyle();
					}
				} else {
					this.unsetPlaceholder();
					this.resetStyle();
				}
			},
			sticky() {
				// top
				if ((typeof this.top === 'number' || this.top) && !this.bottomState.sticky) {
					if (
						!this.topState.sticky
						&& !this.topState.edge
						&& this.$el.getBoundingClientRect().top < this.topPosition
					) {
						this.$set(this.topState, 'sticky', true);
						this.updateStyle();
					}

					if (
						this.topState.sticky
						&& !this.topState.edge
						&& this.offsetParent.getBoundingClientRect().bottom
						- parseFloat(this.offsetParentStyle.borderBottomWidth)
						- parseFloat(this.offsetParentStyle.paddingBottom)
						< this.$el.getBoundingClientRect().bottom
					) {
						this.$set(this.topState, 'edge', true);
						this.updateStyle();
					}

					if (
						this.topState.sticky
						&& this.topState.edge
						&& this.$el.getBoundingClientRect().top > this.topPosition
					) {
						this.$set(this.topState, 'edge', false);
						this.updateStyle();
					}

					if (
						this.topState.sticky
						&& !this.topState.edge
						&& this.placeholder.getBoundingClientRect().top > this.topPosition
					) {
						this.$set(this.topState, 'sticky', false);
						this.updateStyle();
					}
				} else if (!this.top) {
					this.$set(this.topState, 'sticky', false);
					this.$set(this.topState, 'edge', false);
					this.updateStyle();
				}

				// bottom
				if ((typeof this.bottom === 'number' || this.bottom) && !this.topState.sticky) {
					if (
						!this.bottomState.sticky
						&& !this.bottomState.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom < this.bottomPosition
					) {
						this.$set(this.bottomState, 'sticky', true);
						this.updateStyle();
					}

					if (
						this.bottomState.sticky
						&& !this.bottomState.edge
						&& this.offsetParent.getBoundingClientRect().top
						+ parseFloat(this.offsetParentStyle.borderTopWidth)
						+ parseFloat(this.offsetParentStyle.paddingTop)
						> this.$el.getBoundingClientRect().top
					) {
						this.$set(this.bottomState, 'edge', true);
						this.updateStyle();
					}

					if (
						this.bottomState.sticky
						&& this.bottomState.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom > this.bottomPosition
					) {
						this.$set(this.bottomState, 'edge', false);
						this.updateStyle();
					}

					if (
						this.bottomState.sticky
						&& !this.bottomState.edge
						&& window.innerHeight - this.placeholder.getBoundingClientRect().bottom > this.bottomPosition
					) {
						this.$set(this.bottomState, 'sticky', false);
						this.updateStyle();
					}
				} else if (!this.bottom) {
					this.$set(this.bottomState, 'sticky', false);
					this.$set(this.bottomState, 'edge', false);
					this.updateStyle();
				}

				this.updateStyle();
			},
			onScroll() {
				this.sticky();
			},
			onResize() {
				this.sticky();
			}
		},
		created() {
			window.addEventListener('load', this.onResize);
			window.addEventListener('scroll', this.onScroll);
			window.addEventListener('resize', this.onResize);
		},
		destroyed() {
			this.placeholder.parentElement.removeChild(this.placeholder);

			window.removeEventListener('scroll', this.onScroll);
			window.removeEventListener('resize', this.onResize);
		},
		mounted() {
			this.placeholder = this.$el.cloneNode();
			this.placeholder.classList.add('vue-sticky-placeholder');

			Object.assign(this.placeholder.style, {
				position: 'absolute',
				visibility: 'hidden'
			});

			this.$el.parentElement.insertBefore(this.placeholder, this.$el);
			this.placeholderStyle = getComputedStyle(this.placeholder);

			// this.offsetParent = this.placeholder.offsetParent;
			// this.offsetParentStyle = getComputedStyle(this.offsetParent);

			this.sticky();


		}
	};
</script>
