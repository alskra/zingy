<template lang="pug">
	.app-item-faq(
		:set.prop=`(
			title = item.slots.title,
			content = item.slots.content
		)`
		:is="item.tag"
	)
		.header(
			tabindex="0"
			@click.prevent="expanded = !expanded"
			@keyup.enter="expanded = !expanded"
		)
			.title(
				v-if="title"
				:is="title[0].tag"
			) {{ $getText(title) }}

			.icon-box
				transition
					base-icon.icon(
						:key="iconName"
						:name="iconName"
					)

		.main-box(
			v-if="content"
			v-show-slide="expanded"
		)
			.main
				base-content.content(v-if="content")
					v-nodes(:vnodes="content")
</template>

<script>
	export default {
		name: 'AppFaqItem',
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				expanded: false
			};
		},
		computed: {
			iconName() {
				return this.expanded ? 'close-circle' : 'drawing';
			}
		}
	};
</script>

<style scoped>
	.app-item-faq {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
			background-color: #f0f0f0;
		}
	}

	.header {
		display: flex;
		box-sizing: border-box;
		padding: range(10px, 20px) range(10px, 15px) range(10px, 20px) range(10px, 40px);
		cursor: pointer;
	}

	.title {
		box-sizing: border-box;
		margin: auto 0;
		flex: 0 1 100%;
		min-width: 0;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.8rem, 2.2rem);
		font-weight: 500;
		line-height: 1.25;
	}

	.icon-box {
		position: relative;
		margin-left: range(10px, 15px);
		flex: 0 0 range(28px, 36px);
		height: range(28px, 36px);
		min-width: 0;
		color: var(--color-accent);
	}

	.base-icon.icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.main {
		box-sizing: border-box;
		padding: 0 range(10px, 40px) range(20px, 40px) range(20px, 60px);
	}
</style>
