<script>
	import AppPageIsIndex from './components/AppPageIsIndex';
	// import AppPageIsBlog from './components/AppPageIsBlog';
	import VueSticky from './components/VueSticky';

	export default {
		name: 'App',
		components: {
			AppPageIsIndex,
			AppPageIsBlog: () => import('./components/AppPageIsBlog'),
			AppPageIsDefault: () => import('./components/AppPageIsDefault'),
			VueSticky
		}
	}
</script>
