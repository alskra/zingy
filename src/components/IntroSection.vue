<script>
	export default {
		name: 'IntroSection'
	};
</script>

<style scoped>
	.intro-section {
		display: block;
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
				transition: 0.8s, 0.2s;
				transition-delay: 0s, 0.8s;
				transition-property: transform, box-shadow;
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
		box-sizing: border-box;
		margin: range(5px, 8px) range(5px, 8px) 0 0;
		box-shadow: range(5px, 8px) range(-5px, -8px) #e81818;
		background-color: #f0f0f0;
		padding: scale-down(60px, 0.5) range(10px, 80px);
		height: calc(100vh - range(73px, 186px));
	}

	.title {
		color: #1b222c;
		font-family: var(--font-family);
		font-size: var(--font-size-h2);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 scale-down(40px, 0.5);

		&.v-enter-active,
		&.v-leave-active {
			transition: 0.2s 1s;
			transition-property: transform, opacity;
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
		line-height: 1.25;

		p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1.25em;
			}
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: 0.2s 1.2s;
			transition-property: transform, opacity;
		}

		&.v-enter,
		&.v-leave-to {
			transform: translateY(10px);
			opacity: 0;
		}
	}
</style>
