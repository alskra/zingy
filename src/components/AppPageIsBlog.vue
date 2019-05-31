<script>
	import AppPage from './AppPage';
	import AppBreadcrumb from './AppBreadcrumb';
	import PageSidenav from './PageSidenav';
	import FeedbackSection from './FeedbackSection';

	export default {
		name: 'AppPageIsBlog',
		extends: AppPage,
		components: {
			AppBreadcrumb,
			PageSidenav,
			FeedbackSection
		},

	};
</script>

<style scoped src="./AppPage.vue">
</style>


<style scoped>
	.main {

	}
</style>
