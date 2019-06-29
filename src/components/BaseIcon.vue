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
		<svg viewBox="0 0 32 32">
			<line
				v-for="(order, index) in 4"
				:key="order"
				x1="1.5"
				:y1="2.5 + (9 * index)"
				x2="30.5"
				:y2="2.5 + (9 * index)"
				stroke="currentColor"
				stroke-width="3"
				shape-rendering="auto"
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
			}

			&:hover {
				line {
					&:nth-child(1) {
						stroke-dashoffset: 25%;
					}

					&:nth-child(2) {
						stroke-dashoffset: 10%;
					}

					&:nth-child(3) {
						stroke-dashoffset: 50%;
					}

					&:nth-child(4) {
						stroke-dashoffset: 0;
					}
				}
			}
		}

		:root.sidebar-open & {
			line {
				&:nth-child(2),
				&:nth-child(3) {
					visibility: hidden;
				}

				&:nth-child(1),
				&:nth-child(4) {
				}

				&:nth-child(1) {
					transform-origin: 32px 2.5px;
					transform: translate(-8.5px, 0px) rotate(-45deg);
					stroke-dashoffset: -10px;
				}

				&:nth-child(4) {
					transform-origin: 32px 29.5px;
					transform: translate(-8.5px, 0px) rotate(45deg);
					stroke-dashoffset: -10px;
				}
			}
		}
	}
</style>
