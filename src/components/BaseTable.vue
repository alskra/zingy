<template lang="pug">
	table.base-table
		slot
</template>

<script>
	export default {
		name: "BaseTable"
	}
</script>

<style scoped>
	.base-table {
		all: initial;
	}
</style>
