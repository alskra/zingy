<script>
	import VSociallinks from './VSociallinks';
	import AppPageFooterNav from './AppPageFooterNav';
	import AppPageFooterNavOfSection from './AppPageFooterNavOfSection';

	export default {
		name: 'AppPageFooter',
		components: {
			VSociallinks,
			AppPageFooterNav,
			AppPageFooterNavOfSection
		}
	};
</script>

<style scoped>
	.app-page-footer {
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

	.contentbox {
		padding: 0 range(10, 110);
		box-sizing: border-box;
		max-width: 1920px;
		margin: 0 auto;
	}

	.heading {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(calc(4.8rem / 1.5), 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 range(30, 60);
		position: relative;
	}

	.zingyprojects {
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

	.contentgrid {
		display: flex;
		flex-wrap: wrap;
		margin: -15px -10px;
		position: relative;
		align-items: baseline;

		&-item {
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
	}

	.contactsgrid {
		@media (width < 1024px) {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin: -15px -10px;
		}

		&-item {
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

			.v-sociallinks {
				@media (width < 1024px) {
					--v-sociallinks__justify-content: center;
				}
			}
		}
	}

	.text {
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
	}

	.textcopyright {
		@media (768px <= width < 1024px) {
			text-align: right;
		}
	}
</style>
