<script>
	import AppPage from './AppPage';
	import AppBreadcrumb from './AppBreadcrumb';
	import AppPageStickyContainer from './AppPageStickyContainer';
	import SideNav from './SideNav';
	import FeedbackSection from './FeedbackSection';

	export default {
		name: 'AppPageIsBlog',
		extends: AppPage,
		components: {
			AppBreadcrumb,
			AppPageStickyContainer,
			SideNav,
			FeedbackSection
		},
		created() {
			document.documentElement.classList.add('is-theme-dark');
		}
	};
</script>

<style src="./AppPage.vue"></style>

<style scoped src="./AppPage.vue"></style>
