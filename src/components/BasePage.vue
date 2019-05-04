<script>
	import FooterPage from './FooterPage';
	import AboutZingy from './AboutZingy';

	export default {
		name: 'BasePage',
		components: {
			FooterPage,
			AboutZingy
		}
	};
</script>

<style scoped>
	:focus:not(:focus-visible) {
		outline-style: none;
	}

	.base-page {
		all: initial;
		display: block;
		overflow: hidden;
		padding-bottom: 100vh;

		.footer-page {
			margin-top: auto;
		}
	}

	.front-layout {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;
	}

	.back-layout {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
