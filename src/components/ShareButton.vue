<script>
	export default {
		name: 'ShareButton'
	};
</script>

<style scoped>
	.share-button {
		all: initial;

		& {
			display: inline-flex;
			vertical-align: top;
			width: 24px;
			height: 24px;
			cursor: pointer;
		}
	}

	.base-icon.icon {
		color: #999999;
		pointer-events: none;
		transition: color 0.2s;
	}
</style>
