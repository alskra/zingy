<script>
	import AppPageHeaderNavIsTop from './AppPageHeaderNavIsTop';
	import AppPageHeaderNavIsAside from './AppPageHeaderNavIsAside';

	export default {
		name: 'AppPageHeader',
		data() {
			return {
				startAnimateIsEnd: false,
				headerIsMinimized: false,
				sidebarIsOpened: false,
				scrollPosition: 0
			};
		},
		components: {
			AppPageHeaderNavIsTop,
			AppPageHeaderNavIsAside
		},
		watch: {
			startAnimateIsEnd() {
				this.setHeaderState();
			},
			sidebarIsOpened: {
				handler(value) {
					this.setHeaderState();

					if (value) {
						document.documentElement.classList.add('is-sidebar-opened');
					} else {
						document.documentElement.classList.remove('is-sidebar-opened');
					}
				},
				immediate: true
			}
		},
		methods: {
			setHeaderState() {
				if (!this.scrollProcessed) {
					this.scrollProcessed = true;
					setTimeout(() => this.scrollProcessed = false, 100);

					const scrollDelta = window.pageYOffset - this.scrollPosition;
					this.scrollPosition = window.pageYOffset;

					this.headerIsMinimized = this.startAnimateIsEnd
						&& (window.innerWidth < 1200 || scrollDelta > 0 || this.sidebarIsOpened);
				}
			},
			onLNavBoxEnter(el) {
				el.style.width = el.children[0].offsetWidth + 'px';
			},
			onLNavBoxAfterEnter(el) {
				el.style.width = '';
			},
			onLNavBoxBeforeLeave(el){
				el.style.width = el.children[0].offsetWidth + 'px';
			},
			onLRightPanelBoxEnter(el) {
				this.onLNavBoxEnter(el);
			},
			onLRightPanelBoxAfterEnter(el) {
				this.onLNavBoxAfterEnter(el);
			},
			onLRightPanelBoxBeforeLeave(el){
				this.onLNavBoxBeforeLeave(el);
			}
		},
		created() {
			window.addEventListener('resize', this.setHeaderState);
			window.addEventListener('scroll', this.setHeaderState);
		},
		destroyed() {
			window.removeEventListener('resize', this.setHeaderState);
			window.removeEventListener('scroll', this.setHeaderState);
		}
	};
</script>

