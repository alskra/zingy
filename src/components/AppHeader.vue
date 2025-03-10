<script>
	import url from 'url';
	import AppHeaderNavIsTop from './AppHeaderNavIsTop';
	import AppHeaderNavIsAside from './AppHeaderNavIsAside';

	export default {
		name: 'AppHeader',
		components: {
			AppHeaderNavIsTop,
			AppHeaderNavIsAside
		},
		data() {
			return {
				startAnimateCompleted: false,
				sidebarOpen: false
			};
		},
		computed: {
			minimized() {
				return this.windowWidth < 1366
					|| this.$windowScroll.directionY === '>'
					|| this.sidebarOpen;
			},
			url() {
				return url;
			},
			location() {
				return location;
			}
		},
		watch: {
			sidebarOpen: {
				handler(val) {
					if (val) {
						document.documentElement.classList.add('sidebar-open');
					} else {
						document.documentElement.classList.remove('sidebar-open');
					}
				},
				immediate: true
			}
		}
	};
</script>

<style scoped>
	.app-header {
		all: initial;

		& {
			position: fixed;
			z-index: 100;
			top: range(8px, 40px);
			right: range(10px, 40px);
			left: range(10px, 40px);
		}
	}

	.logo-box {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		display: flex;
		justify-content: flex-end;
		width: range(44px, 58px);
		overflow: hidden;

		&.v-appear-active {
			animation: logo-box_slide-in-right 0.4s;

			.base-icon.logo-icon {
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
		position: relative;
		flex-shrink: 0;
		width: range(44px, 58px);
		height: range(44px, 58px);
		background-color: #252525;
		color: white;
		text-decoration: none;
		overflow: hidden;

		.base-icon.logo-icon {
			transform: perspective(50px);
			animation: logo-icon_rotate 5.8s 0.6s infinite;

			@keyframes logo-icon_rotate {
				86% {
					transform: perspective(50px);
				}

				100% {
					transform: perspective(50px) rotateY(360deg);
				}
			}
		}
	}

	.nav-box {
		position: absolute;
		top: 0;
		left: range(44px, 58px);
		z-index: 10;
		display: flex;
		justify-content: flex-end;
		overflow: hidden;

		.nav {
			flex-shrink: 0;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;

			.nav {
				>>> .grid-cell {
					transition-property: transform, opacity;
					transition-duration: 0.2s;
				}
			}
		}

		&.v-enter-active {
			.nav {
				>>> .grid-cell {
					transition-delay: 0.3s;
				}
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0 !important;

			.nav {
				>>> .grid-cell {
					transform: translateX(-10px);
					opacity: 0;
				}
			}
		}
	}

	.menu-button-box {
		position: absolute;
		top: 0;
		left: range(44px, 58px);
		z-index: 10;
		display: flex;
		justify-content: flex-end;
		width: range(44px, 58px);
		overflow: hidden;

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;
		}

		&.v-enter-active {
			.base-icon.menu-button-icon {
				>>> line {
					transition: stroke-dashoffset 0.2s 0.2s;

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
			.base-icon.menu-button-icon {
				>>> line {
					transition: stroke-dashoffset 0.2s;

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

			.base-icon.menu-button-icon {
				>>> line {
					&:nth-child(1),
					&:nth-child(2),
					&:nth-child(3),
					&:nth-child(4) {
						stroke-dashoffset: 100%;
					}
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
			width: range(44px, 58px);
			height: range(44px, 58px);
			flex-shrink: 0;
			background-color: #f0f0f0;
			color: #0a0a0a;
			cursor: pointer;
			overflow: hidden;
			box-sizing: border-box;
		}
	}

	.base-icon.menu-button-icon {
		width: range(44 / 58 * 32px, 32px);
		height: range(44 / 58 * 32px, 32px);
	}

	.right-panel-box {
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

			.right-panel-grid-cell {
				transition-property: transform, opacity;
				transition-duration: 0.2s;
			}
		}

		&.v-enter-active {
			.right-panel-grid-cell {
				transition-delay: 0.3s;
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0 !important;

			.right-panel-grid-cell {
				transform: translateX(10px);
				opacity: 0;
			}
		}
	}

	.right-panel {
		flex-shrink: 0;
		padding: 0 range(0px, 20px);
		height: range(44px, 58px);
		background-color: #f0f0f0;
	}

	.right-panel-grid {
		display: flex;
		align-items: center;
		height: 100%;
		margin: 0 range(0px, -20px);
	}

	.right-panel-grid-cell {
		margin: 0 range(0px, 20px);
	}

	.link {
		display: inline-flex;
		vertical-align: top;
		align-items: center;
		box-sizing: border-box;
		height: 32px;
		color: var(--color);
		text-decoration: none;

		&:hover {
			.link-text {
				background-size: 100% 2px;
			}
		}
	}

	.base-icon.link-icon {
		flex-shrink: 0;
		margin-right: 10px;
		width: 24px;
		height: 24px;
	}

	.link-text {
		font-family: var(--font-family);
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

	.base-button.right-panel-button {
		height: 32px;

		>>> .text {
			font-size: 12px;
		}
	}

	.phone-button-box {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		display: flex;
		justify-content: flex-start;
		width: range(44px, 58px);
		overflow: hidden;

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;

			.base-icon.phone-button-icon {
				transition-property: transform, opacity;
				transition-duration: 0.2s;
				transition-delay: 0.3s;
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0;

			.base-icon.phone-button-icon {
				transform: translateY(10px);
				opacity: 0;
			}
		}
	}

	.phone-button {
		all: initial;

		& {
			display: flex;
			justify-content: center;
			align-items: center;
			width: range(44px, 58px);
			height: range(44px, 58px);
			flex-shrink: 0;
			background-color: var(--color-zingy);
			color: white;
			cursor: pointer;
			overflow: hidden;
			box-sizing: border-box;
		}
	}

	.base-icon.phone-button-icon {
		width: range(44 / 58 * 32px, 32px);
		height: range(44 / 58 * 32px, 32px);
	}

	.sidebar-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		:root.is-browser-ie & {
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
		padding: range(60px, 138px) range(10px, 40px) 0;
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

			.sidebar-nav {
				>>> .grid-cell {
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

			.sidebar-nav {
				>>> .grid-cell {
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

			.sidebar-nav {
				>>> .grid-cell {
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

	.sidebar-lang-box {
		position: absolute;
		top: range(10px, 40px);
		right: range(10px, 40px);
		height: range(44px, 58px);
		display: flex;
		align-items: center;
	}

	.sidebar-scrollable {
		overflow-y: auto;
		flex: 1 0;
		margin: 0 range(-10px, -40px);
		padding-bottom: range(20px, 40px);
		display: flex;
		flex-flow: column;

		:root.is-device-desktop & {
			&::-webkit-scrollbar {
				width: 5px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: var(--color-zingy);
			}
		}
	}

	.sidebar-nav {
		margin-bottom: 40px;
		flex-shrink: 0;
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

	.sidebar-footer-grid-cell {
		margin: 10px 0;

		&:nth-child(1) {
			margin-bottom: 20px;
		}
	}
</style>

<style>
	@custom-selector :--back-boxes
	.app-page > .body > .main,
	.app-page > .body > .app-footer,
	.app-page > .zingy-section;

	:root {
		:--back-boxes {
			transition: filter 0.4s;
			/*will-change: filter;*/
		}

		&.sidebar-open {
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
