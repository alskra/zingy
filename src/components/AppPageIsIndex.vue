<script>
	import AppPage from './AppPage';
	import QuoteSection from './QuoteSection';
	import WorkSection from './WorkSection';
	import PageSection from './PageSection';
	import PageSectionIsServices from './PageSectionIsServices';
	import FeedbackSection from './FeedbackSection';

	export default {
		name: 'AppPageIsIndex',
		extends: AppPage,
		components: {
			QuoteSection,
			WorkSection,
			PageSection,
			PageSectionIsServices,
			FeedbackSection
		}
	};
</script>

<style scoped src="./AppPage.vue">
</style>
