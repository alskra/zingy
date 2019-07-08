<script>
	import FeedbackForm from './FeedbackForm';

	export default {
		name: 'FeedbackSection',
		components: {
			FeedbackForm
		}
	};
</script>

<style scoped>
	.feedback-section {
		all: initial;

		& {
			display: block;
			padding: range(30px, 60px) 0;
			background-color: white;
			position: relative;
			min-height: range(504px / 2, 504px);
			overflow: hidden;
		}
	}

	.base-icon.bg-icon {
		width: range(504px / 2, 504px);
		height: range(504px / 2, 504px);
		color: #f0f0f0;
		position: absolute;
		top: range(80px / 2, 80px);
		left: 50%;
		margin-left: range(10px, 213px);
		pointer-events: none;
	}

	.grid {
		position: relative;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}

	.grid-row {
		margin: 0 var(--grid-row_margin);
	}

	.grid-cell {
		box-sizing: border-box;
		margin: 0 auto;
		padding: 0 var(--grid-cell_padding);

		@media (width >= 1024px) {
			width: percentage(10 / 12);
		}
	}

	.title {
		margin: range(0px, 80px) 0 range(40px / 2, 40px);
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;
	}

	.content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.25;

		>>> a {
			color: var(--color-link);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.content-is-description {
		font-size: range(1.6rem, 1.8rem);
		margin-bottom: range(70px / 2, 70px);
	}
</style>
