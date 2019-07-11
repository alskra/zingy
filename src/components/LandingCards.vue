<template lang="pug">
	.landing-cards
		.grid
			.grid-row
				.grid-cell(
					v-for="({tag, slots}, index) of cards"
					:key="index"
				)
					.card(
						:is="tag"
					)
</template>

<script>
	import {getScopedSlot} from '../helpers';

	export default {
		name: 'LandingCards',
		computed: {
			cards() {
				return getScopedSlot(this.$scopedSlots.cards);
			}
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
</style>
