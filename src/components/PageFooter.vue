<script>
	import SocialMedia from './SocialMedia';

	export default {
		name: 'PageFooter',
		data() {
			return {
				navBoxHoverVisible: false
			};
		},
		components: {
			SocialMedia
		},
		methods: {
			onNavBoxItemMouseOver(event) {
				if (event.target.classList.contains('item')) {
					const hover = event.currentTarget.querySelector('.hover');

					clearTimeout(hover.hideTimer);
					hover.removeEventListener('transitionend', hover.onHide, false);

					Object.assign(hover.style, {
						display: 'block',
						top: event.target.offsetTop + 'px',
						height: event.target.offsetHeight + 'px'
					});

					hover.showTimer = requestAnimationFrame(() => hover.style.opacity = '1');
				}
			},
			onNavBoxItemMouseOut(event) {
				if (event.target.classList.contains('item')) {
					const hover = event.currentTarget.querySelector('.hover');

					cancelAnimationFrame(hover.showTimer);

					hover.onHide = () => {
						hover.removeEventListener('transitionend', hover.onHide, false);
						hover.style.display = '';
					};

					hover.addEventListener('transitionend', hover.onHide, false);

					hover.hideTimer = setTimeout(() => hover.style.opacity = '', 300);
				}
			}
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
			min-height: calc(396 / 1920 * 100vmax + 10vmax);
		}
	}

	.zingy-projects {
		width: calc(3983 / 1920 * 100vmax);
		height: calc(396 / 1920 * 100vmax);
		background: url("../assets/img/zingy-projects.png") no-repeat 50% 50% / contain;
		position: absolute;
		left: 0;
		margin-top: range(-15, -30);
		transform: translateX(4vw);
		animation: zingyprojects 90s linear infinite;

		@keyframes zingyprojects {
			2% {
				transform: translateX(4vw);
			}

			50% {
				transform: translateX(calc(-3983 / 1920 * 100vmax + 100vw - 4vw));
			}

			52% {
				transform: translateX(calc(-3983 / 1920 * 100vmax + 100vw - 4vw));
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
		line-height: 1.25;

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

	.nav-box {
		> .grid {
			display: flex;
			flex-flow: column;
			margin: -8px -10px;

			> .cell {
				margin: 8px 10px;

				> .item {
					color: #ffffff;
					font-family: var(--font-family, sans-serif);
					font-size: range(1.6rem, 1.8rem);
					font-weight: 300;
					line-height: 1.25;
					text-decoration: none;
					transition: color 0.2s;

					&:hover {
						color: #ec5151;
					}
				}
			}
		}

		&.-main {
			> .grid {
				@media (width < 768px) {
					flex-flow: row;
					flex-wrap: wrap;
				}

				> .cell {
					> .item {
						font-weight: 500;
					}
				}
			}
		}

		&.-section {
			position: relative;

			> .grid {
				> .cell {
					padding-left: 28px;

					> .item {
					}
				}
			}

			> .hover {
				display: none;
				opacity: 0;
				width: 3px;
				height: 28px;
				background-color: #e04b4a;
				position: absolute;
				top: 0;
				left: 0;
				transition-property: opacity, top, height;
				transition-duration: 0.3s;
			}
		}
	}
</style>
