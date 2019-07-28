<template lang="pug">
	.vue-ymaps(
		:style=`{
			width: convertUnits(width),
			height: convertUnits(height)
		}`
	)
</template>

<script>
	import Vue from 'vue';

	const api = Vue.observable({
		ymaps: null,
		scriptEl: null
	});

	window.initYmaps = ymaps => {
		api.ymaps = ymaps;
	};

	if (!api.scriptEl) {
		api.scriptEl = document.createElement('script');
		api.scriptEl.src = 'https://api-maps.yandex.ru/2.1/?apikey=fa044ff0-6600-4936-8d46-1e837d7862df&lang=ru_RU&onload=initYmaps';
		document.head.appendChild(api.scriptEl);
	}

	export default {
		name: 'VueYmaps',
		props: {
			width: {
				type: [Number, String],
				default: ''
			},
			height: {
				type: [Number, String],
				default: ''
			},
			state: {
				type: Object,
				required: true
			},
			options: {
				type: Object,
				default: null
			}
		},
		data() {
			return {
				map: null
			}
		},
		computed: {
			ymaps() {
				return api.ymaps;
			}
		},
		watch: {
			ymaps: {
				handler() {
					this.init();
				},
				immediate: true
			},
			state: {
				handler() {
					this.init();
				},
				deep: true
			},
			options: {
				handler() {
					this.init();
				},
				deep: true
			}
		},
		methods: {
			convertUnits(val) {
				return val.constructor === String ? val : val + 'px';
			},
			init() {
				if (this.ymaps && this.$el) {
					this.map = new this.ymaps.Map(this.$el, this.state, this.options);
					this.$emit('init', this);
				}
			}
		},
		install(Vue) {
			Vue.component('VueYmaps', this);
		}
	};
</script>
