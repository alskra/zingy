<script>
	import SocialMedia from './SocialMedia';

	export default {
		name: 'PageFooter',
		components: {
			SocialMedia
		}
	};
</script>

<style scoped>
	.page-footer {
		all: initial;
		display: block;
		padding: range(50, 100) 0;
		background-color: #222222;

		.social-media {
			margin: range(30, 60) 0;

			@media (width < 1024px) {
				margin: 0;

				>>> .row {
					justify-content: center;
				}
			}
		}
	}

	.container {
		padding: 0 range(10, 110);
		box-sizing: border-box;
		max-width: 1920px;
		margin: 0 auto;
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(calc(4.8rem / 1.5), 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 range(40, 80);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin: -10px;

		&-col {
			width: calc(25% - 20px);
			margin: 10px;

			@media (width < 1024px) {
				&:not(:first-child) {
					order: -1;
				}
			}

			@media (768px <= width < 1024px) {
				&:first-child {
					width: calc(100% - 20px);
				}

				&:not(:first-child) {
					width: calc(percentage(1 / 3) - 20px);
				}
			}

			@media (width < 768px) {
				width: calc(100% - 20px);
			}
		}
	}

	.contacts-row {
		@media (width < 1024px) {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin: -10px;
		}

		&-col {
			@media (width < 1024px) {
				margin: 10px;
				width: calc(percentage(1 / 3) - 20px);
			}

			@media (width < 768px) {
				width: calc(100% - 20px);
			}
		}
	}

	.content {
		color: #494848;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 300;
		line-height: 1.25;

		>>> p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1em;
			}
		}

		>>> a {
			outline: none;
			color: #ffffff;
			text-decoration: none;
			font-weight: 500;

			&:focus-visible {
				outline: 2px solid currentColor;
			}
		}

		@media (width < 768px) {
			text-align: center;
		}

		&-copyright {
			@media (768px <= width < 1024px) {
				text-align: right;
			}
		}
	}
</style>
