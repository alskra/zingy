<script>
	import PageHeaderNav from './PageHeaderNav';

	export default {
		name: 'PageHeaderNavIsTop',
		extends: PageHeaderNav
	};
</script>

<style scoped src="./PageHeaderNav.vue">
</style>

<style scoped>
	.page-header-nav-is-top {
		box-sizing: border-box;
		max-width: 50vw;
		height: range(40px, 58px);
		background-color: #f0f0f0;
		padding: 0 range(0px, 20px);
	}

	.grid {
		height: 100%;
	}
</style>
