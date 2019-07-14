<template lang="pug">
	.landing-cards
		.grid
			.grid-row
				.grid-cell(
					v-for=`({
						tag,
						data: {attrs = {}} = {},
						slots: {
							image,
							title,
							description,
							price,
							order,
							more
						}
					}, index) of cards`
					:key="index"
				)
					.card(
						:is="tag"
						:style="{backgroundColor: attrs['bg-color']}"
					)
						.card-image-box(v-if="image")
							img.card-image(
								v-bind="image[0].data.attrs"
							)

						.card-body
							.card-body-top
								.card-title(
									v-if="title"
									:is="title[0].tag"
								) {{ getText(title[0].children) }}

								.card-description(v-if="description")
									v-nodes(:vnodes="description")

							.card-body-bottom
								.card-price(v-if="price")
									v-nodes(:vnodes="price[0].children")

								base-button.is-block.wide.card-order-button(
									v-if="order"
									tag="a"
									v-bind="order[0].data.attrs"
								) {{ getText(order[0].children) }}

								a.card-more-link(
									v-if="more"
									v-bind="more[0].data.attrs"
								) {{ getText(more[0].children) }}
</template>

<script>
	import {
		getScopedSlot as getSlot,
		getVNodesTextContent as getText
	} from '../plugins/vue-utilities/vue-utilities';

	export default {
		name: 'LandingCards',
		computed: {
			cards() {
				return getSlot(this.$scopedSlots.cards);
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
		flex: 1 1 360px;
		min-width: 0;
	}

	.card {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			max-width: 100%;
			height: 100%;
			flex-flow: column;
			color: #ffffff;
			font-family: var(--font-family);
			background-color: #5f8896;
		}

		&:hover {
			.card-image {
				transform: scale(0.9);
			}
		}
	}

	.card-image-box {
		display: flex;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		opacity: 0.3;
	}

	.card-image {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		transform: scale(1.1);
		transition: transform 0.3s;
	}

	.card-body {
		display: flex;
		box-sizing: border-box;
		position: relative;
		padding: range(30px, 60px) range(10px, 30px);
		height: 100%;
		flex-flow: column;
		text-align: center;
	}

	.card-body-top {
		margin-bottom: range(30px, 60px);
	}

	.card-body-bottom {
		margin-top: auto;
	}

	.card-title {
		margin: 0 0 1em;
		font-size: scale-down(3.0rem, 0.8);
		font-weight: 700;
		line-height: 1.25;
		letter-spacing: calc(0.75 / 30 * 1em);
	}

	.card-description {
		font-size: range(1.4rem, 1.6rem);
		line-height: 1.6;

		p {
			margin: 0;
		}
	}

	.card-price {
		margin-bottom: range(20px, 40px);
		font-size: scale-down(3.6rem, 0.8);
		font-weight: 700;
		line-height: 1.25;
	}

	.base-button.card-order-button {
		--base-button_border-color: #ffffff;
		--base-button_background-color: transparent;
		--base-button-hover_color: #468296;
		--base-button-hover_background-color: #ffffff;

		margin: 0 auto range(20px, 20px) auto;
		max-width: 300px;
	}

	.card-more-link {
		padding-bottom: 2px;
		color: inherit;
		font-size: range(1.6rem, 1.8rem);
		font-weight: 300;
		line-height: 1.25;
		text-decoration: none;
		background: linear-gradient(to right, currentColor, currentColor) no-repeat 0 100% / 0 2px;
		transition: background-size 0.2s;

		&:hover {
			background-size: 100% 2px;
		}
	}
</style>
