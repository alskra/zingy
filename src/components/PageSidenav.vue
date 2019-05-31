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
		background-color: #cb5053;
		padding: range(20px, 40px) range(10px, 20px);
	}

	.title {
		display: inline-block;
		vertical-align: top;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2rem, 2.4rem);
		font-weight: 500;
		line-height: 1.25;
		margin-bottom: 10px;

		&::after {
			content: '';
			display: block;
			height: 1px;
			background-color: #e4797b;
			margin-top: 3px;
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
