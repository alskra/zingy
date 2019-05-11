<template lang="pug">
	nav.app-page-footer-nav
		slot
</template>

<script>
	export default {
		name: 'AppPageFooterNav'
	};
</script>

<style scoped>
	.app-page-footer-nav {
		all: initial;

		& {
			display: block;
		}
	}

	.navgrid {
		display: flex;
		flex-flow: column;
		margin: 0 -10px;

		@media (width < 768px) {
			flex-flow: row;
			flex-wrap: wrap;
		}

		&-item {
			margin: 0 10px;
			display: flex;
		}
	}

	.navitem {
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 8px 0;
		width: 100%;
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			color: #ec5151;
		}
	}
</style>
