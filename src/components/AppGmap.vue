<template lang="pug">
	.app-gmap
		gmap-map(
			:center="center"
			:zoom="zoom"
			:options="options"
			style="width: 100%; height: 100%"
		)
			gmap-marker(
				v-for="({position, options}, index) of markers"
				:key="index"
				:position="position"
				:options="options"
			)
</template>

<script>
	import {gmapApi} from 'vue2-google-maps';

	export default {
		name: 'AppGmap',
		data() {
			return {
				center: {lat: 55.718662, lng: 37.511268},
				zoom: 16,
				options: {
				}
			};
		},
		computed: {
			google: gmapApi,
			image() {
				return {
					url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
					// This marker is 20 pixels wide by 32 pixels high.
					size: this.google && new this.google.maps.Size(20, 32),
					// The origin for this image is (0, 0).
					origin: this.google && new this.google.maps.Point(0, 0),
					// The anchor for this image is the base of the flagpole at (0, 32).
					anchor: this.google && new this.google.maps.Point(0, 32)
				};
			},
			markers() {
				return [
					{
						position: {lat: 55.718662, lng: 37.511268},
						options: {
							icon: this.image,
							title: 'Zingy Projects'
						}
					}
				];
			}
		}
	};
</script>

<style scoped>
	.app-gmap {
		all: initial;

		& {
			display: block;
			box-sizing: border-box;
			max-width: 100%;
			height: range(300px, 460px);
			max-height: 100vh;
		}
	}
</style>
