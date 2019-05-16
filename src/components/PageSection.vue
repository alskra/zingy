<script>
	export default {
		name: 'PageSection'
	};
</script>

<style scoped>
	.PageSection {
		all: initial;

		& {
			display: block;
			padding: range(40px, 80px) 0;
		}
	}

	.header {
		margin-bottom: range(25px, 50px);
	}

	.content-box {
		box-sizing: border-box;
		width: 100%;
		max-width: var(--content-box-width);
		padding: 0 var(--content-box-gutter);
		margin: 0 auto;
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

	.title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(4.8rem / 1.5, 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0;
	}
</style>
