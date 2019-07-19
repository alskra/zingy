<template lang="pug">
	.factors-list
		.grid
			.grid-row
				.grid-cell(
					v-for=`
						(
							{
								tag,
								slots: {
									title,
									description
								}
							},
							index
						) of factors
					`
					:key="index"
				)
					.factor(
						:is="tag"
					)
						.factor-body
							.factor-header
								.factor-title(
									v-if="title"
									:is="title[0].tag"
								) {{ getText(title) }}

							.factor-main
								.factor-description(v-if="description")
									v-nodes(:vnodes="description")

						.factor-number {{ index + 1 }}
</template>

<script>
	import {
		getScopedSlot as getSlot,
		getVNodesTextContent as getText
	} from '../plugins/vue-utilities/vue-utilities';

	export default {
		name: 'FactorsList',
		computed: {
			factors() {
				return getSlot(this.$scopedSlots.factors);
			}
		},
		methods: {
			getText
		}
	};
</script>

<style scoped>
	.factors-list {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.grid {
		display: flex;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;

		@media (width >= 1440px) {
			max-width: calc(var(--grid_width) + 200px);
		}
	}

	.grid-row {
		display: flex;
		margin: range(-5px, -20px);
		flex-wrap: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(5px, 20px);
		/*flex: 0 0 percentage(1 / 3);*/
		flex: 1 1 400px;
		min-width: 0;
	}

	.factor {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: range(15px, 25px) range(10px, 30px);
			height: 100%;
			color: #ffffff;
			font-family: var(--font-family);
			background-color: #2a2c2b;
		}

		&:hover {
			.factor-number {
				transition: transform 0.8s 0.1s;
				transform: perspective(50px) rotateY(360deg);
			}
		}
	}

	.factor-body {
		box-sizing: border-box;
		flex: 0 1 100%;
		min-width: 0;
	}

	.factor-header {
		display: flex;
		margin-bottom: range(10px, 20px);
		flex-flow: column;
	}

	.factor-title {
		box-sizing: border-box;
		margin: 0 auto 0 range(-4px - 10px, -8px - 30px);
		padding: range(4px, 8px) range(4px + 10px, 8px + 30px);
		max-width: calc(100% + range(4px + 10px, 8px + 30px));
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		background-color: var(--color-accent);
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.factor-main {
		display: flex;
	}

	.factor-description {
		box-sizing: border-box;
		flex: 0 1 100%;
		min-width: 0;
		font-size: range(1.4rem, 1.6rem);
		line-height: var(--line-height);

		p {
			display: inline;
		}
	}

	.factor-number {
		box-sizing: border-box;
		margin: auto 0 auto range(10px, 30px);
		flex: 0 0 auto;
		min-width: 0;
		font-size: range(3.8rem, 4.0rem);
		font-weight: 700;
		line-height: 1.25;
		transform: perspective(50px);
	}
</style>
