<script>
	import VueSticky from './VueSticky';

	export default {
		name: 'IntroSection',
		data() {
			return {

			}
		},
		computed: {
			scrollStickyBottom() {
				const bottom = 80 / 1920 * this.windowWidth;

				if (bottom > 80) return 80;
				if (bottom < 40) return 40;

				return bottom;
			}
		},
		components: {
			VueSticky
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
		display: block;
		padding-bottom: range(40px, 80px);
	}

	.body {
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		padding: 0 var(--grid-padding);
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
		font-size: var(--font-size-h2);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 scale-down(50px, 0.5);

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
		margin: 0 scale-down(43%, 0) scale-down(40px, 0.5) 0;
		flex-grow: 1;

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

	.scroll {
		position: relative;

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
		text-align: center;
		text-shadow: 0 1px #f0f0f0, 0 -1px #f0f0f0, 1px 0 #f0f0f0, -1px 0 #f0f0f0;
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
</style>
