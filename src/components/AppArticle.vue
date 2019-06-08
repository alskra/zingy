<script>
	import AppGallery from './AppGallery';

	export default {
		name: 'AppArticle',
		components: {
			AppGallery
		}
	};
</script>

<style scoped>
	.app-article {
		all: initial;

		& {
			display: block;
		}
	}

	.header {
		margin-bottom: range(30px, 60px);
	}

	.footer {
		margin-top: range(30px, 60px);
	}
</style>
