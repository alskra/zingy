<script>
	import AppPage from './AppPage';
	import QuoteSection from './QuoteSection';
	import PageSection from './PageSection';

	export default {
		name: 'AppPageIsIndex',
		extends: AppPage,
		components: {
			QuoteSection,
			PageSection
		}
	};
</script>

<style src="./AppPage.vue" scoped>
</style>
