<script>
	import AppPageHeader from './AppPageHeader';
	import AppPageFooter from './AppPageFooter';
	import VZingysection from './VZingysection';

	export default {
		name: 'AppPage',
		components: {
			AppPageHeader,
			AppPageFooter,
			VZingysection
		}
	};
</script>

<style scoped>
	.app-page {
		all: initial;

		& {
			display: block;
			overflow: hidden;
			padding-bottom: 100vh;
		}
	}

	.main {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;
		background-color: white;

		.app-page-footer {
			margin-top: auto;
		}
	}

	.backface {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
