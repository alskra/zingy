<script>
	import AppCarouselOfWorks from './AppCarouselOfWorks';
	import AppCarouselOfReviews from './AppCarouselOfReviews';

	export default {
		name: 'PageSection',
		components: {
			AppCarouselOfWorks,
			AppCarouselOfReviews
		}
	};
</script>

<style scoped>
	.page-section {
		all: initial;

		& {
			display: block;
			padding: range(30px, 60px) 0;
			background-color: white;
		}
	}

	.header {
		margin-bottom: range(20px, 30px);
	}

	.content-box {
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		margin: 0 auto;
	}

	.content-grid {
		margin: 0 -10px;
	}

	.content-grid-item {
		box-sizing: border-box;
		padding: 0 10px;
		margin: 0 auto;

		@media (width >= 768px) {
			width: percentage(10 / 12);
		}
	}

	.title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;
		margin: 0;
	}
</style>
