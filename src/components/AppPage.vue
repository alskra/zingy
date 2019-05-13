<script>
	import AppPageHeader from './AppPageHeader';
	import AppPageFooter from './AppPageFooter';
	import ZingySection from './ZingySection';

	const AppPage = {
		name: 'AppPage',
		components: {
			AppPageHeader,
			AppPageFooter,
			ZingySection
		}
	};

	export default AppPage;

	export const AppPageIsIndex = {
		name: 'AppPageIsIndex',
		extends: AppPage
	};
</script>

<style scoped>
	.AppPage {
		all: initial;

		& {
			display: block;
			overflow: hidden;
			padding-bottom: 100vh;
		}
	}

	.front-layout {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;
		background-color: white;

		.AppPageFooter {
			margin-top: auto;
		}
	}

	.back-layout {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
