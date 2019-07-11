<template lang="pug">
	.landing-cards
		.grid
			.grid-row
				.grid-cell(
					v-for=`({
						tag, slots: {
							title,
							description,
							price,
							'order-button': orderButton,
							'more-link': moreLink
						}
					}, index) of cards`
					:key="index"
				)
					.card(
						:is="tag"
					)
						.card-body
							.card-title(
								v-if="title"
								:is="title[0].tag"
							) {{ getText(title[0].children) }}

							.card-description(v-if="description")
								v-nodes(:vnodes="description")

							.card-price(v-if="price")
								v-nodes(:vnodes="price[0].children")

							base-button.card-order-button(v-if="orderButton") {{ getText(orderButton[0].children) }}

							a.card-more-link(
								v-if="moreLink"
								v-bind="moreLink[0].data.attrs"
							) {{ getText(moreLink[0].children) }}
</template>

<script>
	import {
		getScopedSlot,
		getVNodesTextContent as getText
	} from '../helpers';

	export default {
		name: 'LandingCards',
		computed: {
			cards() {
				return getScopedSlot(this.$scopedSlots.cards);
			}
		},
		methods: {
			getText
		}
	};
</script>

<style scoped>
	.landing-cards {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		flex: 0 0 20%;
		min-width: 0;
	}

	.card {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			height: 100%;
		}
	}
</style>
