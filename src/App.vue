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
		--color: #000;
		--outline-color: #000;

		--color-link: #e04b4a;
		--color-zingy: #252525;

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
		background-color: #e04b4a;
	}

	body {
		margin: 0;
		background-color: white;
	}

	template {
		display: none;
	}
</style>
