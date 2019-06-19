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
		computed: {
			options() {
				let topSpacing = 60 + (108 - 60) / 1600 * (this.windowWidth - 320);

				if (topSpacing > 108) topSpacing = 108;
				if (topSpacing < 60) topSpacing = 60;

				return {
					topSpacing: 20,
					// bottomSpacing: 20,
					minWidth: 1023
				};
			}
		}
	};
</script>

<style scoped>
	.app-page-sticky-container {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			align-items: flex-start;
		}

		@media (width < 1024px) {
			flex-wrap: wrap;
		}
	}

	.sidebar {
		flex: 0 0 percentage(260 / 1080);
		min-width: 0;
		max-width: 260px;

		@media (width < 1024px) {
			flex-basis: 100%;
			max-width: none;
		}
	}

	.main {
		margin-left: calc(2 * var(--grid-cell_padding));
		flex: 1 1 auto;
		min-width: 0.1px;

		@media (width < 1024px) {
			margin-left: 0;
			flex: 0 0 100%;
		}
	}
</style>
