<template lang="pug">
	vue-ymaps.app-ymaps(
		:state=`{
			center: [55.718662, 37.511268],
			zoom: 17,
			behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
		}`
		@init="onInit"
	)
</template>

<script>
	import VueYmaps from '../plugins/vue-ymaps/VueYmaps';

	export default {
		name: 'AppYmaps',
		components: {
			VueYmaps
		},
		methods: {
			onInit(vueYmaps) {
				const placemark = new vueYmaps.ymaps.Placemark(vueYmaps.map.getCenter(), {
					hintContent: 'Zingy Projects',
					balloonContent: `
						<strong>Zingy Projects</strong><br>
						119590, г. Москва, ул. Улофа Пальме, д. 3
					`
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: '/upload/zingy-pin.svg',
					// Размеры метки.
					iconImageSize: [40, 60],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-20, -60]
				});

				vueYmaps.map
					.geoObjects
					.add(placemark);

				vueYmaps.map.panes.get('ground').getElement().style.filter = 'grayscale(1)';
			}
		}
	};
</script>

<style scoped>
	.app-ymaps {
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
