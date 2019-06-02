<script>
	export default {
		name: 'PostsItem',
		created() {
			// this.$moment.locale('ru');
		}
	};
</script>

<style></style>

<style scoped>
	.posts-item {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}
	}

	.body {
		display: flex;
		flex-flow: column;
		height: 100%;
	}

	.header {
		position: relative;
		overflow: hidden;
		flex-shrink: 0;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(260 / 293);
		}
	}

	.img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;

		&.v-lazy-image {
			filter: blur(10px);
			transition: filter 0.5s;
			will-change: filter;
		}
		&.v-lazy-image-loaded {
			filter: blur(0);
		}
	}

	.main {
		flex-grow: 1;
	}
</style>
