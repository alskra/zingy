<script>
	import SocialLinks from './SocialLinks';
	import AppFooterNav from './AppFooterNav';
	import AppFooterNavOfSection from './AppFooterNavOfSection';

	export default {
		name: 'AppFooter',
		components: {
			SocialLinks,
			AppFooterNav,
			AppFooterNavOfSection
		}
	};
</script>

<style scoped>
	.app-footer {
		all: initial;

		& {
			display: block;
			padding: range(40px, 80px) 0;
			background-color: #222222;
			position: relative;
			min-height: calc(396 / 1920 * 100vmax + 5vw);
			overflow: hidden;
		}

		@media (width >= 1920px) {
			min-height: calc(396px + 5vw);
		}
	}

	.grid {
		box-sizing: border-box;
		padding: 0 var(--grid_padding);
		max-width: env(--max-breakpoint);
		margin: 0 auto;
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 range(25px, 50px);
		position: relative;
		z-index: 1;
	}

	.zingy-projects {
		display: flex;
		position: absolute;
		left: 0;
		margin-top: range(-15px, -30px);
		animation: zingy-projects_run 180s linear infinite;
		pointer-events: none;

		@keyframes zingy-projects_run {
			100% {
				transform: translateX(calc(-3983 / 1920 * 100vmax - 8vmax));
			}
		}

		@media (width >= 1920px) {
			animation-name: zingy-projects_run-for-large-screen;
		}

		@keyframes zingy-projects_run-for-large-screen {
			100% {
				transform: translateX(calc(-3983px - 8 / 100 * 1920px));
			}
		}
	}

	.zingy-projects-copy {
		width: calc(3983 / 1920 * 100vmax + 8vmax);
		height: calc(396 / 1920 * 100vmax);
		flex-shrink: 0;
		background: url("../assets/img/zingy-projects.png") no-repeat 50% 50% / contain;

		@media (width >= 1920px) {
			width: calc(3983px + 8 / 100 * 1920px);
			height: 396px;
		}
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin: -15px var(--grid-row_margin);
		position: relative;
		align-items: baseline;
	}

	.grid-cell {
		margin: 15px var(--grid-cell_padding);
		width: calc(25% - 2 * var(--grid-cell_padding));

		&:nth-child(1) {
			align-self: stretch;
		}

		@media (width < 1024px) {
			&:not(:first-child) {
				order: -1;
			}
		}

		@media (768px <= width < 1024px) {
			&:first-child {
				width: calc(100% - 2 * var(--grid-cell_padding));
			}

			&:not(:first-child) {
				width: calc(percentage(1 / 3) - 2 * var(--grid-cell_padding));
			}
		}

		@media (width < 768px) {
			&:nth-child(1),
			&:nth-child(2) {
				width: calc(100% - 2 * var(--grid-cell_padding));
			}

			&:nth-child(3),
			&:nth-child(4) {
				width: calc(50% - 2 * var(--grid-cell_padding));
			}
		}
	}

	.contacts-grid {
		display: flex;

		@media (width >= 1024px) {
			flex-flow: column;
			height: 100%;
		}

		@media (width < 1024px) {
			flex-wrap: wrap;
			align-items: flex-end;
			margin: -15px var(--grid-row_margin);
		}
	}

	.contacts-grid-cell {
		@media (width >= 1024px) {
			&:nth-child(2) {
				margin: range(30px, 60px) 0;
			}

			&:nth-child(3) {
				margin-top: auto;
			}
		}

		@media (width < 1024px) {
			margin: 15px var(--grid-cell_padding);
			width: calc(percentage(1 / 3) - 2 * var(--grid-cell_padding));

			&:nth-child(2) {
				align-self: center;
			}
		}

		@media (width < 768px) {
			width: calc(100% - 2 * var(--grid-cell_padding));
		}
	}

	.social-links.social {
		@media (width < 1024px) {
			--social-links_justify-content: center;
		}
	}

	.content {
		color: #494848;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 300;
		line-height: 1.5;

		>>> p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1em;
			}
		}

		>>> a {
			color: #ffffff;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		>>> small {
			font-size: 0.8em;
		}

		@media (width < 768px) {
			text-align: center;
		}
	}

	.content-is-contacts {
		>>> a {
			color: #ffffff;
			text-decoration: none;
			font-weight: 500;
			padding-bottom: 1px;
			transition: background-size 0.2s;
			background: linear-gradient(var(--color-link), var(--color-link)) no-repeat 0 100% / 0 2px;

			&:hover {
				text-decoration: none;
				background-size: 100% 2px;
			}
		}
	}

	.content-is-copyright {
		@media (768px <= width < 1024px) {
			text-align: right;
		}
	}
</style>
