<template lang="pug">
	.zingy-world
		include ../assets/img/zingy-world.svg
</template>

<script>
	import '../DrawSVGPlugin.min';
	import {TimelineLite} from 'gsap';

	export default {
		name: 'ZingyWorld',
		mounted() {
			const markers = this.$el.querySelectorAll('.marker'); // 0-6
			const lines = this.$el.querySelectorAll('.line'); // 0-5
			const markersParams = [0.15, {opacity: 0}, '+=0'];
			const linesParams = [0.5, {drawSVG: 0}, '+=0'];
			const timelineStart = new TimelineLite({delay: 1});
			const timelineEnd = new TimelineLite({delay: 1});

			timelineStart
				.from(markers[0], ...markersParams)
				.from(lines[0], ...linesParams);

			markers.forEach((marker, index) => {
				if (index > 0 && index < 5) {
					timelineStart
						.from(marker, ...markersParams)
						.from(lines[index], ...linesParams);
				}
			});

			timelineEnd
				.from(markers[6], ...markersParams)
				.from(lines[5], ...[(0.15 + 0.5) * 5 - 0.15, ...linesParams.slice(1)])
				.from(markers[5], ...markersParams);
		}
	};
</script>

<style scoped>
	.zingy-world {
		all: initial;

		& {
			display: block;
			max-width: 100%;
		}
	}

	// viewBox="0 0 1920 1082.1505127"
	svg {
		display: block;
		max-height: 100%;
	}

	.marker {
		/*transform-origin: calc(7 / 1920 * 100%) calc(10 / 1082.1505127 * 100%);*/
	}
</style>
