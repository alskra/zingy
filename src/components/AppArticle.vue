<script>
	import AppShare from './AppShare';
	import AppGallery from './AppGallery';

	export default {
		name: 'AppArticle',
		components: {
			AppShare,
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

	.header-grid {
		display: flex;
		flex-wrap: wrap;
	}

	.header-grid-cell {
		&:nth-child(1) {
			flex-grow: 1;
			overflow: hidden;
			margin-bottom: range(20px, 30px);
		}

		&:nth-child(2),
		&:nth-child(3) {
			margin: auto 0;
		}

		&:nth-child(3) {
			margin-left: auto;
		}
	}

	.base-time.header-date{
		color: #999999;
		font-family: var(--font-family);
		font-size: rem(1.6rem, 1.8rem);
		font-weight: 400;
		line-height: 1.25;
	}

	.app-share.header-share {

	}

	.app-gallery.gallery {
		margin: range(20px, 40px) 0;
	}

	.footer {
		margin-top: range(30px, 60px);
		padding: range(15px, 30px);
		background-color: #f0f0f0;
	}
</style>
