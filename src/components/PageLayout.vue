<script>
	import PageFooter from './PageFooter';
	import ZingyDefinition from './ZingyDefinition';

	export default {
		name: 'PageLayout',
		components: {
			PageFooter,
			ZingyDefinition
		}
	};
</script>

<style scoped>
	.page-layout {
		all: initial;
		display: block;
		overflow: hidden;
		padding-bottom: 100vh;
		background-color: white;

		.page-footer {
			margin-top: auto;
		}
	}

	.front-layout {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;
		background-color: white;
	}

	.back-layout {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
