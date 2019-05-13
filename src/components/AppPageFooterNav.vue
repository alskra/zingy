<script>
	export default {
		name: 'AppPageFooterNav'
	};
</script>

<style scoped>
	.AppPageFooterNav {
		all: initial;

		& {
			display: block;
		}
	}

	.l-grid {
		display: flex;
		flex-flow: column;
		margin: 0 -10px;

		@media (width < 768px) {
			flex-flow: row;
			flex-wrap: wrap;
		}
	}

	.l-grid-item {
		margin: 0 10px;
		display: flex;
	}

	.nav-item {
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 8px 0;
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;

		&:hover {
			.nav-item-text {
				background-size: 100% 2px;
			}
		}
	}

	.nav-item-text {
		padding-bottom: 1px;
		transition: background-size 0.2s;
		background: linear-gradient(#ec5151, #ec5151) no-repeat 0 100% / 0 2px;
	}
</style>
