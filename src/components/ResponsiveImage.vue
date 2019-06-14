<template lang="pug">
	v-lazy-image.responsive-image(
		v-bind="vLazyImageProps"
		@intersect="onIntersect"
		@load="onLoad"
		:style="{width: widthImage, height: heightImage}"
	)
</template>

<script>
	import VLazyImage from 'v-lazy-image';


	export default {
		name: 'ResponsiveImage',
		components: {
			VLazyImage
		},
		props: {
			...VLazyImage.props,
			widthRatio: {
				type: Number,
				required: true
			},
			heightRatio: {
				type: Number,
				required: true
			},
			width: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				loaded: false,
				heightImage: ''
			};
		},
		computed: {
			widthImage() {
				if (this.width.constructor === Number) {
					return this.width + 'px';
				}

				return this.width;
			},
			vLazyImageProps() {
				const props = {};

				Object.keys(VLazyImage.props).forEach(propKey => props[propKey] = this.$props[propKey]);

				return props;
			}
		},
		watch: {
			widthImage() {
				this.setHeight();
			}
		},
		methods: {
			setHeight() {
				this.heightImage = this.heightRatio / this.widthRatio * this.$el.width + 'px';
			},
			onIntersect() {
				this.setHeight();
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
		all: initial;

		& {
			display: block;
			max-width: 100%;
			object-fit: cover;
			cursor: inherit;
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
