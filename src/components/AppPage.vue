<script>
	import cssVars from 'css-vars-ponyfill';

	// index
	import AppHeader from './AppHeader';
	import IntroSection from './IntroSection';
	import QuoteSection from './QuoteSection';
	import ServiceSection from './ServiceSection';
	import WorkSection from './WorkSection';
	import PageSection from './PageSection';
	import PageSectionIsServices from './PageSectionIsServices';
	import FeedbackSection from './FeedbackSection';
	import AppFooter from './AppFooter';
	const ZingySection = () => import('./ZingySection');
	const AppModal = () => import('./AppModal');
	import FeedbackForm from './FeedbackForm';

	// blog
	import AppBreadcrumb from './AppBreadcrumb';
	import AppPageStickyContainer from './AppPageStickyContainer';
	import SideNav from './SideNav';
	import SubscribeForm from './SubscribeForm';
	import BlogPosts from './BlogPosts';

	// article
	import ArticlesFeed from './ArticlesFeed';
	import AppArticle from './AppArticle';
	import ContentSection from './ContentSection';

	// contacts
	const ZingyWorld = () => import('./ZingyWorld');
	import AppPageContacts from './AppPageContacts';
	const AppYmaps = () => import('./AppYmaps');

	// development
	import FancySection from './FancySection';

	// services
	import AppServices from './AppServices';

	// seo
	import InfoSection from './InfoSection';
	import OrderSection from './OrderSection';

	export default {
		name: 'AppPage',
		components: {
			AppHeader,
			IntroSection,
			QuoteSection,
			ServiceSection,
			WorkSection,
			PageSection,
			PageSectionIsServices,
			FeedbackSection,
			AppFooter,
			ZingySection,
			AppModal,
			FeedbackForm,
			AppBreadcrumb,
			AppPageStickyContainer,
			SideNav,
			SubscribeForm,
			BlogPosts,
			ArticlesFeed,
			AppArticle,
			ContentSection,
			ZingyWorld,
			AppPageContacts,
			AppYmaps,
			FancySection,
			AppServices,
			InfoSection,
			OrderSection,
		},
		data() {
			return {
				zingySectionShown: false,
				bodyRect: {}
			};
		},
		computed: {
			linkBackwardShown() {
				return this.windowWidth >= 1440
					&& this.bodyRect.bottom >= this.windowHeight;
			},
			linkUpShown() {
				return this.windowWidth >= 1440
					&& this.$windowScroll.y >= 200;
			},
			bgImageShown() {
				return this.bodyRect.bottom >= this.windowHeight;
			}
		},
		methods: {
			setElementsVisible() {
				if (this.$refs.body) {
					this.bodyRect = this.$refs.body.getBoundingClientRect();

					const appPagination = document.querySelector('.app-pagination');

					[appPagination].forEach(el => {
						if (el) {
							el.classList.toggle('hidden', this.windowWidth >= 1440
								&& this.bodyRect.bottom < this.windowHeight);
						}
					});
				}
			},
			setZingySectionVisible() {
				if (!this.zingySectionShown) {
					clearTimeout(this.zingySectionTimer);

					if (this.$windowScroll.reachEndY()) {
						this.zingySectionTimer = setTimeout(() => {
							this.zingySectionShown = true;
						}, 2000);
					}
				}
			},
			onZingySectionMounted(el) {
				this.$el.style.paddingBottom = el.offsetHeight + 'px';

				(async () => {
					const {TweenLite} = await import('gsap');

					new TweenLite([document.documentElement, document.body], 2, {
						scrollTop: this.$windowScroll.getLimitY(),
						onStartParams: ['{self}'],
						onStart: () => {
							document.documentElement.style.scrollBehavior = 'auto';
						},
						onCompleteParams: ['{self}'],
						onComplete: () => {
							setTimeout(() => document.documentElement.style.scrollBehavior = '', 100);
							el.classList.add('fixed');
							el.classList.remove('absolute', 'animation-stopped');

							window.zingySectionResize = () => this.$el.style.paddingBottom = el.offsetHeight + 'px';
							window.addEventListener('resize', window.zingySectionResize);
						}
					});
				})();
			},
			onScrollOrResize() {
				this.setElementsVisible();
				this.setZingySectionVisible();
			},
			scrollUp() {
				window.scrollTo(0, 0);
			}
		},
		created() {
			window.addEventListener('scroll', this.onScrollOrResize);
			window.addEventListener('resize', this.onScrollOrResize);
		},
		destroyed() {
			window.removeEventListener('scroll', this.onScrollOrResize);
			window.removeEventListener('resize', this.onScrollOrResize);
			window.removeEventListener('resize', window.zingySectionResize);
			delete window.zingySectionResize;
		},
		mounted() {
			this.setElementsVisible();

			if (
				this.$el.classList.contains('theme-dark')
				&& document.documentElement.classList.contains('is-browser-ie')
			) {
				cssVars({
					variables: {
						'--app-page-main_background-color': '#383838',
						'--app-breadcrumb_color': '#ffffff',
						'--base-title_color': '#ffffff',
						'--side-nav_background-color': '#ffffff',
						'--app-pagination_color': '#ffffff'
					}
				})
			}
		}
	};
