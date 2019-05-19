<template lang="pug">
	BaseIcon.BaseIcon(
		inline-template
		v-bind="$props"
		:class="iconName + '-icon'"
		role="img"
	)
		template(v-if="socialIconsNames.indexOf(iconName) !== -1")
			svg(
				:class="['social-icon', `social-icon-is-${iconName}`]"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			)
				//-title {{ iconName }} icon

				rect(
					class="social-icon-default-fill"
					:clip-path="`url(#${iconName}-icon-clip)`"
				)

				rect(
					class="social-icon-hover-fill"
					:clip-path="`url(#${iconName}-icon-clip)`"
				)

				clipPath(
					:id="`${iconName}-icon-clip`"
					v-html="socialIcons[iconName]"
				)

		template(v-else-if="iconName === 'zingy'")
			include ../assets/img/icons/zingy.svg

		template(v-else-if="iconName === 'menu'")
			span
				span.menu-icon-line
				span.menu-icon-line
				span.menu-icon-line
				span.menu-icon-line

		template(v-else-if="iconName === 'lang'")
			include ../assets/img/icons/lang.svg

		template(v-else-if="iconName === 'phone-square'")
			include ../assets/img/icons/phone-square.svg

		template(v-else-if="iconName === 'phone'")
			include ../assets/img/icons/phone.svg

		template(v-else-if="iconName === 'globe'")
			include ../assets/img/icons/globe.svg

		template(v-else-if="iconName === 'envelope'")
			include ../assets/img/icons/envelope.svg

		template(v-else-if="iconName === 'open-quote'")
			include ../assets/img/icons/open-quote.svg

		template(v-else-if="iconName === 'arrow-right'")
			include ../assets/img/icons/arrow-right.svg
</template>

<script>
	export default {
		name: 'BaseIcon',
		props: {
			iconName: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				socialIcons: {
					'vk': '<path d="M11.701 18.771h1.437s.433-.047.654-.284c.21-.221.21-.63.21-.63s-.031-1.927.869-2.21c.887-.281 2.012 1.86 3.211 2.683.916.629 1.605.494 1.605.494l3.211-.044s1.682-.105.887-1.426c-.061-.105-.451-.975-2.371-2.76-2.012-1.861-1.742-1.561.676-4.787 1.469-1.965 2.07-3.166 1.875-3.676-.166-.48-1.26-.361-1.26-.361l-3.602.031s-.27-.031-.465.09c-.195.119-.314.391-.314.391s-.572 1.529-1.336 2.82c-1.623 2.729-2.268 2.879-2.523 2.699-.604-.391-.449-1.58-.449-2.432 0-2.641.404-3.75-.781-4.035-.39-.091-.681-.15-1.685-.166-1.29-.014-2.378.01-2.995.311-.405.203-.72.652-.539.675.24.03.779.146 1.064.537.375.506.359 1.636.359 1.636s.211 3.116-.494 3.503c-.495.262-1.155-.28-2.595-2.756-.735-1.26-1.291-2.67-1.291-2.67s-.105-.256-.299-.406c-.227-.165-.557-.225-.557-.225l-3.435.03s-.51.016-.689.24c-.166.195-.016.615-.016.615s2.686 6.287 5.732 9.453c2.79 2.902 5.956 2.715 5.956 2.715l-.05-.055z"/>',
					'facebook': '<path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>',
					'twitter': '<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>',
					'google+': '<path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.414 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.184v2.184h2.189V13.09H24"/>',
					'instagram': '<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>'
				}
			};
		},
		computed: {
			socialIconsNames() {
				return Object.keys(this.socialIcons);
			}
		}
	};
</script>

<style scoped>
	.BaseIcon {
		all: initial;

		& {
			display: block;
			width: 100%;
			height: 100%;
			color: inherit;
			cursor: inherit;
			fill: currentColor;
		}

		> * {
			pointer-events: none;
		}

		title {
			display: none;
		}

		&:hover {
			.social-icon-hover-fill {
				width: 100%;
			}
		}

		&.is-sidebar-opened {
			.menu-icon-line {
				&:nth-child(2),
				&:nth-child(3) {
					display: none;
				}

				&:nth-child(1),
				&:nth-child(4) {
					width: 100%;
					transform-origin: 50% 50%;
					top: 50%;
					margin-top: percentage(-1 / 44);
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

	.social-icon-default-fill,
	.social-icon-hover-fill {
		height: 100%;
	}

	.social-icon-default-fill {
		width: 100%;
		color: #1a1a1a;
	}

	.social-icon-hover-fill {
		width: 0;
		color: #ec5151;
		transition: width 0.2s;
	}

	.menu-icon {
		position: relative;
	}

	.menu-icon-line {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: percentage(3 / 44);
		background-color: currentColor;

		&:nth-child(1) {
			top: percentage(6 / 44);
			width: 57%;
		}

		&:nth-child(2) {
			top: percentage(16 / 44);
			width: 91%;
		}

		&:nth-child(3) {
			top: percentage(26 / 44);
			width: 34%;
		}

		&:nth-child(4) {
			top: percentage(36 / 44);
			width: 68%;
		}
	}
</style>
