<script>
	import AppHeaderNav from './AppHeaderNav';

	export default {
		name: 'AppHeaderNavIsTop',
		extends: AppHeaderNav
	};
</script>

<style scoped src="./AppHeaderNav.vue">
</style>

<style scoped>
	.app-header-nav-is-top {
		box-sizing: border-box;
		max-width: 50vw;
		height: range(44px, 58px);
		background-color: #f0f0f0;
		padding: 0 range(0px, 20px);
	}

	.grid {
		height: 100%;
	}
</style>
