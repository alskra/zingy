<script>
	import AboutZingy from './components/AboutZingy';

	export default {
		name: 'App',
		components: {
			AboutZingy
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700&subset=cyrillic,cyrillic-ext,latin-ext');

	:root {
		--vw: 100vw;

		// Overwrite browser dependent properties
		--quotes: "“" "”" "‘" "’";
		--font-family: Roboto, Arial, sans-serif;
		--text-align: left;
		--color: #000;
		--outline-color: #000;

		font-size: percentage(10 / 16);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		@media (width > env(--vw-max)) {
			--vw: env(--vw-max);
		}

		@media (width < env(--vw-min)) {
			--vw: env(--vw-min);
		}

		&::before {
			content: '';
			position: fixed;
			z-index: 99999;
			top: 0;
			bottom: 0;
			left: 50%;
			border-left: 1px solid red;
			pointer-events: none;
		}
	}

	body {
		margin: 0;
	}
</style>
