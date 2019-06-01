<script>
	let icons = {};

	const requireIcons = require.context('!!raw-loader!../assets/img/icons', true, /\.svg$/);

	requireIcons.keys().forEach(iconPath => {
		const iconName = iconPath
			.replace(/^.+\//, '')
			.replace(/\.\w+$/, '');

		icons[iconName] = requireIcons(iconPath).default || requireIcons(iconPath);
	});

	icons.menu = `
		<span>
			<span class="menu-icon-line"></span>
			<span class="menu-icon-line"></span>
			<span class="menu-icon-line"></span>
			<span class="menu-icon-line"></span>
		</span>
	`;

	export default {
		name: 'BaseIcon',
		props: {
			name: {
				type: String,
				required: true
			},
			align: {
				type: String,
				default: 'xMidYMid'
			},
			scale: {
				type: String,
				default: 'meet'
			}
		},
		render(createElement) {
			return createElement({
				name: 'BaseIconIs-' + this.name,
				template: icons[this.name],
				_scopeId: this.$options._scopeId
			}, {
				class: `base-icon base-icon-is-${this.name}`,
				attrs: {
					preserveAspectRatio: this.align + ' ' + this.scale,
					role: 'img'
				}
			});
		}
	};
</script>

<style scoped>
	.base-icon {
		all: initial;

		& {
			display: block;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			overflow: hidden;
			color: inherit;
			cursor: inherit;
			fill: currentColor;
		}

		* {
			pointer-events: none;
		}
	}

	.base-icon-is-menu {
		position: relative;
		width: 36px;
		height: 30px;
		overflow: visible;

		:root:not(.is-sidebar-opened) & {
			&:hover {
				.menu-icon-line {
					&:nth-child(1) {
						width: 75%;
					}

					&:nth-child(2) {
						width: 35%;
					}

					&:nth-child(3) {
						width: 99%;
					}

					&:nth-child(4) {
						width: 60%;
					}
				}
			}
		}

		:root.is-sidebar-opened & {
			.menu-icon-line {
				&:nth-child(2),
				&:nth-child(3) {
					display: none;
				}

				&:nth-child(1),
				&:nth-child(4) {
					top: 14px;
					width: 100%;
					padding-left: 17px;
				}

				&:nth-child(1) {
					transform: translate(-9px, 0) rotate(45deg);
				}

				&:nth-child(4) {
					transform: translate(-9px, 0) rotate(-45deg);
				}
			}
		}

		:root.is-sidebar-opened:not(.is-device-mobile) & {
			&:hover {
				.menu-icon-line {
					&:nth-child(1),
					&:nth-child(4) {
						padding-left: 0;
					}

					&:nth-child(1) {
						transform: rotate(45deg);
					}

					&:nth-child(4) {
						transform: rotate(-45deg);
					}
				}
			}
		}
	}

	.menu-icon-line {
		position: absolute;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: currentColor;
		transform-origin: 50% 50%;
		background-clip: content-box;
		box-sizing: border-box;
		transition: all 0.2s;
		will-change: top, width, padding-left, transform;

		&:nth-child(1) {
			top: 0;
			width: 57%;
		}

		&:nth-child(2) {
			top: 9px;
			width: 99%;
		}

		&:nth-child(3) {
			top: 18px;
			width: 34%;
		}

		&:nth-child(4) {
			top: 27px;
			width: 68%;
		}
	}
</style>
