<script>
	import SocialMedia from './SocialMedia';
	import AppPageFooterNav from './AppPageFooterNav';
	import {AppPageFooterNavOfSection} from './AppPageFooterNav';

	export default {
		name: 'AppPageFooter',
		components: {
			SocialMedia,
			AppPageFooterNav,
			AppPageFooterNavOfSection
		}
	};
</script>

<style scoped>
	.AppPageFooter {
		all: initial;

		& {
			display: block;
			padding: range(50, 100) 0;
			background-color: #222222;
			position: relative;
			min-height: calc(396 / 1920 * 100vmax + 5vw);
			overflow: hidden;

			@media (width >= 1920px) {
				min-height: calc(396px + 5vw);
			}
		}
	}

	.content {
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
		z-index: 1;
	}

	.zingy-projects {
		display: flex;
		position: absolute;
		left: 0;
		margin-top: range(-15, -30);
		animation: zingy-projects_run 60s linear infinite;
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

	.zingy-projects-item {
		width: calc(3983 / 1920 * 100vmax + 8vmax);
		height: calc(396 / 1920 * 100vmax);
		flex-shrink: 0;
		background: url("../assets/img/zingy-projects.png") no-repeat 50% 50% / contain;

		@media (width >= 1920px) {
			width: calc(3983px + 8 / 100 * 1920px);
			height: 396px;
		}
	}

	.content-grid {
		display: flex;
		flex-wrap: wrap;
		margin: -15px -10px;
		position: relative;
		align-items: baseline;
	}

	.content-grid-item {
		width: calc(25% - 20px);
		margin: 15px 10px;

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

	.contacts-grid {
		display: flex;
		flex-flow: column;
		height: 100%;

		@media (width < 1024px) {
			flex-flow: row;
			flex-wrap: wrap;
			align-items: flex-end;
			margin: -15px -10px;
		}
	}

	.contacts-grid-item {
		&:nth-child(3) {
			margin-top: auto;
		}

		@media (width >= 1024px) {
			&:nth-child(2) {
				margin: range(30, 60) 0;
			}
		}

		@media (width < 1024px) {
			margin: 15px 10px;
			width: calc(percentage(1 / 3) - 20px);

			.SocialMedia {
				--v-social-media_justify-content: center;
			}

			&:nth-child(3) {
				margin-top: 0;
			}
		}

		@media (width < 768px) {
			width: calc(100% - 20px);
		}
	}

	.text {
		color: #494848;
		font-family: var(--font-family, sans-serif);
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
			font-weight: 500;
			padding-bottom: 1px;
			transition: background-size 0.2s;
			background: linear-gradient(#ec5151, #ec5151) no-repeat 0 100% / 0 2px;

			&:hover {
				background-size: 100% 2px;
			}
		}

		@media (width < 768px) {
			text-align: center;
		}
	}

	.text-is-copyright {
		@media (768px <= width < 1024px) {
			text-align: right;
		}
	}
</style>
