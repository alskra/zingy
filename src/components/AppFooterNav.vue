<script>
	export default {
		name: 'AppFooterNav'
	};
</script>

<style scoped>
	.app-footer-nav {
		all: initial;

		& {
			display: block;
		}
	}

	.grid {
		display: flex;
		flex-flow: column;
		margin: 0 -10px;

		@media (width < 768px) {
			flex-flow: row;
			flex-wrap: wrap;
		}
	}

	.grid-cell {
		margin: 0 10px;
		display: flex;
	}

	.item {
		padding: 8px 0;
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;

		&:hover {
			.item-text {
				background-size: 100% 2px;
			}
		}
	}

	.item-text {
		padding-bottom: 1px;
		transition: background-size 0.2s;
		background: linear-gradient(#ec5151, #ec5151) no-repeat 0 100% / 0 2px;
	}
</style>
