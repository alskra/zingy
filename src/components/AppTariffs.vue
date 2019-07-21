<template lang="pug">
	.app-tariffs
		.grid
			.grid-row
				.grid-cell(
					v-for="({tag, slots: {title, description, price, sections}}, index) of $getSlot('tariffs')"
					:key="index"
				)
					.tariff(:is="tag")
						.tariff-body
							.tariff-header
								.tariff-title(
									v-if="title"
									:is="title[0].tag"
								) {{ $getText(title) }}

								.tariff-description(v-if="description")
									v-nodes(:vnodes="description")

								.tariff-price(v-if="price")
									v-nodes(:vnodes="price")

							.tariff-main
								.tariff-section(
									v-for="({tag, slots: {title, content}}, index) of $filterTags(sections)"
									:key="index"
								)
									.tariff-section-title(
										v-if="title"
										:is="title[0].tag"
									) {{ $getText(title) }}

									base-content.tariff-section-content
										v-nodes(:vnodes="content")
</template>

<script>
	export default {
		name: 'AppTariffs'
	};
</script>

<style scoped>
	.app-tariffs {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}
</style>
