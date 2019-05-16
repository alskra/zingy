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
			min-width: env(--min-breakpoint);
			padding-bottom: 100vh;

			.is-ie & {
				padding-bottom: 0;
			}
		}
	}

	.l-front-box {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;
	}

	.l-main-box {
		flex-grow: 1;
		padding: range(60px, 138px) 0 0;
		background-color: white;
	}

	.l-back-box {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		.is-ie & {
			position: relative;
			height: 100vh;
		}
	}
</style>
