<template lang="pug">
	.app-page-sticky-container.vue-sticky-sidebar-container
		.sidebar
			vue-sticky-sidebar(:options="stickySidebarOptions")
				slot(name="sidebar")

		.main(ref="main")
			slot
</template>

<script>
	// import {VueStickySidebar} from '../plugins/vue-sticky-sidebar/vue-sticky-sidebar';
	const VueStickySidebar = () => import('../plugins/vue-sticky-sidebar/vue-sticky-sidebar').then(({VueStickySidebar}) => VueStickySidebar);

	export default {
		name: 'AppPageStickyContainer',
		components: {
			VueStickySidebar
		},
		data() {
			return {
				stickySidebarOptions: {
					init: true,
					topSpacing: 20,
					bottomSpacing: 20
				}
			};
		},
		watch: {
			windowWidth: {
				handler(val) {
					this.stickySidebarOptions.init = val >= 1024;

					let topSpacing = 60 + (108 - 60) / (1920 - 320) * (this.windowWidth - 320);

					if (topSpacing > 108) topSpacing = 108;
					if (topSpacing < 60) topSpacing = 60;

					this.stickySidebarOptions.topSpacing = topSpacing;
				},
				immediate: true
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

		>>> .base-content {
			padding: range(20px, 40px) 0;

			&:first-child {
				padding-top: 0;
			}

			&:last-child {
				padding-bottom: 0;
			}
		}

		>>> .page-section {
			padding: range(20px, 40px) 0;
			background-color: transparent;

			.header-grid {
				width: 100%;
			}

			.header-grid-cell {
				margin-left: 0;
				width: 100%;
			}

			.factors-list {
				.grid {
					width: 100%;
				}
			}

			.ul,
			.figures {
				width: 100%;
			}

			.faq {
				.grid {
					width: 100%;
				}
			}

			&:first-child {
				padding-top: 0;
			}

			&:last-child {
				padding-bottom: 0;
			}
		}

		>>> .order-section {
			border-top-width: range(20px, 40px);
			border-bottom-width: range(20px, 40px);
			background-color: transparent;

			&:first-child {
				border-top-width: 0;
			}

			&:last-child {
				border-bottom-width: 0;
			}

			@media (width >= 1024px) {
				padding: range(0px, 30px) 0;

				.image-box {
					left: calc(50% + range(50px, 100px));
					width: calc(50% - range(80px, 130px));
				}
			}
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
