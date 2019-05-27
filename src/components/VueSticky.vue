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
					this.updateStyle();
				},
				deep: true
			}
		},
		methods: {
			setTopFixedStyle() {
				Object.assign(this.$el.style, {
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
				Object.assign(this.$el.style, {
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
				Object.assign(this.$el.style, {
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
				Object.assign(this.$el.style, {
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
				Object.assign(this.$el.style, {
					position: '',
					top: '',
					bottom: '',
					left: '',
					marginTop: '',
					marginBottom: '',
					width: ''
				});
			},
			setPlaceholder() {
				Object.assign(this.placeholder.style, {
					position: '',
					height: getComputedStyle(this.$el).height
				});
			},
			unsetPlaceholder() {
				Object.assign(this.placeholder.style, {
					position: 'absolute',
					height: ''
				});
			},
			updateStyle() {
				if (this.topState.sticky) {
					if (!this.topState.edge) {
						this.setTopFixedStyle();
					}
					else {
						this.setBottomAbsoluteStyle();
					}
				}

				if (this.bottomState.sticky) {
					if (!this.bottomState.edge) {
						this.setBottomFixedStyle();
					}
					else {
						this.setTopAbsoluteStyle();
					}
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
						this.setPlaceholder();
						this.setTopFixedStyle();
						this.$set(this.topState, 'sticky', true);
					}

					if (
						this.topState.sticky
						&& !this.topState.edge
						&& this.offsetParent.getBoundingClientRect().bottom
						- parseFloat(this.offsetParentStyle.borderBottomWidth)
						- parseFloat(this.offsetParentStyle.paddingBottom)
						< this.$el.getBoundingClientRect().bottom
					) {
						this.setBottomAbsoluteStyle();
						this.$set(this.topState, 'edge', true);
					}

					if (
						this.topState.sticky
						&& this.topState.edge
						&& this.$el.getBoundingClientRect().top > this.topPosition
					) {
						this.setTopFixedStyle();
						this.$set(this.topState, 'edge', false);
					}

					if (
						this.topState.sticky
						&& !this.topState.edge
						&& this.placeholder.getBoundingClientRect().top > this.topPosition
					) {
						this.unsetPlaceholder();
						this.resetStyle();
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
						this.setPlaceholder();
						this.setBottomFixedStyle();
						this.$set(this.bottomState, 'sticky', true);
					}

					if (
						this.bottomState.sticky
						&& !this.bottomState.edge
						&& this.offsetParent.getBoundingClientRect().top
						+ parseFloat(this.offsetParentStyle.borderTopWidth)
						+ parseFloat(this.offsetParentStyle.paddingTop)
						> this.$el.getBoundingClientRect().top
					) {
						this.setTopAbsoluteStyle();
						this.$set(this.bottomState, 'edge', true);
					}

					if (
						this.bottomState.sticky
						&& this.bottomState.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom > this.bottomPosition
					) {
						this.setBottomFixedStyle();
						this.$set(this.bottomState, 'edge', false);
					}

					if (
						this.bottomState.sticky
						&& !this.bottomState.edge
						&& window.innerHeight - this.placeholder.getBoundingClientRect().bottom > this.bottomPosition
					) {
						this.unsetPlaceholder();
						this.resetStyle();
						this.$set(this.bottomState, 'sticky', false);
					}
				}
			},
			onScroll() {
				this.sticky();
				this.updateStyle();
			},
			onResize() {
				this.sticky();
				this.updateStyle();
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

			this.offsetParentStyle = getComputedStyle(this.offsetParent);
			this.placeholderStyle = getComputedStyle(this.placeholder);

			this.sticky();
		}
	};
</script>
