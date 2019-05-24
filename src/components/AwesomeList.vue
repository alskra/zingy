<script>
	export default {
		name: 'AwesomeList'
	};
</script>

<style scoped>
	.awesome-list {
		display: block;
		position: relative;
	}

	.item {
		display: flex;
		align-items: baseline;
		padding-left: 3px;
	}

	.item-number {
		color: #5c5c5c;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 400;
		line-height: 1.25;
		flex-shrink: 0;
		width: range(75px, 150px);
		text-align: center;
	}

	.item-content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(2rem, 2.4rem);
		font-weight: 400;
		line-height: 1.25;
		padding: range(30px, 30px) 0;
	}
</style>
