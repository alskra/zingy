<script>
	export default {
		name: 'DList'
	};
</script>

<style scoped>
	.d-list {
		display: flex;
		flex-flow: column;
		position: relative;
		overflow: hidden;
	}

	.d-list-inner {
		display: flex;
		flex-flow: column;
		padding: 0;
		margin: scale-down(-15px, 0.8);
	}

	.item {
		list-style: none;
		display: flex;
		align-items: baseline;
		margin: scale-down(15px, 0.8);
		cursor: default;
	}

	.item-number {
		box-sizing: border-box;
		width: scale-down(100px, 0.5);
		flex-shrink: 0;
		padding: 0 5px;
		color: #5c5c5c;
		font-family: var(--font-family);
		font-size: scale-down(18px, 0.8);
		font-weight: 400;
		line-height: 1.25;
		text-align: center;
	}

	.item-body {
		flex-grow: 1;
		overflow: hidden;
	}

	.item-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: scale-down(24px, 0.8);
		font-weight: 400;
		line-height: 1.25;
		margin: 0 0 0.5em;
	}

	.nav {
		padding-left: 0;
	}

	.nav-item {
		display: inline;
		color: var(--color-link);
		font-family: var(--font-family);
		font-size: range(12px, 13px);
		font-weight: 400;
		line-height: 1.25;

		& + .nav-item {
			&::before {
				content: '/\00A0';

			}
		}
	}

	.nav-link {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
