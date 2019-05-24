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

		template(v-else-if="iconName === 'youtube'")
			include ../assets/img/icons/youtube.svg

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

		template(v-else-if="iconName === 'star'")
			include ../assets/img/icons/star.svg

		template(v-else-if="iconName === 'laurel'")
			include ../assets/img/icons/laurel.svg
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
		width: 36px;
		height: 30px;

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
