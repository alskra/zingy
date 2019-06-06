<script>
	import AppPage from './components/AppPage';
	import VueSticky from './components/VueSticky';

	export default {
		name: 'App',
		components: {
			AppPage,
			VueSticky
		},
		watch: {
			'$store.state.locale': {
				handler(val) {
					this.$i18n.locale = val;
				}
			}
		}
	}
</script>
