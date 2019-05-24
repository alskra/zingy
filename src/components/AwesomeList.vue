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
		position: relative;
		overflow: hidden;
	}

	.item-number {
		color: #5c5c5c;
		font-family: var(--font-family);
		font-size: range(1.8rem / 1.3, 1.8rem);
		font-weight: 400;
		line-height: 1.25;
		flex-shrink: 0;
		width: range(75px, 150px);
		text-align: center;
	}

	.item-content {
		flex-grow: 1;
		padding: range(15px, 30px) 0;
		overflow: hidden;
	}

	.item-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(2.4rem / 1.3, 2.4rem);
		font-weight: 400;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
