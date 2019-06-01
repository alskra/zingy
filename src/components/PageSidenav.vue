<script>
	export default {
		name: 'PageSidenav'
	};
</script>

<style scoped>
	.page-sidenav {
		all: initial;

		& {
			display: block;
		}
	}

	.header {
		position: relative;
		background-color: #cb5053;

		&::before {
			/*content: '';*/
			display: block;
			padding-top: 100%;
		}
	}

	.header-inner {
		/*position: absolute;*/
		/*top: 0;*/
		/*left: 0;*/
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: range(15px, 30px) range(10px, 20px);
	}

	.header-title {
		display: inline-block;
		vertical-align: top;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2.2rem, 2.4rem);
		font-weight: 500;
		line-height: 1.25;
		margin-bottom: 0.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 100%;

		&::after {
			content: '';
			display: block;
			height: 1px;
			background-color: #e4797b;
			margin-top: calc(3 / 24 * 1em);
		}
	}

	.header-desc {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.5;
	}

	.main {
		padding: range(10px, 20px);
		background-color: #ffffff;
	}

	.main-inner {
		margin: 0 range(-10px, -20px);
	}

	.nav-item {
		display: block;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;
		padding: range(5px, 10px) range(10px, 20px);
		overflow: hidden;
		text-overflow: ellipsis;

		&:hover {
			.nav-item-text {
				background-size: 100% 1px;
			}
		}
	}

	.nav-item-text {
		display: inline;
		background: linear-gradient(to right, var(--color-link), var(--color-link)) no-repeat 0 100% / 0 1px;
		transition: background-size 0.2s;
	}
</style>
