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

		& {
			display: block;
			padding: range(50, 100) 0;
			background-color: #222222;
		}
	}

	.container {
		padding: 0 range(10, 110);
		box-sizing: border-box;
		max-width: 1920px;
		margin: 0 auto;

		> .row {
			display: flex;
			flex-wrap: wrap;
			margin: 15px -10px;
		}

		> .row > .col {
			width: calc(25% - 20px);
			margin: 15px 10px;

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

		> .row > .col:nth-child(1) > .row {
			@media (width < 1024px) {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				margin: -15px -10px;
			}
		}

		> .row > .col:nth-child(1) > .row > .col {
			@media (width >= 1024px) {
				&:nth-child(2) {
					margin: range(30, 60) 0;
				}
			}

			@media (width < 1024px) {
				margin: 15px 10px;
				width: calc(percentage(1 / 3) - 20px);
			}

			@media (width < 768px) {
				width: calc(100% - 20px);
			}
		}
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(calc(4.8rem / 1.5), 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 range(30, 60);
	}

	.content {
		color: #494848;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 300;
		line-height: 1.25;

		@media (width < 768px) {
			text-align: center;
		}

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

		&.-copyright {
			@media (768px <= width < 1024px) {
				text-align: right;
			}
		}
	}
</style>
