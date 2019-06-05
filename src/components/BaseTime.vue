<template lang="pug">
	time.base-time(
		:datetime="datetime"
		:title="localLocale.format('DD MMMM YYYY HH:mm')"
	)
		span.date {{ formattedArray[0] }}
		span.month {{ formattedArray[1] }}
		span.year {{ formattedArray[2] }}
</template>

<script>
	export default {
		name: 'BaseTime',
		props: {
			datetime: {
				type: String,
				required: true
			},
			locale: {
				type: String,
				default: document.documentElement.getAttribute('lang')
			}
		},
		computed: {
			localLocale() {
				return this.$moment(this.datetime).locale(this.locale);
			},
			formattedArray() {
				return this.localLocale.format('DD MMMM YYYY').split(' ');
			}
		}
	};
</script>

<style scoped>
	.base-time {
		all: initial;
	}
</style>
