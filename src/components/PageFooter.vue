<script>
	import SocialMedia from './SocialMedia';
	import PageFooterNav from './PageFooterNav';

	export default {
		name: 'PageFooter',
		components: {
			SocialMedia,
			PageFooterNav
		}
	};
</script>

<style scoped>
	.page-footer {
		all: initial;

		& {
			display: block;
			padding: range(50, 100) 0;
			background-color: #222222;
			position: relative;
			min-height: calc(396 / 1920 * 100vmax + 5vw);
			overflow: hidden;
		}
	}

	.zingy-projects {
		display: flex;
		width: calc(3983 / 1920 * 100vmax * 2 + 8vw * 2);
		height: calc(396 / 1920 * 100vmax);
		position: absolute;
		left: 0;
		margin-top: range(-15, -30);
		animation: zingyprojects 60s linear infinite;

		&::before,
		&::after {
			content: '';
			width: 50%;
			background: url("../assets/img/zingy-projects.png") no-repeat 50% 50% / contain;
		}

		@keyframes zingyprojects {
			100% {
				transform: translateX(calc(-3983 / 1920 * 100vmax - 8vw));
			}
		}
	}

	.content-box {
		padding: 0 range(10, 110);
		box-sizing: border-box;
		max-width: 1920px;
		margin: 0 auto;

		> .row {
			display: flex;
			flex-wrap: wrap;
			margin: -15px -10px;
			position: relative;
		}

		> .row > .col {
			width: calc(25% - 20px);
			margin: 15px 10px;

			@media (width < 1024px) {
				&:not(:first-child) {
					order: -1;
				}
			}

			@media (768px <= width < 1024px) {
				&:first-child {
					width: calc(100% - 20px);
				}

				&:not(:first-child) {
					width: calc(percentage(1 / 3) - 20px);
				}
			}

			@media (width < 768px) {
				&:nth-child(1),
				&:nth-child(2) {
					width: calc(100% - 20px);
				}

				&:nth-child(3),
				&:nth-child(4) {
					width: calc(50% - 20px);
				}
			}
		}

		> .row > .col:nth-child(1) > .row {
			@media (width < 1024px) {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				margin: -15px -10px;
			}
		}

		> .row > .col:nth-child(1) > .row > .col {
			@media (width >= 1024px) {
				&:nth-child(2) {
					margin: range(30, 60) 0;
				}
			}

			@media (width < 1024px) {
				margin: 15px 10px;
				width: calc(percentage(1 / 3) - 20px);
			}

			@media (width < 768px) {
				width: calc(100% - 20px);
			}
		}
	}

	.heading-box {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(calc(4.8rem / 1.5), 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 range(30, 60);
		position: relative;
	}

	.text-box {
		color: #494848;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 300;
		line-height: 1.5;

		@media (width < 768px) {
			text-align: center;
		}

		>>> p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1em;
			}
		}

		>>> a {
			color: #ffffff;
			text-decoration: none;
			font-weight: 500;
		}

		&.-copyright {
			@media (768px <= width < 1024px) {
				text-align: right;
			}
		}
	}
</style>
