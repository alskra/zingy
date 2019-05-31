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
		padding: range(15px, 25px) range(10px, 20px);
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2.2rem, 2.4rem);
		font-weight: 500;
		line-height: 1.25;
		margin-bottom: 0.5em;
		overflow: hidden;
		text-overflow: ellipsis;

		&::after {
			content: '';
			display: block;
			height: 1px;
			background-color: #e4797b;
			margin-top: calc(3 / 24 * 1em);
		}
	}

	.desc {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.5;
	}
</style>
