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
	.AppPage {
		all: initial;

		& {
			display: block;
			overflow: hidden;
			padding-bottom: 100vh;
		}
	}

	.l-front-layer {
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

	.l-back-layer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
