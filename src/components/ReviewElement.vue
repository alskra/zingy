<script>
	export default {
		name: 'ReviewElement'
	};
</script>

<style scoped>
	.ReviewElement {
		all: initial;

		& {
			display: block;
		}
	}

	.content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 400;
		line-height: 1.5;

		p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1.5em;
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
