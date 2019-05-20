<script>
	import AppPage from './AppPage';
	import QuoteSection from './QuoteSection';
	import PageSection from './PageSection';
	import PageSectionIsServices from './PageSectionIsServices';

	export default {
		name: 'AppPageIsIndex',
		extends: AppPage,
		components: {
			QuoteSection,
			PageSection,
			PageSectionIsServices
		}
	};
</script>

<style src="./AppPage.vue" scoped>
</style>
