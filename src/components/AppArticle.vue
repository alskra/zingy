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

	.app-gallery.gallery {
		margin: range(20px, 40px) 0;
	}

	.footer {
		margin-top: range(30px, 60px);
	}
</style>
