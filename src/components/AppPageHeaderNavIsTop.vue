<script>
	import AppPageHeaderNav from './AppPageHeaderNav';

	export default {
		name: 'AppPageHeaderNavIsTop',
		extends: AppPageHeaderNav
	};
</script>

<style src="./AppPageHeaderNav.vue" scoped>
</style>

<style scoped>
	.AppPageHeaderNavIsTop {
		box-sizing: border-box;
		max-width: 60vw;
		height: range(40px, 58px);
		background-color: #f0f0f0;
		padding: 0 range(0px, 20px);
	}

	.l-grid {
		height: 100%;
	}
</style>
