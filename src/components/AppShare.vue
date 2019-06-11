<i18n>
	{}
</i18n>

<template lang="pug">
	.app-share(
		:class="{'is-invert': invert}"
		@mouseenter="boxIsShown = true"
		@mouseleave="boxIsShown = false"
	)
		button.button(type="button")
			.button-text Поделиться
			base-icon.button-icon(name="share")
			.button-counter {{ commonCountFormatted }}

		transition(
			@enter="setBoxWidth"
			@after-enter="resetBoxWidth"
			@before-leave="setBoxWidth"
			:duration="{enter: 500, leave: 500}"
		)
			.items-box(
				:class="{'is-invert': invert}"
				v-if="boxIsShown"
				v-dragscroll.x
				@dragscrollmove="preventClickOnScroll($event, $event.detail.deltaX)"
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
	import {preventClickOnScroll} from '../helpers';
	import {sliceThousandInt} from "vue-goodshare/src/helpers/count_number";
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
		},
		methods: {
			setBoxWidth(el) {
				el.style.width = el.children[0].offsetWidth + 'px';
			},
			resetBoxWidth(el) {
				el.style.width = '';
			},
			preventClickOnScroll,
			onDocumentClick(evt) {
				if (this.$el !== evt.target && !this.$el.contains(evt.target)) {
					this.boxIsShown = false;
				}
			}
		},
		created() {
			document.addEventListener('click', this.onDocumentClick);
		},
		destroyed() {
			document.removeEventListener('click', this.onDocumentClick);
		}
	};
</script>

<style scoped>
	.app-share {
		all: initial;

		& {
			display: inline-flex;
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
		font-size: 12px;
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
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		color: #c5c5c5;
	}

	.button-counter {
		margin-left: 10px;
		flex-shrink: 0;
		color: #999999;
		font-family: var(--font-family);
		font-size: 12px;
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
			.items-grid-cell {
				transition-delay: 0.3s;
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
		/*background-color: #2575d5;*/
		/*width: 2000px;*/
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
