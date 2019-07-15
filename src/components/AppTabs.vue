<template lang="pug">
	.app-tabs(
		:set.prop=`(
			tabs = $getSlot('tabs'),
			activeTab = tabs[activeTabIndex].slots
		)`
	)
		.body
			.grid
				.grid-row
					.grid-cell

					.grid-cell
						.tabs-nav
							button.tabs-nav-item(
								v-for="({slots: {title}}, index) of tabs"
								:key="index"
								type="button"
								@click.prevent="activeTabIndex = index"
							) {{ $getText(title) }}

						.tabs
							.tabs-item
								.tabs-item-number {{ (activeTabIndex < 9 ? '0' : '') + (activeTabIndex + 1) }}

								.tabs-item-title(
									v-if="activeTab.title"
									:is="activeTab.title[0].tag"
								) {{ $getText(activeTab.title) }}

								base-content.tabs-item-content
									v-nodes(:vnodes="activeTab.content")
</template>

<script>
	export default {
		name: 'AppTabs',
		data() {
			return {
				activeTabIndex: 0
			};
		}
	};
</script>

<style scoped>
	.app-tabs {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
		}
	}
</style>