<style scoped>
	.AppPageHeader {
		all: initial;

		& {
			position: fixed;
			z-index: 100;
			top: range(10px, 40px);
			right: range(10px, 40px);
			left: range(10px, 40px);
		}
	}

	.l-logo-box {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		display: flex;
		justify-content: flex-end;
		width: range(40px, 58px);
		overflow: hidden;

		&.v-appear-active {
			animation: logo-box_slide-in-right 0.4s;

			.BaseIcon {
				animation: logo-box_fade-in-top 0.2s 0.4s backwards;
			}
		}

		@keyframes logo-box_slide-in-right {
			0% {
				width: 0;
			}
		}

		@keyframes logo-box_fade-in-top {
			0% {
				transform: translateY(10px);
				opacity: 0;
			}
		}
	}

	.logo {
		display: block;
		width: range(40px, 58px);
		height: range(40px, 58px);
		flex-shrink: 0;
		background-color: #252525;
		color: white;
		text-decoration: none;
		position: relative;

		&:hover {
			.BaseIcon {
				transition: transform 0.8s;
				transform: perspective(50px) rotateY(360deg);
			}
		}
	}

	.l-menu-button-box {
		position: absolute;
		top: 0;
		left: range(40px, 58px);
		z-index: 10;
		display: flex;
		justify-content: flex-end;
		width: range(40px, 58px);
		overflow: hidden;

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;
		}

		&.v-enter-active {
			.BaseIcon {
				>>> .menu-icon-line {
					transition: width 0.2s 0.2s;

					&:nth-child(2) {
						transition-delay: 0.25s;
					}

					&:nth-child(3) {
						transition-delay: 0.3s;
					}

					&:nth-child(4) {
						transition-delay: 0.35s;
					}
				}
			}
		}

		&.v-leave-active {
			.BaseIcon {
				>>> .menu-icon-line {
					transition: width 0.2s;

					&:nth-child(2) {
						transition-delay: 0.05s;
					}

					&:nth-child(3) {
						transition-delay: 0.1s;
					}

					&:nth-child(4) {
						transition-delay: 0.15s;
					}
				}
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0;

			.BaseIcon {
				>>> .menu-icon-line {
					width: 0;
				}
			}
		}
	}

	.menu-button {
		all: initial;

		& {
			width: range(40px, 58px);
			height: range(40px, 58px);
			flex-shrink: 0;
			background-color: #f0f0f0;
			color: #0a0a0a;
			cursor: pointer;
			overflow: hidden;
			box-sizing: border-box;
			padding: range(40 / 58 * 9px, 9px);
		}

		.BaseIcon {
			>>> .menu-icon-line {
				transition: all 0.2s;
			}
		}

		&:hover {
			.BaseIcon {
				&:not(.is-sidebar-opened) {
					>>> .menu-icon-line {
						&:nth-child(1) {
							width: 75%;
						}

						&:nth-child(2) {
							width: 35%;
						}

						&:nth-child(3) {
							width: 90%;
						}

						&:nth-child(4) {
							width: 60%;
						}
					}
				}

				&.is-sidebar-opened {
					>>> .menu-icon-line {
						&:nth-child(1),
						&:nth-child(4) {
							padding-left: 0;
						}

						&:nth-child(1) {
							transform: translateY(-50%) rotate(45deg);
						}

						&:nth-child(4) {
							transform: translateY(-50%) rotate(-45deg);
						}
					}
				}
			}
		}
	}

	.l-nav-box {
		position: absolute;
		top: 0;
		left: range(40px, 58px);
		z-index: 10;
		display: flex;
		justify-content: flex-end;
		overflow: hidden;

		.AppPageHeaderNavIsTop {
			flex-shrink: 0;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;

			.AppPageHeaderNavIsTop {
				>>> .l-grid-item {
					transition-property: transform, opacity;
					transition-duration: 0.2s;
				}
			}
		}

		&.v-enter-active {
			.AppPageHeaderNavIsTop {
				>>> .l-grid-item {
					transition-delay: 0.3s;
				}
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0 !important;

			.AppPageHeaderNavIsTop {
				>>> .l-grid-item {
					transform: translateX(-10px);
					opacity: 0;
				}
			}
		}
	}

	.sidebar-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		:root.is-ie & {
			background: rgba(#000, 0.3);
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.4s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		box-sizing: border-box;
		width: range(env(--min-breakpoint), 480px);
		height: calc(100%);
		padding: range(70px, 138px) range(10px, 40px) 0;
		background-color: white;
		display: flex;
		flex-flow: column;

		&::before {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			width: 5px;
			height: 100%;
			background-color: var(--color-link);
			pointer-events: none;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: transform 0.4s;

			&::before {
				transition: transform 0.2s;
			}

			.sidebar-lang-box {
				transition-property: transform, opacity;
				transition-duration: 0.2s;
			}

			.AppPageHeaderNavIsAside {
				>>> .l-grid-item {
					transition-property: transform, opacity;
					transition-duration: 0.2s;
				}
			}

			.sidebar-footer {
				transition-property: transform, opacity;
				transition-duration: 0.2s;
			}
		}

		&.v-enter-active {
			&::before {
				transition-delay: 0.4s;
			}

			.sidebar-lang-box {
				transition-delay: 0.4s;
			}

			.AppPageHeaderNavIsAside {
				>>> .l-grid-item {
					transition-delay: 0.4s;
				}
			}

			.sidebar-footer {
				transition-delay: 0.4s;
			}
		}

		&.v-leave-active {
			transition-delay: 0.2s;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateX(calc(-100%));

			&::before {
				transform: translateY(-100%);
			}

			.sidebar-lang-box {
				transform: translateX(10px);
				opacity: 0;
			}

			.AppPageHeaderNavIsAside {
				>>> .l-grid-item {
					transform: translateY(10px);
					opacity: 0;
				}
			}

			.sidebar-footer {
				transform: translateY(10px);
				opacity: 0;
			}
		}
	}

	.sidebar-scrollable {
		overflow-y: auto;
		flex: 1 0;
		margin: 0 range(-10px, -40px);
		padding-bottom: range(20px, 40px);
		display: flex;
		flex-flow: column;

		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-track {
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--color-zingy);
		}
	}

	.l-right-panel-box {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		display: flex;
		justify-content: flex-start;
		overflow: hidden;

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;

			.l-right-panel-grid-item {
				transition-property: transform, opacity;
				transition-duration: 0.2s;
			}
		}

		&.v-enter-active {
			.l-right-panel-grid-item {
				transition-delay: 0.3s;
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0 !important;

			.l-right-panel-grid-item {
				transform: translateX(10px);
				opacity: 0;
			}
		}
	}

	.right-panel {
		flex-shrink: 0;
		height: range(40px, 58px);
		background-color: white;
	}

	.l-right-panel-grid {
		display: flex;
		align-items: center;
		height: 100%;
		margin: 0 range(0px, -30px);
	}

	.l-right-panel-grid-item {
		margin: 0 range(0px, 30px);
	}

	.button.BaseButton {
		background-color: var(--color-zingy);
		box-sizing: border-box;
		padding: 2px 20px 0;
		height: range(40px, 58px);
		transition: background-color 0.2s;

		>>> .text {
			color: #ffffff;
			font-size: 1.2rem;
			font-weight: 500;
			letter-spacing: 0.06rem;
			line-height: 1.25;
			text-transform: uppercase;
		}

		&:not(:disabled) {
			&:hover {
				background-color: var(--color-link);
			}
		}
	}

	.link {
		display: inline-flex;
		vertical-align: top;
		align-items: center;
		/*height: range(40px, 58px);*/
		color: #0a0a0a;
		text-decoration: none;

		&:hover {
			.link-text {
				background-size: 100% 2px;
			}
		}
	}

	.BaseIcon.link-icon {
		flex-shrink: 0;
		margin-right: 10px;
		width: 24px;
		height: 24px;
	}

	.link-text {
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: linear-gradient(to right, var(--color-link, #e04b4a), var(--color-link, #e04b4a)) no-repeat 0 100% / 0 2px;
		transition: background-size 0.2s;

		&.is-uppercase {
			text-transform: uppercase;
		}
	}

	.sidebar-nav.AppPageHeaderNavIsAside {
		margin-bottom: 40px;
		flex-shrink: 0;
	}

	.sidebar-lang-box {
		position: absolute;
		top: range(10px, 40px);
		right: range(10px, 40px);
		height: range(40px, 58px);
		display: flex;
		align-items: center;
	}

	.sidebar-footer {
		box-sizing: border-box;
		padding: 0 10px;
		width: 300px;
		max-width: 100%;
		margin: auto auto 0;
		flex-shrink: 0;
	}

	.sidebar-footer-grid {
		display: flex;
		flex-flow: column;
		margin: -10px 0;
	}

	.sidebar-footer-grid-item {
		margin: 10px 0;

		&:nth-child(1) {
			margin-bottom: 20px;
		}
	}
</style>

<style>
	@custom-selector :--back-boxes
	.AppPage > .body > .main,
	.AppPage > .body > .footer,
	.AppPage > .ZingySection;

	:root {
		:--back-boxes {
			transition: filter 0.4s;
		}

		&.is-sidebar-opened {
			&,
			body {
				overflow: hidden;
			}

			:--back-boxes {
				filter: brightness(0.5);
			}
		}
	}
</style>
