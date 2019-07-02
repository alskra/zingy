<script>
	export default {
		name: 'TransitionFadeUp',
		functional: true,
		render(createElement, context) {
			const data = {
				props: {
					name: 'fade-up',
					mode: 'out-in',
					...context.props
				}
			};

			return createElement('transition', data, context.children);
		}
	};
</script>

<style scoped>
	.fade-up-enter-active,
	.fade-up-leave-active {
		transition: opacity, transform;
		transition-duration: 0.5s;
	}

	.fade-up-enter,
	.fade-up-leave-to {
		opacity: 0;
		transform: translateY(10px);
	}
</style>
