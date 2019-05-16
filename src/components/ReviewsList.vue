<script>
	import ReviewBlock from './ReviewBlock';

	export default {
		name: 'ReviewsList',
		components: {
			ReviewBlock
		}
	};
</script>

<style scoped>
	.ReviewsList {
		all: initial;

		& {
			display: block;
		}
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
</style>
