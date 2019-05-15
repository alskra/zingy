<script>
	import AppPageHeaderNav from './AppPageHeaderNav';

	export default {
		name: 'AppPageHeaderNavIsAside',
		extends: AppPageHeaderNav
	};
</script>

<style src="./AppPageHeaderNav.vue" scoped>
</style>

<style scoped>
	.AppPageHeaderNavIsAside {

	}

	.l-grid {
		flex-flow: column;
	}

	.nav-item {
		justify-content: center;
		padding: range(5px, 10px) 0;

		&.is-active {
			.nav-item-text {
				font-size: range(3rem, 4.5rem);
			}
		}
	}

	.nav-item-text {
		font-size: range(2rem, 3rem);
		letter-spacing: 0.05em;

		&::before {
			border-top-width: 0.1em;
		}
	}
</style>
