<template lang="pug">
	time.base-time(
		:datetime="datetime"
		:title="$d(date, 'long')"
	)
		span.day {{ $d(date, 'day') }}
		| &#32;
		span.month {{ $d(date, 'dayMonth').replace(/\s*\d+\s*/, '') }}
		| &#32;
		span.year {{ $d(date, 'year') }}
</template>

<script>
	export default {
		name: 'BaseTime',
		props: {
			datetime: {
				type: String,
				required: true
			}
		},
		computed: {
			date() {
				return Date.parse(this.datetime);
			}
		}
	};
</script>

<style scoped>
	.base-time {
		all: initial;
	}
</style>
