<script>
	import {AppPageIsIndex} from './components/AppPage';

	export default {
		name: 'App',
		components: {
			AppPageIsIndex
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

		font-size: percentage(10 / 16);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

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

	:focus:not(:focus-visible) {
		outline: none;
	}

	:focus-visible {
		outline: 1px dotted currentColor;
		outline: 5px auto -webkit-focus-ring-color;
	}

	body {
		margin: 0;
		background-color: white;
	}
</style>
