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
		},
		data() {
			return {
				navLength: 0,
				navActiveIndex: 0
			};
		},
		methods: {
			checkItem(val) {
				return this.windowWidth < 768 ? true : Math.floor(val / 2) === this.navActiveIndex;
			},
			checkLength() {
				this.navLength = Math.ceil(this.$el.querySelectorAll('.grid-cell-of-nav').length / 2);
			},
			navPrev() {
				if (this.navActiveIndex > 0) this.navActiveIndex--;
				else this.navActiveIndex = this.navLength - 1;
			},
			navNext() {
				if (this.navActiveIndex < this.navLength - 1) this.navActiveIndex++;
				else this.navActiveIndex = 0;
			}
		},
		mounted() {
			this.checkLength();
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
		@keyframes zingy-projects_run {
			100% {
				transform: translateX(calc(-3983 / 1920 * 100vmax - 8vmax));
			}
		}

		display: flex;
		position: absolute;
		left: 0;
		margin-top: range(-15px, -30px);
		animation: zingy-projects_run 180s linear infinite;
		pointer-events: none;
		will-change: transform;

		@keyframes zingy-projects_run-for-large-screen {
			100% {
				transform: translateX(calc(-3983px - 8 / 100 * 1920px));
			}
		}

		@media (width >= 1920px) {
			animation-name: zingy-projects_run-for-large-screen;
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

	.nav-action {
		display: flex;
		position: relative;
		margin-bottom: range(20px, 40px);
		justify-content: flex-end;
	}

	.nav-button {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			width: range(24px, 40px);
			height: range(24px, 40px);
			cursor: pointer;
			justify-content: center;
			align-items: center;
			color: white;
		}
	}

	.nav-button-next {
		transform: rotateY(180deg);
	}

	.nav-button-icon {

	}

	.grid-row {
		display: flex;
		position: relative;
		margin: -15px var(--grid-row_margin);
		flex-flow: wrap;
		align-items: baseline;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: 15px var(--grid-cell_padding);
		flex: 0 0 25%;
		min-width: 0;
	}

	.grid-cell-of-contacts {
		align-self: stretch;

		@media (width < 1024px) {
			order: 1;
		}

		@media (768px <= width < 1024px) {
			flex-basis: 100%;
		}

		@media (width < 768px) {
			flex-basis: 100%;
		}
	}

	.grid-cell-of-main-nav {
		@media (768px <= width < 1024px) {
			flex-basis: percentage(1 / 3);
		}

		@media (width < 768px) {
			flex-basis: 100%;
		}
	}

	.grid-cell-of-nav {
		@media (width >= 768px) {

		}

		@media (768px <= width < 1024px) {
			flex-basis: percentage(1 / 3);
		}

		@media (width < 768px) {
			flex-basis: 50%;
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
