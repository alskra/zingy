<i18n>
	{
		"en": {
			"share": "Share"
		},
		"ru": {
			"share": "Поделиться"
		}
	}
</i18n>

<template lang="pug">
	.app-share(
		:class="{'is-invert': invert}"
		@mouseenter="boxIsShown = true"
		@mouseleave="boxIsShown = false"
	)
		button.button(type="button")
			.button-text {{ $t('share') }}
			base-icon.button-icon(name="share")
			.button-counter {{ commonCountFormatted }}

		transition-slide-x(
			:duration="{enter: 600, leave: 500}"
		)
			.items-box(
				:class="{'is-invert': invert}"
				v-show="boxIsShown || windowWidth < 768"
			)
				.items
					.items-grid(:class="{'is-invert': invert}")
						.items-grid-cell(
							v-for="item of providers"
							:key="item.toLowerCase()"
						)
							.item(
								:is="'share-button-is-' + item.toLowerCase()"
								v-bind="$props"
								has_icon
								:title_social="''"
								:has_counter="false"
								@count-update="commonCount += $event"
								:title="item"
							)
</template>

<script>
	import {sliceThousandInt} from 'vue-goodshare/src/helpers/count_number';
	import ShareButtonIsVk from './ShareButtonIsVk';
	import ShareButtonIsFacebook from './ShareButtonIsFacebook';
	import ShareButtonIsTwitter from './ShareButtonIsTwitter';

	export default {
		name: 'AppShare',
		components: {
			ShareButtonIsVk,
			ShareButtonIsFacebook,
			ShareButtonIsTwitter
		},
		props: {
			invert: Boolean,
			page_url: String,
			page_title: String,
			page_description: String,
			page_image: String,
		},
		data() {
			return {
				boxIsShown: false,
				commonCount: 0,
				providers: [
					'VK',
					'Facebook',
					'Twitter'
				]
			};
		},
		computed: {
			commonCountFormatted() {
				const count = this.commonCount;

				return count >= 1000 ? sliceThousandInt(count) : count;
			}
		}
	};
</script>

<style scoped>
	.app-share {
		all: initial;

		& {
			display: inline-flex;
			box-sizing: border-box;
			vertical-align: top;
			max-width: 100%;
			user-select: none;
		}
	}

	.button {
		all: initial;

		& {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			flex-shrink: 0;
			padding: 0 10px;
			height: 34px;
			border: 1px solid #f0f0f0;
			background-color: #f0f0f0;
			cursor: pointer;
			overflow: hidden;
		}
	}

	.button-text {
		margin-right: 10px;
		color: #999999;
		font-family: var(--font-family);
		font-size: 14px;
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: calc(0.6 / 12 * 1em);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		@media (width < 768px) {
			display: none;
		}
	}

	.base-icon.button-icon {
		width: 24px;
		height: 24px;
		flex-shrink: 0;
		color: #c5c5c5;
	}

	.button-counter {
		margin-left: 10px;
		flex-shrink: 0;
		color: #999999;
		font-family: var(--font-family);
		font-size: 14px;
		font-weight: 500;
		line-height: 1.25;
	}

	.items-box {
		display: flex;
		justify-content: flex-end;
		overflow: hidden;

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;

			.items-grid-cell {
				transition: transform, opacity;
				transition-duration: 0.2s;
			}
		}

		&.v-enter-active {
			transition-delay: 0.1s;

			.items-grid-cell {
				transition-delay: 0.4s;
			}
		}

		&.v-leave-active {
			transition-delay: 0.2s;
		}

		&.v-enter,
		&.v-leave-to {
			width: 0 !important;

			.items-grid-cell {
				transform: translateX(-10px);
				opacity: 0;
			}
		}

		&.is-invert {
			order: -1;
			justify-content: flex-start;

			&.v-enter,
			&.v-leave-to {
				.items-grid-cell {
					transform: translateX(10px);
				}
			}
		}
	}

	.items {
		flex-shrink: 0;
		padding: 5px;
		background-color: #f0f0f0;
	}

	.items-grid {
		display: flex;
		justify-content: flex-end;
		margin: -5px;

		&.is-invert {
			justify-content: flex-start;
		}
	}

	.items-grid-cell {
		margin: 5px;
		flex-shrink: 0;
	}

	.share-button.item {

	}
</style>
