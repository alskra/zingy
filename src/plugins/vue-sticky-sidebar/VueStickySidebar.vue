<template lang="pug">
	.vue-sticky-sidebar(:class="{'vue-sticky-sidebar-initialized': stickySidebar._initialized}")
		.vue-sticky-sidebar-inner
			slot
</template>

<script>
	import ResizeSensor from 'resize-sensor';
	import StickySidebar from 'sticky-sidebar';
	import merge from 'lodash-es/merge';

	window.ResizeSensor = ResizeSensor;

	export default {
		name: 'VueStickySidebar',
		props: {
			/** @see https://abouolia.github.io/sticky-sidebar/#options */
			options: Object
		},
		data() {
			return {
				defaultOptions: {
					init: true
				},
				stickySidebar: {}
			};
		},
		watch: {
			options: {
				handler() {
					// console.log('options changed!');
					this.destroy();
					this.init();
				},
				deep: true
			}
		},
		methods: {
			/** @see https://abouolia.github.io/sticky-sidebar/#public-methods */
			init() {
				const resolvedOptions = merge(
					this.defaultOptions,
					this.options,
					{
						containerSelector: '.vue-sticky-sidebar-container',
						innerWrapperSelector: '.vue-sticky-sidebar-inner'
					}
				);

				if (resolvedOptions.init) {
					this.stickySidebar = new StickySidebar(this.$el, resolvedOptions);
					// console.log(this.stickySidebar);
				}
			},
			update() {
				if (this.stickySidebar._initialized) {
					/** `stickySidebar.updateSticky()` method has issue */
					// this.stickySidebar.updateSticky();
					this.stickySidebar.calcDimensions();
				}
			},
			destroy() {
				if (this.stickySidebar._initialized) {
					this.stickySidebar.destroy();
					this.stickySidebar._initialized = false;
					// console.log(this.stickySidebar);
				}
			}
		},
		mounted() {
			this.init();
		},
		updated() {
			// console.log('updated!');
			this.update();
		},
		beforeDestroy() {
			this.destroy();
		}
	};
</script>

<style>
	.vue-sticky-sidebar {
		will-change: min-height;
	}

	.vue-sticky-sidebar-inner {
		transform: translate3d(0, 0, 0);
		will-change: transform;
	}
</style>
