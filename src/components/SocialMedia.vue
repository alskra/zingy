<script>
	export default {
		name: 'SocialMedia'
	};
</script>

<style scoped>
	.social-media {
		all: initial;

		& {
			display: block;
		}

		&.-justify-center {
			.boxgroup {
				@media (width < 1024px) {
					justify-content: center;
				}
			}
		}
	}

	.boxgroup {
		display: flex;
		flex-wrap: wrap;
		margin: -10px -15px;
	}

	.box {
		margin: 10px 15px;
	}

	.item {
		display: block;
		width: range(calc(38 / 1.5), 38);
		height: range(calc(38 / 1.5), 38);
		color: #1a1a1a;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			color: white;
		}

		.base-icon-svg {
			height: 100%;
		}
	}
</style>
