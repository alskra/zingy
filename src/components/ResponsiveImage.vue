<template lang="pug">
	v-lazy-image.responsive-image(
		v-bind="$props"
		:style="{height}"
		@load="onLoad"
	)
</template>

<script>
	import VLazyImage from 'v-lazy-image';

	export default {
		name: 'ResponsiveImage',
		props: {
			...VLazyImage.props,
			realWidth: {
				type: Number,
				required: true
			},
			realHeight: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				loaded: false,
				height: ''
			};
		},
		methods: {
			setHeight() {
				if (!this.loaded) {
					this.height = this.realHeight / this.realWidth * this.$el.offsetWidth + 'px';
				} else {
					this.height = '';
				}
			},
			onLoad() {
				this.loaded = true;
				this.setHeight();
			}
		},
		created() {
			window.addEventListener('resize', this.setHeight);
		},
		mounted() {
			this.setHeight();
		},
		destroyed() {
			window.removeEventListener('resize', this.setHeight);
		}
	};
</script>

<style scoped>
	.responsive-image {
		& {
			display: block;
			max-width: 100%;
			height: auto;
			object-fit: cover;
		}

		&.v-lazy-image {
			opacity: 0;
			filter: blur(10px);
			transition: filter 0.7s;
			will-change: filter;
		}

		&.v-lazy-image-loaded {
			opacity: 1;
			filter: blur(0);
		}
	}
</style>
