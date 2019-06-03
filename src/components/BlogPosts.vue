<script>
	import PostsItem from './PostsItem';

	export default {
		name: 'BlogPosts',
		components: {
			PostsItem
		}
	};
</script>

<style></style>

<style scoped>
	.blog-posts {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}
	}

	.grid {
		margin: var(--grid-row_margin);
		display: flex;
		flex-wrap: wrap;
	}

	.grid-cell {
		margin: var(--grid-cell_padding);
		width: calc(percentage(1 / 3) - 2 * var(--grid-cell_padding));
		flex-shrink: 0;
	}
</style>
