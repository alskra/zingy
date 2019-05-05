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

		> .row {
			display: flex;
			flex-wrap: wrap;
			margin: -10px -15px;
		}

		> .row > .col {
			margin: 10px 15px;
			width: range(calc(38 / 1.5), 38);
			height: range(calc(38 / 1.5), 38);
		}

		&.-justify-center {
			> .row {
				@media (width < 1024px) {
					justify-content: center;
				}
			}
		}
	}

	.item {
		display: block;
		width: 100%;
		height: 100%;
		color: #1a1a1a;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			color: white;
		}

		> .base-icon-svg {
			width: 100%;
			height: 100%;
		}
	}
</style>
