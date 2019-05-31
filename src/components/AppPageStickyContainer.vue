<template lang="pug">
	.app-page-sticky-container(data-v-sticky-container)
		.sidebar(v-sticky="options")
			.sidebar-inner(data-v-sticky-inner)
				slot(name="sidebar")
					p Sidebar Content

		.main
			slot
				p Main Content
</template>

<script>
	export default {
		name: 'AppPageStickyContainer',
		props: {
			options: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	};
</script>

<style scoped>
	.app-page-sticky-container {
		all: initial;

		& {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
		}
	}

	.sidebar {
		width: 260px;
		flex-shrink: 0;

		@media (width < 1024px) {
			width: 100%;
		}
	}

	.sidebar-inner {
		background-color: green;
		min-height: 1500px;
	}

	.main {
		flex-grow: 1;
		margin-left: calc(2 * var(--grid-cell-padding));
		min-height: 2000px;
		background-color: white;

		@media (width < 1024px) {
			width: 100%;
			margin-left: 0;
		}
	}
</style>
