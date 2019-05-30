<script>
	import PageHeader from './PageHeader';
	import PageFooter from './PageFooter';
	import ZingySection from './ZingySection';

	export default {
		name: 'AppPage',
		components: {
			PageHeader,
			PageFooter,
			ZingySection
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
			.main {
				background-color: #383838;
			}

			.base-title {
				color: #ffffff;
			}

			.app-breadcrumb {
				>>> .item {
					color: #ffffff;
				}
			}
		}
	}

	.body {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-flow: column;
		/*transform: translate3d(0, 0, 0);*/

		:root:not(.is-browser-ie) & {
			margin-bottom: var(--zingy-section_height);
		}
	}

	.main {
		flex: 1 0 auto;
		padding: range(60px, 138px) 0 0;
		background-color: white;
	}

	.grid {
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		margin: 0 auto;
	}

	.base-title {
		margin: 0 range(0px, 80px) range(30px, 70px) range(80px, -80px);

		@media (width < 1440px) {
			margin-right: 0;
			margin-left: 0;
		}
	}

	.app-breadcrumb {
		margin: range(10px, 20px) 0 range(20px, 40px);
	}
</style>
