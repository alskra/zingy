<script>
	import {preventClickOnScroll} from '../helpers';

	export default {
		name: 'SideNav',
		methods: {
			preventClickOnScroll
		}
	};
</script>

<style scoped>
	.side-nav {
		all: initial;

		& {
			display: block;
		}
	}

	.header {
		position: relative;
		color: #cb5053;
		background-color: currentColor;

		&::before {
			/*content: '';*/
			display: block;
			padding-top: 100%;
		}

		&::after {
			content: '';
			position: absolute;
			top: 100%;
			left: range(10px, 20px);
			border-top: range(5px, 10px) solid currentColor;
			border-left: range(5px, 10px) solid transparent;
			border-right: range(5px, 10px) solid transparent;
			pointer-events: none;
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
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2rem, 2.4rem);
		font-weight: 500;
		line-height: 1.25;
		margin-bottom: 0.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-bottom: 3px;
	}

	.header-title-text {
		display: inline;
		background: linear-gradient(to right, #e4797b, #e4797b) no-repeat 0 100% / 100% 1px;
		padding-bottom: 3px;
	}

	.header-desc {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.6rem);
		font-weight: 400;
		line-height: 1.5;
	}

	.main {
		padding: range(10px, 20px);
		background-color: var(--side-nav_background-color, #f0f0f0);
	}

	.main-inner {
		margin: 0 range(-10px, -20px);

		@media (width < 1024px) {
			margin: range(-10px, -20px);
			display: flex;
			overflow: hidden;
		}
	}

	.nav-item {
		display: block;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;
		padding: range(6px, 13px) range(10px, 20px);
		overflow: hidden;
		text-overflow: ellipsis;

		&:hover,
		&.is-active {
			.nav-item-text {
				background-size: 100% 1px;
			}
		}

		@media (width < 1024px) {
			flex-shrink: 0;
			padding-top: range(15px, 20px);
			padding-bottom: range(15px, 20px);
		}
	}

	.nav-item-text {
		display: inline;
		background: linear-gradient(to right, var(--color-link), var(--color-link)) no-repeat 0 100% / 0 1px;
		padding-bottom: 1px;
		transition: background-size 0.2s;
	}

	.side-nav-wide {
		@media (width < 1024px) {
			margin: 0 calc(-1 * var(--grid_padding));
		}

		.header-inner {
			@media (width < 1024px) {
				padding-right: var(--grid_padding);
				padding-left: var(--grid_padding);
			}
		}
	}
</style>
