<script>
	export default {
		name: 'VueStickScroll',
		render() {
			return this.$scopedSlots.default();
		},
		props: {
			stickTop: {
				type: [Number, Boolean],
				default: true
			},
			stickBottom: {
				type: [Number, Boolean],
				default: false
			},
		},
		data() {
			return {
				top: {
					sticked: false,
					edge: false
				},
				bottom: {
					sticked: false,
					edge: false
				}
			}
		},
		computed: {
			stickTopPosition() {
				if (typeof this.stickTop !== 'number') {
					return 0;
				}

				return this.stickTop;
			},
			stickBottomPosition() {
				if (typeof this.stickBottom !== 'number') {
					return 0;
				}

				return this.stickBottom;
			},
			sticked() {
				return this.top.sticked || this.bottom.sticked;
			}
		},
		methods: {
			onScroll() {
				const offsetParentStyles = getComputedStyle(this.offsetParent);

				if ((typeof this.stickTop === 'number' || this.stickTop) && !this.bottom.sticked) {
					if (
						!this.top.sticked
						&& !this.top.edge
						&& this.$el.getBoundingClientRect().top < this.stickTopPosition
					) {
						Object.assign(this.placeholder.style, {
							position: '',
							height: getComputedStyle(this.$el).height
						});

						Object.assign(this.$el.style, {
							position: 'fixed',
							top: this.stickTopPosition + 'px',
							bottom: '',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.top, 'sticked', true);
					}

					if (
						this.top.sticked
						&& !this.top.edge
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

						this.$set(this.top, 'edge', true);
					}

					if (
						this.top.sticked
						&& this.top.edge
						&& this.$el.getBoundingClientRect().top > this.stickTopPosition
					) {
						Object.assign(this.$el.style, {
							position: 'fixed',
							top: this.stickTopPosition + 'px',
							bottom: '',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.top, 'edge', false);
					}

					if (
						this.top.sticked
						&& !this.top.edge
						&& this.placeholder.getBoundingClientRect().top > this.stickTopPosition
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

						this.$set(this.top, 'sticked', false);
					}
				}

				// bottom
				if ((typeof this.stickBottom === 'number' || this.stickBottom) && !this.top.sticked) {
					if (
						!this.bottom.sticked
						&& !this.bottom.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom < this.stickBottomPosition
					) {
						Object.assign(this.placeholder.style, {
							position: '',
							height: getComputedStyle(this.$el).height
						});

						Object.assign(this.$el.style, {
							position: 'fixed',
							top: '',
							bottom: this.stickBottomPosition + 'px',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.bottom, 'sticked', true);
					}

					if (
						this.bottom.sticked
						&& !this.bottom.edge
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

						this.$set(this.bottom, 'edge', true);
					}

					if (
						this.bottom.sticked
						&& this.bottom.edge
						&& window.innerHeight - this.$el.getBoundingClientRect().bottom > this.stickBottomPosition
					) {
						Object.assign(this.$el.style, {
							position: 'fixed',
							top: '',
							bottom: this.stickBottomPosition + 'px',
							marginTop: 0,
							marginBottom: 0,
							width: getComputedStyle(this.$el).width
						});

						this.$set(this.bottom, 'edge', false);
					}

					if (
						this.bottom.sticked
						&& !this.bottom.edge
						&& window.innerHeight - this.placeholder.getBoundingClientRect().bottom > this.stickBottomPosition
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

						this.$set(this.bottom, 'sticked', false);
					}
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.onScroll);
		},
		mounted() {
			this.offsetParent = this.$el.offsetParent;
			this.placeholder = this.$el.cloneNode();

			Object.assign(this.placeholder.style, {
				position: 'absolute',
				visibility: 'hidden'
			});

			this.$el.parentElement.insertBefore(this.placeholder, this.$el);

			this.onScroll();
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
