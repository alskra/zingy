<script>
	export default {
		name: 'VSociallinks'
	};
</script>

<style>
	:root {
		--v-sociallinks__justify-content: flex-start;
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
		justify-content: var(--v-sociallinks__justify-content);
		margin: -10px -15px;

		&-item {
			margin: 10px 15px;
		}
	}

	.linkitem {
		display: block;
		width: range(calc(38 / 1.5), 38);
		height: range(calc(38 / 1.5), 38);
		text-decoration: none;
	}
</style>
