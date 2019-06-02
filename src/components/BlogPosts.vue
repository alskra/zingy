<script>
	import PostCard from './PostCard';

	export default {
		name: 'BlogPosts',
		components: {
			PostCard
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
