<script>
	export default {
		name: 'QuoteSection'
	};
</script>

<style scoped>
	.quote-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			padding: range(30px, 60px) 0;
			flex-direction: column;
			background-color: white;
		}
	}

	.content-box {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}

	.subject {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.3rem);
		font-weight: 400;
		line-height: 1.25;
		text-transform: uppercase;
		border-left: 2px solid #e81818;
		padding: 2px 10px;
		margin: 0 0 range(40px / 1.5, 40px);
	}

	.content-grid {
		margin: 0 -10px;
	}

	.content-grid-item {
		box-sizing: border-box;
		padding: 0 10px;
		margin: 0 auto;

		@media (width >= 768px) {
			width: percentage(10 / 12);
		}
	}

	.quote {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(4.8rem / 2.2, 4.8rem);
		font-weight: 400;

		>>> > p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 0.5em;
			}
		}
	}

	.cite {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		line-height: 1.25;
		margin: range(40px / 1.5, 40px) 0 0;
	}

	.cite-name,
	.cite-description {
		display: block;
	}
</style>
