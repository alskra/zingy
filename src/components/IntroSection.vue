<script>
	import VueSticky from './VueSticky';
	import AppModal from './AppModal';

	export default {
		name: 'IntroSection',
		data() {
			return {
				isSupportClipPath: document.documentElement.style.clipPath !== undefined
			}
		},
		computed: {
			scrollStickyBottom() {
				const bottom = 40 + 40 / 1600 * (this.windowWidth - 320);

				if (bottom > 80) return 80;
				if (bottom < 40) return 40;

				return bottom;
			}
		},
		components: {
			VueSticky,
			AppModal
		},
		methods: {

		}
	};
</script>

<style>
	:root {
		--intro-section_color-accent: var(--color-link);
	}
</style>

<style scoped>
	.intro-section {
		all: initial;

		& {
			display: block;
			padding-bottom: range(40px, 80px);
		}
	}

	.body {
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		padding: 0 var(--grid_padding);
		margin: 0 auto;
	}

	.body-transition {
		&.v-enter-active,
		&.v-leave-active {
			overflow: hidden;

			.body-inner {
				transition: transform, box-shadow;
				transition-duration: 0.8s, 0.2s;
				transition-delay: 0s, 0.8s;
			}
		}

		&.v-enter,
		&.v-leave-to {
			.body-inner {
				transform: translateX(calc(-100% - 8px));
				box-shadow: 0 0 #e81818;
			}
		}
	}

	.body-inner {
		display: flex;
		flex-flow: column;
		box-sizing: border-box;
		margin: range(5px, 8px) range(5px, 8px) 0 0;
		box-shadow: range(5px, 8px) range(-5px, -8px) var(--intro-section_color-accent);
		background-color: #f0f0f0;
		padding: scale-down(70px, 0.5) range(10px, 80px) scale-down(40px, 0.5);
		min-height: calc(100vh - range(73px, 186px));
		position: relative;
	}

	.title {
		color: #1b222c;
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 scale-down(20%, 0) scale-down(50px, 0.5) 0;

		&.v-enter-active,
		&.v-leave-active {
			transition: transform, opacity;
			transition-duration: 0.3s;
			transition-delay: 1s;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateY(10px);
			opacity: 0;
		}

		@media (width >= 1130px) {
			margin-left: range((146px + 80px), (-146px - 80px));
		}
	}

	.content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 400;
		line-height: 1.5;
		margin: 0 scale-down(40%, 0) scale-down(40px, 0.5) 0;
		flex-grow: 1;
		position: relative;
		z-index: 1;
		text-shadow:
			-1px 0 rgba(#f0f0f0, 0.5),
			1px 0 rgba(#f0f0f0, 0.5),
			0 1px rgba(#f0f0f0, 0.5),
			-1px 0 rgba(#f0f0f0, 0.5);

		p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1.5em;
			}
		}

		&.v-enter-active,
		&.v-leave-active {
			transition-property: transform, opacity;
			transition-duration: 0.3s;
			transition-delay: 1.3s;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateY(10px);
			opacity: 0;
		}
	}

	.content-small {
		font-size: range(1.4rem, 1.6rem);
	}

	.content-credits {
		margin-top: scale-down(50px, 0.5);
	}

	.content-credit {
		display: flex;
		align-items: flex-start;

		& + .content-credit {
			margin-top: scale-down(20px, 0.5);
		}
	}

	.content-credit-img-cell {
		width: scale-down(66px, 0.5);
		flex-shrink: 0;
		margin-right: scale-down(20px, 0.5);
	}

	.content-credit-img {
		display: block;
		max-width: 100%;
		margin: 0 auto;
	}

	.content-credit-text-cell {
		flex-grow: 1;
		font-size: range(1.4rem, 1.6rem);
		margin: auto 0;
	}

	.scroll {
		display: flex;
		align-items: center;
		width: 0;
		margin: 0 auto;
		position: relative;
		z-index: 1;

		&.v-enter-active,
		&.v-leave-active {
			transition-property: opacity;
			transition-duration: 0.3s;
			transition-delay: 1.9s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}

		&.is-sticky {
			.scroll-text {
				opacity: 0;
			}
		}
	}

	.scroll-text {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.4rem);
		font-weight: 300;
		line-height: 1.25;
		white-space: nowrap;
		transform: translateX(-50%);
		transition: opacity 0.2s;
		text-shadow:
			-1px 0 rgba(#f0f0f0, 0.5),
			1px 0 rgba(#f0f0f0, 0.5),
			0 1px rgba(#f0f0f0, 0.5),
			-1px 0 rgba(#f0f0f0, 0.5);
	}

	.scroll-line {
		position: absolute;
		top: 100%;
		left: 50%;
		width: 2px;
		height: scale-down(60px, 0.5);
		transform: translate(-50%, scale-down(10px, 0.5));
		overflow: hidden;

		&::before {
			@keyframes scroll_run {
				0% {
					transform: translateY(-100%);
				}

				100% {
					transform: translateY(100%);
				}
			}

			content: '';
			display: block;
			height: 100%;
			background-color: var(--intro-section_color-accent);
			animation: scroll_run 1.5s linear infinite;
		}
	}

	.unicorn {
		position: absolute;
		right: scale-down(-70px, 0);
		bottom: scale-down(-25px, 0);

		&.v-enter-active,
		&.v-leave-active {
			transition-property: opacity;
			transition-duration: 0.3s;
			transition-delay: 1.6s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.unicorn-img-box {
		width: scale-down(420px, 0.3);
		position: relative;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(803 / 420);
		}

		svg {
			position: absolute;
			width: 0;
			height: 0;
		}
	}

	.unicorn-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("../assets/img/unicorn-intro-fallback-2.png") no-repeat 50% 100% / contain;
	}

	.unicorn-img-is-clip {
		:root:not(.is-browser-mobile-safari, .is-engine-trident) & {
			width: 420px;
			height: 803px;
			background: url("../assets/img/intro-bg-3.jpg") no-repeat 50% / cover;
			clip-path: url("#unicorn");
			transform-origin: 0 0;
			transform: scale(scale-down(1, 0.3));

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: url("../assets/img/intro-bg-2.jpg") no-repeat 50% / cover;
				opacity: 0;
				transition: opacity 0.5s;
			}

			&:hover {
				&::before {
					opacity: 1;
				}
			}
		}
	}

	.unicorn-text-box {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		text-align: center;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.6rem);
		font-weight: 500;
		line-height: 1.25;
		margin-top: scale-down(20px, 0.5);

		a {
			color: inherit;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: var(--color-link);
			}
		}
	}
</style>
