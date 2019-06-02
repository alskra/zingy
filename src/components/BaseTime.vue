<template lang="pug">
	time.base-time(
		:datetime="datetime"
		:title="localLocale.format('DD MMMM YYYY HH:mm')"
	)
		span.date {{ localLocale.format('DD') }}
		span.rest {{ localLocale.format(' MMMM YYYY') }}
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
				required: true
			}
		},
		computed: {
			localLocale() {
				return this.$moment(this.datetime).locale(this.locale);
			}
		}
	};
</script>

<style scoped>
	.base-time {
		all: initial;
	}
</style>
