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

	const styles = {
		greyscale: [
			{
				"featureType": "all",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"gamma": 0.5
					}
				]
			}
		],
		lunarLandscape: [
			{
				"stylers": [
					{
						"hue": "#ff1a00"
					},
					{
						"invert_lightness": true
					},
					{
						"saturation": -100
					},
					{
						"lightness": /*33*/43
					},
					{
						"gamma": 0.5
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#2D333C"
					}
				]
			}
		]
	};

	export default {
		name: 'AppGmap',
		data() {
			return {
				center: {lat: 55.718662, lng: 37.511268},
				zoom: 17,
				options: {
					styles: styles.lunarLandscape
				}
			};
		},
		computed: {
			google: gmapApi,
			image() {
				return {
					url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 260 390"%3E%3Cpath fill="%23e04b4a" d="M0 0v260h65l68.88 130L195 260h65V0z"/%3E%3Cpath fill="%23FFF" d="M147.19 109.52c12.447 9.273 19.217 19.377 20.31 30.31h10.23c7.187 0 10.78 2.5 10.78 7.5a9.81 9.81 0 0 1-3.83 8.2c-2.553 2-6.07 3-10.55 3h-5.78c-1.133 16.313-7.223 30.107-18.27 41.38-11.046 11.273-23.963 16.94-38.75 17-11.46 0-20.966-3.607-28.52-10.82-7.553-7.213-11.33-16.313-11.33-27.3 0-11.827 4.194-21.267 12.58-28.32s19.584-10.583 33.59-10.59h29c-2-7.333-6.973-13.14-14.92-17.42l-2.38-1.3c-4.373-2.293-6.56-5.313-6.56-9.06 0-2.347 1.484-5.237 4.45-8.67l28.2-32.89h-32.31c-7.186-.007-10.78-2.483-10.78-7.43a9.93 9.93 0 0 1 3.79-8.28c2.527-2 6.08-3 10.66-3h45.08c8.667 0 13 3.387 13 10.16 0 3.02-1.456 6.17-4.37 9.45l-33.32 38.08zm.55 49h-18.39c-11.773 0-19.95.937-24.53 2.81-8.573 3.473-12.86 9.363-12.86 17.67a17.32 17.32 0 0 0 5.9 13.24 20.5 20.5 0 0 0 14.41 5.43c8.487 0 16.13-3.75 22.93-11.25s10.98-16.807 12.54-27.92v.02z"/%3E%3C/svg%3E',
					// This marker is 20 pixels wide by 32 pixels high.
					size: this.google && new this.google.maps.Size(40, 60),
					// The origin for this image is (0, 0).
					origin: this.google && new this.google.maps.Point(0, 0),
					// The anchor for this image is the base of the flagpole at (0, 32).
					anchor: this.google && new this.google.maps.Point(20, 60)
				};
			},
			markers() {
				return [
					{
						position: {lat: 55.718662, lng: 37.511268},
						options: {
							icon: this.image,
							title: 'Zingy Projects, 119590, г. Москва, ул. Улофа Пальме, д. 3'
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
