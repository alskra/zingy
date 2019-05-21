<script>
	import AppPageHeader from './AppPageHeader';
	import AppPageFooter from './AppPageFooter';
	import ZingySection from './ZingySection';

	export default {
		name: 'AppPage',
		components: {
			AppPageHeader,
			AppPageFooter,
			ZingySection
		}
	};
</script>

<style scoped>
	.app-page {
		display: block;
		overflow: hidden;
		min-width: env(--min-breakpoint);
		content: env(--grid-width);
	}

	.body {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;

		:root:not(.is-ie) & {
			margin-bottom: var(--ZingySection_height);
		}
	}

	.main {
		flex: 1 0 auto;
		padding: range(60px, 138px) 0 0;
		background-color: white;
	}
</style>
