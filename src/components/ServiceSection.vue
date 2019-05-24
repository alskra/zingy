<script>
	export default {
		name: 'ServiceSection'
	};
</script>

<style scoped>
	.service-section {
		display: block;
		padding: range(40px, 80px) 0;
	}

	.grid {
		max-width: env(--max-breakpoint);
		margin: 0 auto;
		overflow: hidden;
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin: range(-20px, -40px) range(-25px, -50px);
	}

	.grid-cell {
		width: calc(50% - range(50px, 100px));
		margin: range(20px, 40px) range(25px, 50px);

		@media (width < 1024px) {
			width: calc(100% - range(50px, 100px));
		}
	}

	.service {

	}

	.service-body {
		padding: 0 range(10px, 80px);
		margin-bottom: range(40px, 80px);
	}

	.service-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--font-size-h2);
		font-weight: 700;
		line-height: 1.25;
		text-align: center;
		margin: 0 0 range(40px, 80px);
	}

	.service-button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: range(53px, 106px);
		background-color: #373737;
		color: white;
		text-decoration: none;
		padding: 10px 20px;
		box-sizing: border-box;
	}

	.service-button-text {
		font-family: var(--font-family);
		font-size: range(1.2rem, 2.4rem);
		font-weight: 500;
		text-transform: uppercase;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.service-button-underline {
		text-decoration: underline;
	}
</style>
