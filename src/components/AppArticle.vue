<script>
	import AppShare from './AppShare';
	import AppGallery from './AppGallery';
	import LikeButton from './LikeButton';

	export default {
		name: 'AppArticle',
		components: {
			AppShare,
			AppGallery,
			LikeButton
		},
		data() {
			return {
				headerTitleHasBg: true
			};
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
		margin-bottom: range(30px, 45px);
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
			margin-bottom: range(0px, 10px);
			flex: 0 0 100%;
		}

		&:nth-child(2) {
			flex: 0 0 auto;
		}

		&:nth-child(3) {
			flex: 1 0 0;
			display: flex;
		}

		&:nth-child(2),
		&:nth-child(3) {
			margin-top: auto;
			margin-bottom: auto;
		}
	}

	.header-title-box-has-bg {
		position: relative;
		display: flex;
		flex-flow: column;
		box-sizing: border-box;
		padding: calc(2 * var(--grid-cell_padding));
		height: 100%;
		min-height: 260px;
		background: none no-repeat 50% 50% / cover;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			pointer-events: none;
		}

		.header-title {
			position: relative;
			margin: auto 0;
			color: #ffffff;
			text-align: center;
		}

		@media (width < 1024px) {
			margin-right: calc(-1 * var(--grid_padding));
			margin-left: calc(-1 * var(--grid_padding));
			padding-right: var(--grid_padding);
			padding-left: var(--grid_padding);
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
		margin-left: auto;
		min-width: 0;
	}

	.app-gallery.gallery {
		margin: range(20px, 40px) 0;
	}

	.footer {
		margin-top: range(30px, 45px);
		padding: scale-down(calc(2 * var(--grid-cell_padding)), 0.5) calc(2 * var(--grid-cell_padding));
		background-color: #f0f0f0;

		@media (width < 1024px) {
			margin-right: calc(-1 * var(--grid_padding));
			margin-left: calc(-1 * var(--grid_padding));
			padding-right: var(--grid_padding);
			padding-left: var(--grid_padding);
		}
	}

	.footer-grid {
		margin: var(--grid-row_margin);
		display: flex;
	}

	.footer-grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;

		&:nth-child(2) {
			margin: auto 0 auto auto;
			flex: 0 0 auto;
		}
	}

	.like-button.footer-like-button {

	}
</style>
