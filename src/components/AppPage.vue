<script>
	// all
	import AppHeader from './AppHeader';

	// index
	import IntroSection from './IntroSection';
	import QuoteSection from './QuoteSection';
	import ServiceSection from './ServiceSection';
	import WorkSection from './WorkSection';
	import PageSection from './PageSection';
	import PageSectionIsServices from './PageSectionIsServices';
	import FeedbackSection from './FeedbackSection';

	// blog
	import AppBreadcrumb from './AppBreadcrumb';
	import AppPageStickyContainer from './AppPageStickyContainer';
	import SideNav from './SideNav';
	// import BlogPosts from './BlogPosts';

	// all
	import AppFooter from './AppFooter';
	import ZingySection from './ZingySection';

	export default {
		name: 'AppPage',
		components: {
			// all
			AppHeader,

			// index
			IntroSection,
			QuoteSection,
			ServiceSection,
			WorkSection,
			PageSection,
			PageSectionIsServices,
			FeedbackSection,

			// blog
			AppBreadcrumb,
			AppPageStickyContainer,
			SideNav,
			BlogPosts: () => import('./BlogPosts'),

			// all
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

<style scoped>
	.app-page {
		all: initial;

		& {
			display: block;
			overflow: hidden;
			min-width: env(--min-breakpoint);
		}

		&.is-theme-dark {
			--app-page-main_background-color: #383838;
			--app-breadcrumb_color: #ffffff;
			--base-title_color: #ffffff;
			--side-nav_background-color: #ffffff;
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
		background-color: var(--app-page-main_background-color, #ffffff);
	}

	.grid {
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		margin: 0 auto;
	}

	.grid-row {
		margin: 0 var(--grid-row_margin);
	}

	.grid-cell {
		padding: 0 var(--grid-cell_padding);
		box-sizing: border-box;
	}

	.app-breadcrumb.breadcrumb {
		margin: range(10px, 0px) 0 range(20px, 40px);
	}

	.base-title.title {
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
