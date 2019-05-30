<script>
	import AppPage from './AppPage';
	import AppBreadcrumb from './AppBreadcrumb';
	import VueSticky from './VueSticky';
	import PageSidenav from './PageSidenav';
	import FeedbackSection from './FeedbackSection';

	export default {
		name: 'AppPageIsBlog',
		extends: AppPage,
		components: {
			AppBreadcrumb,
			VueSticky,
			PageSidenav,
			FeedbackSection
		},
		computed: {
			asideStickyTop() {
				if (this.windowWidth >= 1024) {
					const top = 60 + (108 - 60) / 1600 * (this.windowWidth - 320);

					if (top > 108) return 108;
					if (top < 60) return 60;

					return top;
				}

				return false;
			}
		},
	};
</script>

<style scoped src="./AppPage.vue">
</style>


<style scoped>
	.main {

	}
</style>
