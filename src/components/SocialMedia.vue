<script>
	export default {
		name: 'SocialMedia'
	};
</script>

<style>
	:root {
		--v-social-media_justify-content: flex-start;
	}
</style>

<style scoped>
	.SocialMedia {
		all: initial;

		& {
			display: block;
		}
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: var(--v-social-media_justify-content);
		margin: -10px -15px;
	}

	.grid-item {
		margin: 10px 15px;
	}

	.media-item {
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
