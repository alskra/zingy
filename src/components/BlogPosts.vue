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

</style>
