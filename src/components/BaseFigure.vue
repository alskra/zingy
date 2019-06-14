<template lang="pug">
	figure.base-figure
		slot
			//- a.image-box
				//- .base-image.image

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

	.base-image.base-figure-image {
		width: 100%;
	}
</style>
