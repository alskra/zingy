<script>
	import AppHeader from './AppHeader';
	import AppFooter from './AppFooter';
	import ZingySection from './ZingySection';

	export default {
		name: 'AppPage',
		components: {
			AppHeader,
			AppFooter,
			ZingySection
		},
		data() {
			return {
				stickyContainerMinWidth: 1024
			};
		},
		computed: {
			stickyContainerOptions() {
				let topSpacing = 60 + (108 - 60) / 1600 * (this.windowWidth - 320);

				if (topSpacing > 108) topSpacing = 108;
				if (topSpacing < 60) topSpacing = 60;

				return {
					topSpacing,
					bottomSpacing: 20,
					minWidth: this.stickyContainerMinWidth - 1
				};
			}
		},
		methods: {
			stopZingySectionAnimation() {
				const zingySection = document.querySelector('.zingy-section');

				if (zingySection) {
					zingySection.classList.toggle(
						'is-animation-stopped',
						this.$refs.body.getBoundingClientRect().bottom >= this.windowHeight
					);
				}
			}
		},
		created() {
			window.addEventListener('scroll', this.stopZingySectionAnimation);
		},
		destroyed() {
			window.removeEventListener('scroll', this.stopZingySectionAnimation);
		}
	};
</script>

<style>
	:root {
		--app-page-main_background-color: #ffffff;

		&.is-theme-dark {
			--app-page-main_background-color: #383838;
		}
	}
</style>

<style scoped>
	.app-page {
		all: initial;

		& {
			display: block;
			overflow: hidden;
			min-width: env(--min-breakpoint);
		}
	}

	.body {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;

		:root:not(.is-browser-ie) & {
			margin-bottom: var(--zingy-section_height);
		}
	}

	.main {
		flex: 1 0 auto;
		padding: range(60px, 138px) 0 0;
		background-color: var(--app-page-main_background-color);
	}

	.grid {
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		margin: 0 auto;
	}

	.grid-row {
		margin: 0 var(--grid-row-margin);
	}

	.grid-cell {
		padding: 0 var(--grid-cell-padding);
		box-sizing: border-box;
	}

	.app-breadcrumb.breadcrumb {
		margin: range(10px, 0px) 0 range(20px, 40px);
	}

	.base-title {
		margin: 0 range(0px, 80px) range(30px, 60px) range(80px, -80px);

		@media (width < 1440px) {
			margin-right: 0;
			margin-left: 0;
		}
	}

	.app-page-sticky-container {
		margin-bottom: range(30px, 60px);
	}
</style>
