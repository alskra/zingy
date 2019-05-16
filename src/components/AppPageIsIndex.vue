<script>
	import AppPage from './AppPage';
	import QuoteSection from './QuoteSection';
	import PageSectionIsReviews from './PageSectionIsReviews';

	export default {
		name: 'AppPageIsIndex',
		extends: AppPage,
		components: {
			QuoteSection,
			PageSectionIsReviews
		}
	};
</script>

<style src="./AppPage.vue" scoped>
</style>
