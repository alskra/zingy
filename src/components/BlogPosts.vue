<script>
	import PostsItem from './PostsItem';

	export default {
		name: 'BlogPosts',
		components: {
			PostsItem
		}
	};
</script>

<style scoped>
	.blog-posts {
		all: initial;

		& {
			display: block;
		}
	}

	.grid {
		display: flex;
		flex-flow: column;
	}

	.grid-row {
		margin: var(--grid-row_margin);
		display: flex;
		flex-wrap: wrap;
	}

	.grid-cell {
		margin: var(--grid-cell_padding);
		width: calc(percentage(1 / 3) - 2 * var(--grid-cell_padding));
		flex-shrink: 0;

		@media (width < 768px) {
			width: calc(percentage(1 / 2) - 2 * var(--grid-cell_padding));
		}

		@media (width < 560px) {
			width: calc(percentage(1 / 1) - 2 * var(--grid-cell_padding));
		}
	}

	.grid-cell-is-large {
		@media (width >= 768px) {
			width: calc(percentage(2 / 3) - 2 * var(--grid-cell_padding));
		}
	}

	.posts-item.post {
		height: 100%;
	}
</style>
