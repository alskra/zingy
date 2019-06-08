<template lang="pug">
	.app-page-sticky-container(data-v-sticky-container)
		.sidebar(v-sticky="options")
			.sidebar-inner(data-v-sticky-inner)
				slot(name="sidebar")

		.main
			slot
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
			align-items: flex-start;
		}

		@media (width < 1024px) {
			flex-wrap: wrap;
		}
	}

	.sidebar {
		width: percentage(260 / 1080);
		max-width: 260px;
		flex-shrink: 0;

		@media (width < 1024px) {
			width: 100%;
			max-width: none;
		}
	}

	.main {
		margin-left: calc(2 * var(--grid-cell_padding));
		flex-grow: 1;
		min-width: 0;

		@media (width < 1024px) {
			margin-left: 0;
			width: 100%;
		}
	}
</style>
