<script>
	export default {
		name: 'TransitionFade',
		functional: true,
		render(createElement, context) {
			const data = {
				props: {
					name: 'fade',
					mode: 'out-in',
					...context.props
				}
			};

			return createElement('transition', data, context.children);
		}
	};
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 5.5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
