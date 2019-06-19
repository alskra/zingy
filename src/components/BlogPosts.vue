<script>
	import PostsItem from './PostsItem';
	import AppPagination from './AppPagination';

	export default {
		name: 'BlogPosts',
		components: {
			PostsItem,
			AppPagination
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

		>>> .link {
			transition: box-shadow;
			transition-duration: 0.2s;
			transition-delay: 0.1s;
		}

		&:hover {
			>>> .link {
				box-shadow: 0 0 5px rgba(#000000, 0.7);
			}
		}
	}

	.app-pagination.pagination {
		@media (width < 1440px) {
			margin-top: range(20px, 40px);
		}
	}
</style>
