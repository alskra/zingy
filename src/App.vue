<script>
	import AppPage from './components/AppPage';

	export default {
		name: 'App',
		components: {
			AppPage
		},
		methods: {
			showModalFeedback() {
				this.$modal.show('feedback');
			}
		}
	}
</script>
