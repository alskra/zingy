<template lang="pug">
	.vue-swiper
		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				slot
					.swiper-slide Slide 1
					.swiper-slide Slide 2
					.swiper-slide Slide 3

		//- button.nav-button.nav-button-is-prev(
		//- 	type="button"
		//- 	:disabled="swiper.isBeginning"
		//- 	@click="swiper.slidePrev()"
		//- ) navButtonIsPrev

		//- button.nav-button.nav-button-is-next(
		//- 	type="button"
		//- 	:disabled="swiper.isEnd"
		//- 	@click="swiper.slideNext()"
		//- ) navButtonIsNext

		//- .pagination(ref="pagination")
</template>

<script>
	import 'swiper/dist/css/swiper.css';

	import {
		Swiper,
		Navigation,
		Pagination,
		Scrollbar,
		Lazy,
		Controller,
		Keyboard,
		Zoom,
		Mousewheel
	} from 'swiper/dist/js/swiper.esm.js';

	import merge from 'lodash-es/merge';

	Swiper.use([
		Navigation,
		Pagination,
		Scrollbar,
		Lazy,
		Controller,
		Keyboard,
		Zoom,
		Mousewheel
	]);

	export default {
		name: 'VueSwiper',
		props: {
			options: {
				type: Object
			}
		},
		data() {
			return {
				defaultOptions: {
					init: true
				},
				swiper: {}
			};
		},
		watch: {
			options: {
				handler() {
					this.destroy();
					this.init();
				},
				deep: true
			}
		},
		methods: {
			init() {
				const resolvedOptions = merge(
					this.defaultOptions,
					{
						pagination: {
							el: this.$refs.pagination
						}
					},
					this.options
				);

				if (resolvedOptions.init) {
					// Create Swiper
					this.swiper = new Swiper(
						this.$refs.swiperContainer,
						merge(
							resolvedOptions,
							{init: false}
						)
					);

					// Add listeners
					this.swiper.on('init', () => {
						this.$emit('init', this.swiper);

						setTimeout(() => {
							this.update();
						}, 50);
					});

					this.swiper.on('slideChange', () => this.$emit('slide-change', this.swiper));
					this.swiper.on('reachBeginning', () => this.$emit('reach-beginning', this.swiper));
					this.swiper.on('reachEnd', () => this.$emit('reach-end', this.swiper));
					this.swiper.on('fromEdge', () => this.$emit('from-edge', this.swiper));

					// Init Swiper
					this.swiper.init(); // set `initialized` true
					// console.log(this.swiper);
					// console.log(this.swiper.initialized);
					// console.log(this.swiper.destroyed);
				}
			},
			update() {
				if (this.swiper.initialized) {
					// `swiper.update()` method has issue
					// this.swiper.update();
					this.swiper.updateSize();
					this.swiper.updateSlides();
					this.swiper.updateProgress();
					this.swiper.updateSlidesClasses();
				}
			},
			destroy() {
				if (this.swiper.initialized) {
					this.swiper.destroy(true, true); // set `destroyed` true
					// console.log(this.swiper);
					// console.log(this.swiper.initialized);
					// console.log(this.swiper.destroyed);
				}
			}
		},
		mounted() {
			this.init();
		},
		updated() {
			this.update();
		},
		beforeDestroy() {
			this.destroy();
		}
	};
</script>

<style>
	.swiper-container {
		user-select: none;
	}

	.swiper-pagination-fraction {
		bottom: auto;
		left: auto;
		width: auto;
	}
</style>
