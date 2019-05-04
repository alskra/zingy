<script>
	export default {
		name: 'FooterPage'
	};
</script>

<style scoped>
	.footer-page {
		all: initial;
		display: block;
		padding: range(50, 150) 0;
		background-color: #222222;
	}

	.container {
		padding: 0 range(10, 110);
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(calc(4.8rem / 1.5), 4.8rem);
		font-weight: 500;
		line-height: 1.25;
	}

	.row {
		display: flex;

		&-col {
			box-sizing: border-box;
			width: 25%;
			flex-shrink: 0;
		}
	}

	.contacts {
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
	}
</style>
