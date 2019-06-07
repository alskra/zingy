<template lang="pug">
	.vue-swiper
		.swiper-container(ref="swiperContainer")
			.swiper-wrapper
				slot
					.swiper-slide Slide 1
					.swiper-slide Slide 2
					.swiper-slide Slide 3

		button.nav-button.nav-button-is-prev(
			type="button"
			:disabled="isBeginning"
			@click="slidePrev"
		) navButtonIsPrev

		button.nav-button.nav-button-is-next(
			type="button"
			:disabled="isEnd"
			@click="slideNext"
		) navButtonIsNext

		.pagination(ref="pagination")
</template>

<script>
	import 'swiper/dist/css/swiper.css';
	import {Swiper, Navigation, Pagination, Scrollbar} from 'swiper/dist/js/swiper.esm.js';
	import merge from 'lodash-es/merge';

	Swiper.use([Navigation, Pagination, Scrollbar]);

	const debug = false;

	export default {
		name: 'VueSwiper',
		props: {
			options: {
				type: Object,
				default: null
			}
		},
		data() {
			return {
				defaultOptions: {
					pagination: {
						clickable: true
					},
					preventInteractionOnTransition: false
				},
				isBeginning: true,
				isEnd: false
			};
		},
		watch: {
			options() {
				this.reInit();
			}
		},
		methods: {
			reInit() {
				this.$nextTick(function () {
					if (this.swiper) this.swiper.destroy();

					this.swiper = new Swiper(
						this.$refs.swiperContainer,
						merge(
							this.defaultOptions,
							{
								pagination: {
									el: this.$refs.pagination
								}
							},
							this.options,
							{
								init: false
							}
						)
					);

					this.swiper.on('init', () => {
						this.$emit('init', this.swiper);
					});

					this.swiper.on('slideChange', () => {
						// this.isBeginning = this.swiper.isBeginning;
						// this.isEnd = this.swiper.isEnd;
						this.$emit('slide-change', this.swiper);
					});

					this.swiper.on('reachBeginning', () => {
						this.isBeginning = true;
					});

					this.swiper.on('reachEnd', () => {
						this.isEnd = true;
					});

					this.swiper.on('fromEdge', () => {
						this.isBeginning = this.swiper.isBeginning;
						this.isEnd = this.swiper.isEnd;
					});

					this.swiper.init();
				});
			},
			slidePrev() {
				this.swiper.slidePrev();
			},
			slideNext() {
				this.swiper.slideNext()
			}
		},
		beforeCreate() {
			// eslint-disable-next-line no-console
			if (process.env.NODE_ENV !== 'production' && debug) console.log('VueSwiper beforeCreate', this);
		},
		mounted() {
			// eslint-disable-next-line no-console
			if (process.env.NODE_ENV !== 'production' && debug) console.log('VueSwiper mounted', this);

			this.reInit();
		},
		updated() {
			// this.swiper.update();
			this.swiper.updateSize();
			this.swiper.updateSlides();
			this.swiper.updateProgress();
			this.swiper.updateSlidesClasses();
		},
		beforeDestroy() {
			this.swiper.destroy();
		},
		destroyed() {
			// eslint-disable-next-line no-console
			if (process.env.NODE_ENV !== 'production' && debug) console.log('VueSwiper destroyed', this);
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
