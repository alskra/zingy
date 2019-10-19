<template lang="pug">
	.app-tariffs
		.grid
			.grid-row
				.grid-cell(
					v-for="({tag, slots: {title, description, price, sections, button}}, index) of $getSlot('tariffs')"
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

								.tariff-price(v-if="price") {{ $getText(price) }}

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

							.tariff-footer
								base-button.button(
									tag="a"
									@click.prevent="$root.showModalFeedback"
								) {{ $getText(button) }}
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
		margin: range(-10px, -20px);
		flex-flow: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(10px, 20px);
		flex: 1 1 360px;
		min-width: 0;
	}

	.tariff {
		display: flex;
		box-sizing: border-box;
		position: relative;
		margin: 0;
		height: 100%;
		flex-flow: column;
		color: var(--color);
		font-family: var(--font-family);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: range(11px, 22px);
			left: range(6px, 12px);
			background-color: var(--color-accent);
		}
	}

	.tariff-body {
		display: flex;
		box-sizing: border-box;
		position: relative;
		margin: range(4px, 8px) range(4px, 8px) 0 0;
		padding: range(25px, 50px) range(10px, 35px);
		flex: 0 1 100%;
		flex-flow: column;
		background-color: #f0f0f0;
	}

	.tariff-header {
		margin-bottom: range(15px, 30px);
	}

	.tariff-title {
		margin: 0;
		font-size: range(2.2rem, 2.4rem);
		font-weight: 700;
		line-height: 1.25;
	}

	.tariff-description {
		margin: range(10px, 20px) 0 0;
		color: #888787;
		font-size: range(1.6rem, 1.8rem);
		line-height: 1.25;

		p {
			display: inline;
		}
	}

	.tariff-price {
		margin: range(15px, 30px) 0 0 0;
		padding-left: 10px;
		font-size: range(3rem, 3.6rem);
		font-weight: 700;
		line-height: 1.25;
	}

	.tariff-main {
		margin-bottom: auto;
	}

	.tariff-section-title {
		margin: 0 0 var(--base-content_margin-y);
		color: #888787;
		font-size: range(1.6rem, 1.8rem);
		line-height: var(--line-height);
	}

	.tariff-section-content {
		padding-left: range(15px, 30px);
	}

	.tariff-footer {
		display: flex;
		margin-top: range(25px, 50px);
		flex-flow: column;
	}

	.base-button.button {
		margin: 0 auto;
		width: 300px;
	}
</style>
