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
		margin: var(--grid-row_margin);
	}

	.header-grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;

		&:nth-child(1) {
			flex-grow: 1;
			margin-bottom: range(0px, 10px);
		}

		&:nth-child(2),
		&:nth-child(3) {
			margin-top: auto;
			margin-bottom: auto;
		}

		&:nth-child(3) {
			flex: 1 1 0;
		}
	}

	.base-time.header-date{
		color: #999999;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 400;
		line-height: 1.25;
		cursor: default;
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
