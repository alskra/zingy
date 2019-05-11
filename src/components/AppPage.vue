<script>
	import AppPageHeader from './AppPageHeader';
	import AppPageFooter from './AppPageFooter';
	import VZingysection from './VZingysection';

	export default {
		name: 'AppPage',
		components: {
			AppPageHeader,
			AppPageFooter,
			VZingysection
		},
		created() {
			// console.log(this);
		}
	};
</script>

<style src="./AppPage.pcss" lang="postcss" scoped></style>
