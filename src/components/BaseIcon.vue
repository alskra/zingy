<template lang="pug">
	base-icon(
		inline-template
		v-bind="$props"
		:class="['host', 'base-icon', 'base-icon-is-' + iconName]"
		role="img"
	)
		template(v-if="iconName === 'vk'")
			include ../assets/img/icons/vk.svg

		template(v-else-if="iconName === 'facebook'")
			include ../assets/img/icons/facebook.svg

		template(v-else-if="iconName === 'twitter'")
			include ../assets/img/icons/twitter.svg

		template(v-else-if="iconName === 'yandex-zen'")
			include ../assets/img/icons/yandex-zen.svg

		template(v-else-if="iconName === 'instagram'")
			include ../assets/img/icons/instagram.svg

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

		template(v-else-if="iconName === 'chess'")
			include ../assets/img/icons/chess.svg
</template>

<script>
	export default {
		name: 'BaseIcon',
		props: {
			iconName: {
				type: String,
				required: true
			}
		}
	};
</script>

<style scoped>
	.base-icon {
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		overflow: hidden;
		color: inherit;
		cursor: inherit;
		fill: currentColor;

		> * {
			pointer-events: none;
		}
	}

	.base-icon-is-menu {
		position: relative;

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
						width: 90%;
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
					top: 50%;
					width: 100%;
					padding-left: 48%;
				}

				&:nth-child(1) {
					transform: translate(-25%, -50%) rotate(45deg);
				}

				&:nth-child(4) {
					transform: translate(-25%, -50%) rotate(-45deg);
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
						transform: translateY(-50%) rotate(45deg);
					}

					&:nth-child(4) {
						transform: translateY(-50%) rotate(-45deg);
					}
				}
			}
		}
	}

	.menu-icon-line {
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: currentColor;
		transform-origin: 50% 50%;
		background-clip: content-box;
		box-sizing: border-box;
		transition: all 0.2s;

		&:nth-child(1) {
			top: 0;
			width: 57%;
		}

		&:nth-child(2) {
			top: percentage(1 / 3);
			width: 91%;
			transform: translateY(-50%);
		}

		&:nth-child(3) {
			bottom: percentage(1 / 3);
			width: 34%;
			transform: translateY(50%);
		}

		&:nth-child(4) {
			bottom: 0;
			width: 68%;
		}
	}
</style>
