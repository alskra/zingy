<template lang="pug">
	figure.base-figure
		slot
			//- a.image-box
				//- .base-image.base-figure-image

			//- figcaption.caption
</template>

<script>
	export default {
		name: 'BaseFigure'
	};
</script>

<style scoped>
	.base-figure {
		all: initial;

		& {
			display: block;
			box-sizing: border-box;
			max-width: 100%;
		}
	}

	.image-box {
		color: var(--color);
		text-decoration: none;
	}

	.base-image.base-figure-image {
		width: 100%;
	}

	.caption {
		margin-top: 10px;
		color: #999999;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-style: italic;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		>>> * {
			display: inline;
		}

		>>> a {
			color: var(--color-link);
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
