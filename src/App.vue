<script>
	import AppPageIsIndex from './components/AppPageIsIndex';

	export default {
		name: 'App',
		components: {
			AppPageIsIndex
		},
		created() {
			if (window.navigator.userAgent.match(/Trident/i)) {
				document.documentElement.classList.add('is-ie');
			}
		}
	}
</script>

<style>
	/*@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700&subset=cyrillic,cyrillic-ext,latin-ext');*/

	@import "assets/fonts/Roboto/stylesheet.css";

	:root {
		// Overwrite browser dependent properties
		--quotes: "“" "”" "‘" "’";
		--font-family: Roboto, Arial, sans-serif;
		--text-align: left;
		--color: #0a0a0a;
		--outline-color: #000;

		--color-link: #e04b4a;
		--color-zingy: #252525;

		--content-box-width: env(--content-box-width);
		--content-box-gutter: range(10px, 40px);

		font-size: percentage(10 / 16);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:focus:not(:focus-visible) {
		outline: none;
	}

	:focus-visible {
		outline: 1px dotted currentColor;
		outline: 5px auto -webkit-focus-ring-color;
	}

	::selection {
		color: white;
		background-color: var(--color-link);
	}

	body {
		margin: 0;
		background-color: white;
	}

	template {
		display: none;
	}
</style>
