<script>
	import AppPageIsIndex from './components/AppPageIsIndex';
	import AppPageIsBlog from './components/AppPageIsBlog';
	import VueStickScroll from './components/VueStickScroll';

	export default {
		name: 'App',
		components: {
			AppPageIsIndex,
			AppPageIsBlog,
			VueStickScroll
		}
	}
</script>

<style scoped>
	.stick-container {
		border: 2px solid green;
		width: 1024px;
		max-width: 100%;
		margin: 150vh auto;
		padding: 30px;
		position: relative;
		box-sizing: border-box;
	}

	.box {
		height: 50vh;
		border: 2px dashed black;
		background-color: white;

		&:last-of-type {
			border-color: blue;
		}
	}


</style>
