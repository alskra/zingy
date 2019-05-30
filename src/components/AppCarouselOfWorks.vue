<script>
	import AppCarousel from './AppCarousel';
	import WorksItem from './WorksItem';

	export default {
		name: 'AppCarouselOfWorks',
		extends: AppCarousel,
		components: {
			WorksItem
		},
		data() {
			return {
				defaultOptions: {
					slidesPerView: 'auto'
				}
			}
		}
	};
</script>

<style scoped src="./AppCarousel.vue">
</style>

<style scoped>
	.main {
		width: calc(100% - 2 * var(--grid-padding));
		margin: 0 auto;
	}

	.swiper-container {
		margin: 0 calc(-1 * var(--grid-padding));
		padding: 0 range(0px, 20px);
	}

	.swiper-slide {
		width: range(300px, 695px);
		margin: 0 range(10px, 20px);
	}
</style>
