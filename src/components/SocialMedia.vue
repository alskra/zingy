<script>
	export default {
		name: 'SocialMedia'
	};
</script>

<style scoped>
	.social-media {
		all: initial;
		display: block;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin: -10px -15px;

		&-col {
			margin: 10px 15px;
			width: range(calc(38 / 1.5), 38);
			height: range(calc(38 / 1.5), 38);
			flex-shrink: 0;
		}
	}

	.item {
		display: block;
		width: 100%;
		height: 100%;
		color: #1a1a1a;
		text-decoration: none;
		transition: color 0.2s;

		.base-icon-svg {
			width: 100%;
			height: 100%;
		}

		&:hover {
			color: white;
		}
	}
</style>
