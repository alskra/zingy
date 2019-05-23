<script>
	import ContentCarouselOfWorks from './ContentCarouselOfWorks';
	import ContentCarouselOfReviews from './ContentCarouselOfReviews';

	export default {
		name: 'PageSection',
		components: {
			ContentCarouselOfWorks,
			ContentCarouselOfReviews
		}
	};
</script>

<style scoped>
	.PageSection {
		all: initial;

		& {
			display: block;
			padding: range(40px, 80px) 0;
		}
	}

	.header {
		margin-bottom: range(25px, 50px);
	}

	.content-box {
		width: calc(100% - 2 * var(--content-box-gutter));
		max-width: var(--content-box-width);
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
		font-size: range(4.8rem / 1.5, 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0;
	}
</style>
