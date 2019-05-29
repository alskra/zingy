<script>
	import ContentCarousel from './ContentCarousel';
	import WorksItem from './WorksItem';

	export default {
		name: 'ContentCarouselOfWorks',
		extends: ContentCarousel,
		components: {
			WorksItem
		}
	};
</script>

<style scoped src="./ContentCarousel.vue"></style>

<style scoped>
	.swiper-container {
		padding: 0 range(0px, 20px);
	}

	.swiper-slide {
		width: range(300px, 695px);
		padding: 0 range(10px, 20px);
	}

	.swiper-pagination-box {
		width: calc(100% - 2 * range(10px, 20px));
	}

	.swiper-pagination-grid {
		margin: 0 calc(-1 * var(--grid-cell-padding));
	}

	.swiper-pagination-cell {
		box-sizing: border-box;
		width: percentage(10 / 12);
		padding: 0 var(--grid-cell-padding);
		margin: 0 auto;

		@media (width < 768px) {
			width: 100%;
		}
	}
</style>
