<script>
	import AppPageHeaderNavIsTop from './AppPageHeaderNavIsTop';
	import AppPageHeaderNavIsAside from './AppPageHeaderNavIsAside';

	export default {
		name: 'AppPageHeader',
		data() {
			return {
				startAnimateIsEnd: false,
				headerIsMinimized: false,
				sidebarIsOpened: false
			};
		},
		components: {
			AppPageHeaderNavIsTop,
			AppPageHeaderNavIsAside
		},
		watch: {
			startAnimateIsEnd() {
				this.getHeaderState();
			},
			sidebarIsOpened(value) {
				document.documentElement.classList.toggle('is-sidebar-opened', value);
			},
		},
		methods: {
			getHeaderState() {
				this.headerIsMinimized = this.startAnimateIsEnd && (window.innerWidth < 1024 || window.pageYOffset > 0);
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
			window.addEventListener('resize', this.getHeaderState);
			window.addEventListener('scroll', this.getHeaderState);
		},
		destroyed() {
			window.removeEventListener('resize', this.getHeaderState);
			window.removeEventListener('scroll', this.getHeaderState);
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
			display: flex;
			justify-content: center;
			align-items: center;
			width: range(40px, 58px);
			height: range(40px, 58px);
			flex-shrink: 0;
			background-color: #f0f0f0;
			color: #0a0a0a;
			cursor: pointer;
		}

		.BaseIcon {
			width: range(40 / 58 * 44px, 44px);
			height: range(40 / 58 * 44px, 44px);

			>>> .menu-icon-line {
				transition-property: width, transform, top;
				transition-duration: 0.2s;
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
						&:nth-child(1) {
							transform: rotate(35deg) scale(0.9);
						}

						&:nth-child(4) {
							transform: rotate(-35deg) scale(0.9);
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
		/*background: rgba(#000, 0.3);*/

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.4s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.sidebar-box {
		position: fixed;
		top: 0;
		left: 0;
		box-sizing: border-box;
		width: range(env(--min-breakpoint), 800px);
		height: calc(100%);
		padding: range(80px, 138px) range(10px, 40px);
		background-color: white;
		/*box-shadow: 5px -90% var(--color-link) inset;*/

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 5px;
			height: 100%;
			background-color: var(--color-link);
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: transform 0.4s;

			&::before {
				transition: transform 0.2s;
			}

			.AppPageHeaderNavIsAside {
				>>> .l-grid-item {
					transition-property: transform, opacity;
					transition-duration: 0.2s;
				}
			}
		}

		&.v-enter-active {
			&::before {
				transition-delay: 0.4s;
			}

			.AppPageHeaderNavIsAside {
				>>> .l-grid-item {
					transition-delay: 0.4s;
				}
			}
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateX(calc(-100%));

			&::before {
				transform: translateY(-100%);
			}

			.AppPageHeaderNavIsAside {
				>>> .l-grid-item {
					transform: translateY(10px);
					opacity: 0;
				}
			}
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

	.BaseButton.button {
		background-color: #000000;
		box-sizing: border-box;
		padding: 2px 20px 0;
		height: 31px;
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
				background-color: var(--color-link, #e04b4a);
			}
		}
	}

	.choose-lang {
		display: flex;
		align-items: center;
		color: #000000;
		text-decoration: none;

		&:hover {
			.choose-lang-text {
				background-size: 100% 2px;
			}
		}
	}

	.choose-lang-icon {
		flex-shrink: 0;
		margin-right: 16px;
	}

	.choose-lang-text {
		font-family: var(--font-family, sans-serif);
		font-size: 1.8rem;
		font-weight: 500;
		text-transform: uppercase;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: linear-gradient(to right, var(--color-link, #e04b4a), var(--color-link, #e04b4a)) no-repeat 0 100% / 0 2px;
		transition: background-size 0.2s;
	}
</style>

<style>
	@custom-selector :--disabled-boxes
	.AppPage > .l-front-box > .l-main-box,
	.AppPage > .l-back-box;

	:root {
		:--disabled-boxes {
			transition: filter 0.4s;
		}

		&.is-sidebar-opened {
			&,
			body {
				overflow: hidden;
			}

			:--disabled-boxes {
				filter: brightness(0.5);
			}
		}
	}
</style>
