<script>
	import upperFirst from 'lodash-es/upperFirst';
	import camelCase from 'lodash-es/camelCase';

	let icons = {};

	const requireIcons = require.context('!!raw-loader!../assets/img/icons', true, /\.svg$/);

	requireIcons.keys().forEach(iconPath => {
		const iconName = iconPath
			.replace(/^.+\//, '')
			.replace(/\.\w+$/, '');

		icons[iconName] = requireIcons(iconPath).default || requireIcons(iconPath);
	});

	icons.menu = `
		<svg :style="{width: size + 'px', height: size + 'px'}">
			<line
				v-for="(order, index) in 4"
				:key="order"
				x1="0"
				:y1="size / 8 + (size / 4 * index)"
				:x2="size"
				:y2="size / 8 + (size / 4 * index)"
				stroke="currentColor"
				stroke-width="2"
			>
			</line>

			<line
				:x1="size / 2 - 0.5"
				:y1="size / 2 + 0.5"
				:x2="size - size / 8"
				:y2="size / 8"
				stroke="currentColor"
				stroke-width="2"
				:transform="\`translate(-\${size * 3 / 16}, 0)\`"
			>
			</line>

			<line
				:x1="size / 2 - 0.5"
				:y1="size / 2 - 0.5"
				:x2="size - size / 8"
				:y2="size - size / 8"
				stroke="currentColor"
				stroke-width="2"
				:transform="\`translate(-\${size * 3 / 16}, 0)\`"
			>
			</line>
		</svg>
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
				name: 'BaseIconIs' + upperFirst(camelCase(this.name)),
				computed: this.name === 'menu' ?
					{
						size() {
							return this.windowWidth <= 1120 ?
								24
								: 32;
						}
					}
					: {},
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
	* {
		pointer-events: none;
	}

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
			pointer-events: auto;
		}
	}

	.base-icon-is-menu {
		line {
			stroke-dasharray: 100%, 100%;
			transition: stroke-dashoffset, transform;
			transition-duration: 0.2s;
			transition-timing-function: linear;
			will-change: stroke-dashoffset, transform;
		}

		:root:not(.sidebar-open) & {
			line {
				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3),
				&:nth-child(4) {
					transition-delay: 0.2s;
				}

				&:nth-child(1) {
					stroke-dashoffset: 0;
				}

				&:nth-child(2) {
					stroke-dashoffset: 50%;
				}

				&:nth-child(3) {
					stroke-dashoffset: 10%;
				}

				&:nth-child(4) {
					stroke-dashoffset: 25%;
				}

				&:nth-child(5) {
					stroke-dashoffset: -100%;
				}

				&:nth-child(6) {
					stroke-dashoffset: -100%;
				}
			}
		}

		:root.sidebar-open & {
			line {
				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3),
				&:nth-child(4) {
					stroke-dashoffset: -100%;
				}

				&:nth-child(5),
				&:nth-child(6) {
					stroke-dashoffset: 0;
					transition-delay: 0.2s;
				}
			}
		}
	}
</style>
