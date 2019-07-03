<i18n>
	{
		"en": {
			"prev": "Previous",
			"next": "Next"
		},
		"ru": {
			"prev": "Назад",
			"next": "Далее"
		}
	}
</i18n>

<template lang="pug">
	a.navigation-link(
		href=""
		:title="content"
		:class="`navigation-link-${direction}`"
	)
		base-icon.icon(name="angle-left")
		span.content {{ $t(direction) }}: {{ content }}
</template>

<script>
	import {getVNodesTextContent} from '../helpers';

	export default {
		name: 'NavigationLink',
		props: {
			direction: {
				type: String,
				default: 'prev'
			}
		},
		computed: {
			content() {
				if (this.$scopedSlots.default) {
					return getVNodesTextContent(this.$scopedSlots.default());
				}

				return null;
			}
		}
	};
</script>

<style scoped>
	.navigation-link {
		all: initial;

		& {
			display: inline-flex;
			box-sizing: border-box;
			vertical-align: top;
			max-width: 100%;
			align-items: center;
			color: #999999;
			cursor: pointer;
			transition: color 0.2s;
		}

		&:hover {
			color: var(--color-link);
		}
	}

	.base-icon.icon {
		flex-shrink: 0;
		width: 24px;
		height: 24px;
		/*color: inherit;*/
	}

	.content {
		/*color: inherit;*/
		max-width: 300px;
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

	.navigation-link-prev {
		.content {
			margin-left: 10px;
		}
	}

	.navigation-link-next {
		.base-icon.icon {
			order: 1;
			transform: rotate(180deg);
		}

		.content {
			margin-right: 10px;
		}
	}
</style>
