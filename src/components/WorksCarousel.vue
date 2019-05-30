<script>
	import VueSwiper from './VueSwiper';

	export default {
		name: 'WorksCarousel',
		extends: VueSwiper,
		data() {
			return {
				defaultOptions: {
					pagination: {
						type: 'fraction'
					}
				}
			};
		}
	};
</script>

<style scoped>
	.works-carousel {
		all: initial;
	}
</style>
