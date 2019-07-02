<template lang="pug">
	section.fancy-section
		transition-box
			.body
				slot(name="title")
					h2.title

				style-scope
					slot(name="title")
						h2.title

				slot
</template>

<script>
	export default {
		name: 'FancySection',
		props: {
			foo: Object
		},
		data() {
			return {

			};
		}
	};
</script>

<style scoped>
	.fancy-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.body {
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
	}
</style>
