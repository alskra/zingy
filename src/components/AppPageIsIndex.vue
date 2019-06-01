<script>
	import AppPage from './AppPage';
	import IntroSection from './IntroSection';
	import QuoteSection from './QuoteSection';
	import ServiceSection from './ServiceSection';
	import WorkSection from './WorkSection';
	import PageSection from './PageSection';
	import PageSectionIsServices from './PageSectionIsServices';
	import FeedbackSection from './FeedbackSection';

	export default {
		name: 'AppPageIsIndex',
		extends: AppPage,
		components: {
			IntroSection,
			QuoteSection,
			ServiceSection,
			WorkSection,
			PageSection,
			PageSectionIsServices,
			FeedbackSection
		}
	};
</script>

<style src="./AppPage.vue"></style>

<style scoped src="./AppPage.vue"></style>
