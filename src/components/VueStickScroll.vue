<template lang="pug">
	transition
		slot
</template>

<script>
	export default {
		name: 'VueStickScroll',
		props: {
			stickTop: {
				type: Number,
				default: 0
			}
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
			sticked() {
				return this.top.sticked || this.bottom.sticked;
			}
		},
		methods: {
			onScroll() {
				console.log('Scroll!!');

				const offsetParentStyles = getComputedStyle(this.offsetParent);

				if (
					!this.top.sticked
					&& !this.top.edge
					&& this.$el.getBoundingClientRect().top < this.stickTop
				) {
					this.placeholder = this.$el.cloneNode();

					Object.assign(this.placeholder.style, {
						height: getComputedStyle(this.$el).height,
						visibility: 'hidden'
					});

					this.$el.parentElement.insertBefore(this.placeholder, this.$el);

					Object.assign(this.$el.style, {
						position: 'fixed',
						top: this.stickTop + 'px',
						bottom: '',
						marginTop: 0,
						marginBottom: 0
					});

					this.$set(this.top, 'sticked', true);
					console.log('Sticked to Viewport Top');
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
						marginBottom: 0
					});

					this.$set(this.top, 'edge', true);
					console.log('Sticked to Parent Bottom');
				}

				if (
					this.top.sticked
					&& this.top.edge
					&& this.$el.getBoundingClientRect().top >= this.stickTop
				) {
					Object.assign(this.$el.style, {
						position: 'fixed',
						top: this.stickTop + 'px',
						bottom: '',
						marginTop: 0,
						marginBottom: 0
					});

					this.$set(this.top, 'edge', false);
					console.log('Unsticked from Parent Bottom');
				}

				if (
					this.top.sticked
					&& !this.top.edge
					&& this.placeholder.getBoundingClientRect().top >= this.stickTop
				) {
					Object.assign(this.$el.style, {
						position: '',
						top: '',
						bottom: '',
						marginTop: '',
						marginBottom: ''
					});

					this.placeholder.parentElement.removeChild(this.placeholder);

					this.$set(this.top, 'sticked', false);
					console.log('Unsticked from Viewport Top');
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.onScroll);
		},
		mounted() {
			this.offsetParent = this.$el.offsetParent;
			this.onScroll();
		}
	};
</script>

<style scoped>
	.stick-element {
		width: 200px;
		height: 300px;
		border: 2px solid red;
		margin: 200px 0;
		background-color: white;
	}
</style>
