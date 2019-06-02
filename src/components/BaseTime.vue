<template lang="pug">
	time.base-time(
		:datetime="datetime"
		:title="momentLocale.format('DD MMMM YYYY HH:mm')"
	) {{ momentLocale.format('DD MMMM YYYY') }}
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
			momentLocale() {
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
