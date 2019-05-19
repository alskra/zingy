<script>
	import PageSection from './PageSection';
	import ContentCarouselOfReviews from './ContentCarouselOfReviews';

	export default {
		name: 'PageSectionIsReviews',
		extends: PageSection,
		components: {
			ContentCarouselOfReviews
		}
	};
</script>

<style src="./PageSection.vue" scoped></style>