</script>

<style scoped>
	.app-page {
		all: initial;
		display: block;
		position: relative;
		min-width: env(--min-breakpoint);
		overflow: hidden;

		&::after {
			content: url("../assets/img/about-zingy-bg.jpg");
			position: absolute;
			width: 0;
			height: 0;
			overflow: hidden;
		}

		&.theme-dark {
			--app-page-main_background-color: #383838;
			--app-breadcrumb_color: #ffffff;
			--base-title_color: #ffffff;
			--side-nav_background-color: #ffffff;
			--app-pagination_color: #ffffff;
			/*--posts-item_color: #ffffff;*/
			/*--posts-item_background-color: transparent;*/
		}
	}

	.body {
		position: relative;
		z-index: 1;
		display: flex;
		flex-flow: column;
		padding-right: var(--body-scroll-locked_padding);
		min-height: 100vh;
		background-color: #ffffff;
	}

	.main {
		flex: 1 0 auto;
		padding: range(60px, 138px) 0 0;
		background-color: var(--app-page-main_background-color, #ffffff);
	}

	.bg-image {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: no-repeat 50% 50% / cover;
	}

	.app-footer.app-page-footer {
		flex-shrink: 0;
	}

	.grid {
		display: flex;
		position: relative;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin: var(--grid-row_margin);
	}

	.grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;
		max-width: 100%;

		&.x-center {
			margin: 0 auto;
		}
	}

	.grid-cell-10 {
		flex: 0 0 percentage(10 / 12);

		@media (width < 1024px) {
			flex-basis: 100%;
		}
	}

	.app-breadcrumb.app-page-breadcrumb {
		margin: range(10px, 0px) 0 range(20px, 40px);
	}

	.base-title.app-page-title {
		margin: 0 range(0px, 80px) range(30px, 60px) range(80px, -80px);

		@media (width < 1366px) {
			margin-right: 0;
			margin-left: 0;
		}
	}

	.app-page-sticky-container.sticky-container {
		margin-bottom: range(30px, 60px);
	}

	.side-nav-wide.app-page-side-nav-wide {
		@media (width < 1024px) {
			margin-bottom: calc(var(--grid-cell_padding) * 2);
		}
	}

	.subscribe-form.app-page-subscribe-form {
		margin-top: calc(var(--grid-cell_padding) * 2);
	}

	.link-backward {
		position: fixed;
		top: 50%;
		left: var(--grid_padding);
		transform-origin: 50% 0;
		transform: translate3d(-50%, 0, 0) rotate(-90deg);
		display: flex;
		align-items: center;
		color: var(--color);
		text-decoration: none;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 700;
		line-height: 1.25;

		&::before,
		&::after {
			content: '';
			width: 20px;
			height: 1px;
			background-color: var(--color-accent);
			margin: 0 10px;
		}
	}

	.link-up {
		position: fixed;
		z-index: 100;
		right: var(--grid_padding);
		bottom: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: range(44px, 58px);
		height: range(44px, 58px);
		color: white;
		text-decoration: none;
		background-color: var(--color-accent);
		cursor: pointer;

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.2s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.base-icon.link-up-icon {
		width: 32px;
		height: 32px;
		color: inherit;
		transform-origin: 50% 50%;
		transform: rotate(90deg);
	}

	.contacts-box {
		display: flex;
		box-sizing: border-box;
		position: relative;
		margin-top: range(-60px, -138px);
		padding-top: range(60px, 138px);
		min-height: 100vh;
		flex-flow: column;

		.grid {
			position: relative;
		}
	}

	.zingy-world.app-page-zingy-world {
		position: absolute;
		top: 20px;
		right: 0;
		left: 0;
		height: calc(100vh - 20px);
	}
</style>

<style>
	:root {
		--app-page-main_background-color: #ffffff;
	}
</style>
