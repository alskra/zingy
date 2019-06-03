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
		/*max-width: calc(300px * 3 + var(--grid-cell_padding) * 2 * 2);*/
		/*margin: 0 auto;*/

		/*@media (width < 768px) {*/
		/*	max-width: calc(300px * 2 + var(--grid-cell_padding) * 2 * 1);*/
		/*}*/

		/*@media (width < 560px) {*/
		/*	max-width: 100%;*/
		/*}*/
	}

	.grid-row {
		margin: var(--grid-row_margin);
		display: flex;
		flex-wrap: wrap;
	}

	.grid-cell {
		margin: var(--grid-cell_padding);
		width: calc(percentage(1 / 3) - var(--grid-cell_padding) * 2);
		flex-shrink: 0;

		@media (width < 768px) {
			width: calc(percentage(1 / 2) - var(--grid-cell_padding) * 2);
		}

		@media (width < 560px) {
			width: calc(percentage(1 / 1) - var(--grid-cell_padding) * 2);
		}
	}

	.grid-cell-is-large {
		@media (width >= 768px) {
			width: calc(percentage(2 / 3) - var(--grid-cell_padding) * 2);
		}
	}

	.posts-item.post {
		height: 100%;
	}
</style>
