<template lang="pug">
	.order-section
		.image-box(v-if="image = $getSlot('image')")
			img.image(
				v-bind="image[0].data.attrs"
			)

		.body
			.grid
				.grid-row
					.grid-cell.grid-cell-7
						.title(
							v-if="title = $getSlot('title')"
							:is="title[0].tag"
						) {{ $getText(title) }}

						.content(v-if="content = $getSlot('content')")
							v-nodes(:vnodes="content")

						.footer
							base-button.button(
								tag="a"
								href=""
								@click.prevent="$root.showModalFeedback"
							) Заказать консультацию
</template>

<script>
	export default {
		name: 'OrderSection'
	};
</script>

<style scoped>
	.order-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			padding: range(0px, 70px) 0 range(0px, 115px);
			max-width: 100%;
			flex-flow: column;
			color: #ffffff;
			font-family: var(--font-family);
			background-color: white;
		}
	}

	.image-box {
		position: absolute;
		top: 0;
		left: calc(50% + range(0px, 200px));
		width: calc(50% - range(0px, 350px));
		height: 100%;
		background-color: #312783;

		@media (width < 1024px) {
			display: none;
		}
	}

	.image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.17;
	}

	.body {
		padding: range(40px, 120px) 0;
		background-color: #222222;
	}

	.grid {
		display: flex;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;
	}

	.grid-row {
		display: flex;
		margin: var(--grid-row_margin);
		flex-flow: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		flex: 0 0 100%;
		min-width: 0;
	}

	.grid-cell-7 {
		@media (width >= 1024px) {
			flex-basis: percentage(7 / 12);
		}
	}

	.title {
		margin: 0 0 range(15px, 30px);
		font-size: range(2.8rem, 3rem);
		font-weight: 500;
		line-height: 1.25;
	}

	.content {
		font-size: range(2rem, 2.2rem);
		line-height: var(--line-height);

		p {
			display: inline;
		}
	}

	.footer {
		display: flex;
		margin-top: range(30px, 60px);
		flex-flow: column;
	}

	.base-button.button {
		--base-button_background-color: var(--color-accent);

		width: 315px;

		@media (width < 1024px) {
			margin: 0 auto;
		}
	}
</style>
