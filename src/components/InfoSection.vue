<template lang="pug">
	.info-section
		.body
			.image-box
				img.image(
					v-if="image = $getSlot('image')"
					v-bind="image[0].data.attrs"
				)

			.grid
				.title(
					v-if="title = $getSlot('title')"
					:is="title[0].tag"
				) {{ $getText(title) }}

				.grid-row
					.grid-cell(
						v-for="({tag, slots: {image, content}}, index) of $getSlot('items')"
						:key="index"
					)
						.item(:is="tag")
							.item-content(v-if="content")
								v-nodes(:vnodes="content")

							.item-image-box(v-if="image")
								base-image.item-image(
									v-bind="image[0].data.attrs"
									:width-ratio="479"
									:height-ratio="317"
								)
</template>

<script>
	export default {
		name: 'InfoSection'
	};
</script>

<style scoped>
	.info-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			padding: range(30px, 60px) 0;
			max-width: 100%;
			flex-flow: column;
			background-color: white;
		}
	}

	.body {
		position: relative;
		padding: range(30px, 60px) 0;
	}

	.image-box {
		position: absolute;
		top: 0;
		left: 0;
		width: range(100%, 60%);
		height: range(100%, 60%);
		pointer-events: none;

		&::before {
			content: '';
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(247, 247, 247, 0.93);
		}

		@media (width < 768px) {
			width: 100%;
			height: 100%;
		}
	}

	.image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.grid {
		display: flex;
		position: relative;
		z-index: 2;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;
	}

	.title {
		margin: 0 0 range(20px, 40px);
		border-left: 2px solid var(--color-accent);
		padding: 2px 0 2px 12px;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.3rem);
		line-height: 1.25;
		text-transform: uppercase;
	}

	.grid-row {
		display: flex;
		margin: range(-10px, -20px);
		flex-flow: wrap;
		justify-content: center;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(10px, 20px);
		flex: 0 0 percentage(6 / 12);
		min-width: 0;

		@media (width < 768px) {
			flex-basis: 100%;
		}
	}

	.item {
		display: flex;
		box-sizing: border-box;
		margin: 0;
		flex-flow: column;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(2rem, 2.4rem);
		line-height: var(--line-height);

		p {
			display: inline;
		}
	}

	.item-image-box {
		margin: range(20px, 40px) range(0px, -40px) 0 auto;
		width: 100%;
		max-width: 480px;

		@media (width < 768px) {
			margin-right: auto;
		}
	}

	.base-image.item-image {
		display: block;
		width: 100%;
	}
</style>
