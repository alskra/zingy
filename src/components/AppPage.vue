<script>
	import cssVars from 'css-vars-ponyfill';
	import {TweenLite} from 'gsap';

	// all
	import AppHeader from './AppHeader';
	import AppFooter from './AppFooter';
	import ZingySection from './ZingySection';

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
	const BlogPosts = () => import('./BlogPosts');
	import SubscribeForm from './SubscribeForm';

	// article
	const AppArticle = () => import('./AppArticle');

	// contacts
	import ZingyWorld from './ZingyWorld';
	import AppPageContacts from './AppPageContacts';
	import AppGmap from './AppGmap';

	export default {
		name: 'AppPage',
		components: {
			// all
			AppHeader,
			AppFooter,
			ZingySection,

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
			BlogPosts,
			SubscribeForm,

			// article
			AppArticle,

			// contacts
			ZingyWorld,
			AppPageContacts,
			AppGmap
		},
		data() {
			return {
				stickyContainerMinWidth: 1024,
				zingySectionShown: false
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
			setElementsVisible() {
				const appPagination = document.querySelector('.app-pagination');
				const linkBackward = this.$refs.linkBackward;
				const linkUp = this.$refs.linkUp;
				const bodyRect = this.$refs.body.getBoundingClientRect();

				[appPagination, linkBackward, linkUp].forEach(el => {
					if (el) {
						el.classList.toggle('hidden', bodyRect.bottom < this.windowHeight);
					}
				});
			},
			setZingySectionVisible() {
				if (!this.zingySectionShown && this.$windowScroll.reachEndY()) {
					this.zingySectionTimer = setTimeout(() => {
						this.zingySectionShown = true;
					}, 2000);
				} else {
					clearTimeout(this.zingySectionTimer);
				}
			},
			onZingySectionMounted(el) {
				// const body = this.$refs.body;

				new TweenLite(document.documentElement, 2, {
					scrollTop: this.$windowScroll.getLimitY(),
					onStartParams: ['{self}'],
					onStart(self) {
						self.target.style.scrollBehavior = 'auto';
					},
					onCompleteParams: ['{self}'],
					onComplete(self) {
						self.target.style.scrollBehavior = '';
						document.body.style.paddingBottom = el.offsetHeight + 'px';
						el.classList.add('fixed');
						el.classList.remove('animation-stopped');

						window.zingySectionResize = () => document.body.style.paddingBottom = el.offsetHeight + 'px';
						window.addEventListener('resize', window.zingySectionResize);
					}
				});
			},
			onScrollOrResize() {
				this.setElementsVisible();
				this.setZingySectionVisible();
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

		& {
			display: block;
			overflow: hidden;
			min-width: env(--min-breakpoint);
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

	.app-footer.app-page-footer {
		flex-shrink: 0;
	}

	.grid {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 var(--grid-row_margin);
	}

	.grid-cell {
		box-sizing: border-box;
		padding: 0 var(--grid-cell_padding);
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

	.side-nav.app-page-side-nav {
		@media (width < 1024px) {
			margin-bottom: calc(var(--grid-cell_padding) * 2);
		}
	}

	.subscribe-form.app-page-subscribe-form {
		margin-top: calc(var(--grid-cell_padding) * 2);
	}

	.link-backward {
		position: fixed;
		/*top: range(60px, 108px);*/
		/*bottom: 20px;*/
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

		&.hidden {
			display: none;
		}

		@media (width < 1366px) {
			display: none;
		}
	}

	.link-up {
		position: fixed;
		top: 50%;
		right: var(--grid_padding);
		transform: translate3d(0, -50%, 0);
		display: flex;
		justify-content: center;
		align-items: center;
		width: range(40px, 60px);
		height: range(40px, 60px);
		color: white;
		text-decoration: none;
		background-color: var(--color-accent);
		cursor: pointer;

		&.hidden {
			display: none;
		}

		@media (width < 1366px) {
			display: none;
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
