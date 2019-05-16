<script>
	import PageSection from './PageSection';
	import ReviewsList from './ReviewsList';

	export default {
		name: 'PageSectionIsReviews',
		extends: PageSection,
		components: {
			ReviewsList
		}
	};
</script>

<style src="./PageSection.vue" scoped></style>
