<script>
	import PageHeader from './PageHeader';
	import PageFooter from './PageFooter';
	import ZingySection from './ZingySection';

	export default {
		name: 'AppPage',
		components: {
			PageHeader,
			PageFooter,
			ZingySection
		}
	};
</script>

<style scoped>
	.app-page {
		display: block;
		overflow: hidden;
		min-width: env(--min-breakpoint);
	}

	.body {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;

		:root:not(.is-browser-ie) & {
			margin-bottom: var(--zingy-section_height);
		}
	}

	.main {
		flex: 1 0 auto;
		padding: range(60px, 138px) 0 0;
		background-color: white;
	}
</style>
