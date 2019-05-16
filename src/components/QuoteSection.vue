<script>
	export default {
		name: 'QuoteSection'
	};
</script>

<style scoped>
	.QuoteSection {
		all: initial;

		& {
			display: block;
			padding: range(40px, 80px) 0;
		}
	}

	.content-box {
		box-sizing: border-box;
		width: 100%;
		max-width: var(--content-box-width);
		margin: 0 auto;
		padding: 0 var(--content-box-gutter);
	}

	.subject {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.3rem);
		font-weight: 400;
		line-height: 1.25;
		text-transform: uppercase;
		border-left: 2px solid #e81818;
		padding: 3px 10px 2px;
		margin: 0 0 range(40px / 1.5, 40px);
	}

	.content-grid {
		margin: 0 -10px;
	}

	.content-grid-item {
		box-sizing: border-box;
		width: percentage(10 / 12);
		padding: 0 10px;
		margin: 0 auto;
	}

	.quote {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(4.8rem / 1.5, 4.8rem);
		font-weight: 400;

		>>> > p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 0.5em;
			}
		}
	}

	.cite {
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		line-height: 1.25;
		margin-top: range(40px / 1.5, 40px);
	}

	.cite-name {
		margin: 0;
		font-weight: 500;
	}

	.cite-description {
		margin: 0;
	}
</style>
