<script>
	export default {
		name: 'VSociallinks'
	};
</script>

<style>
	:root {
		--v-sociallinks_justify-content: flex-start;
	}
</style>

<style scoped>
	.v-sociallinks {
		all: initial;

		& {
			display: block;
		}
	}

	.linksgrid {
		display: flex;
		flex-wrap: wrap;
		justify-content: var(--v-sociallinks_justify-content);
		margin: -10px -15px;
	}

	.linksgrid-item {
		margin: 10px 15px;
	}

	.linkitem {
		display: block;
		width: range(calc(38 / 1.5), 38);
		height: range(calc(38 / 1.5), 38);
		text-decoration: none;
		color: #1a1a1a;
		transition: filter 0.2s;

		&:hover {
			color: #ec5151;
			filter: drop-shadow(0 0 3px);
		}
	}
</style>
