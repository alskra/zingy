<script>
	import ContentCarousel from './ContentCarousel';
	import ReviewElement from './ReviewElement';

	export default {
		name: 'ContentCarouselOfReviews',
		extends: ContentCarousel,
		components: {
			ReviewElement
		}
	};
</script>

<style scoped src="./ContentCarousel.vue"></style>

<style scoped>
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
		width: percentage(10 / 12);
		padding: 0 10px;
		margin: 0 auto;
		position: relative;

		@media (width < 768px) {
			width: 100%;
		}
	}

	.BaseIcon.background-quote {
		position: absolute;
		top: range(-10px, -20px);
		left: range(10px, -190px);
		width: range(376px / 2, 376px);
		height: auto;
		color: #f0f0f0;
		pointer-events: none;

		@media (width < 768px) {
			left: 10px;
		}
	}

	>>> .slick-list {
		margin: 0 -10px;
	}

	>>> .slick-slide {
		margin: 0 10px;
	}

	.ReviewElement {
		vertical-align: top;
	}
</style>
