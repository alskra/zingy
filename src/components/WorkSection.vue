<script>
	import AwesomeList from './AwesomeList';

	export default {
		name: 'WorkSection',
		components: {
			AwesomeList
		}
	};
</script>

<style scoped>
	.work-section {
		display: block;
		background: url("../assets/img/mount-bg.jpg") no-repeat 50% range(6px, 13px) / cover #ffffff;
		overflow: hidden;
	}

	.body {
		display: flex;
		flex-flow: column;
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		padding: 0 var(--grid-padding);
		margin: 0 auto;
	}

	.body-inner {
		background-color: rgba(#f2f4f5, 0.9);
		margin: range(5px, 12px) range(5px, 12px) 0 0;
		position: relative;
		min-height: 300px;
		padding: range(80px / 2, 80px) 0;

		&::before {
			content: '';
			position: absolute;
			top: range(-5px, -12px);
			right: range(-5px, -12px);
			left: range(140px / 2, 140px);
			height: range(5px, 12px);
			background-color: #e04b4a;
		}

		&::after {
			content: '';
			position: absolute;
			top: range(-5px, -12px);
			right: range(-5px, -12px);
			bottom: range(105px / 2, 105px);
			width: range(5px, 12px);
			background-color: #e04b4a;
		}
	}

	.body-overlay {
		position: absolute;
		width: 50vw;
		background-color: #ffffff;
		pointer-events: none;
	}

	.body-overlay-is-left-top {
		top: 0;
		right: 100%;
		height: 30%;
	}

	.body-overlay-is-left-bottom {
		right: 100%;
		bottom: 0;
		height: 15%;
	}

	.body-overlay-is-right {
		top: 0;
		bottom: 0;
		left: 100%;
	}

	.body-stars {
		display: flex;
		flex-flow: column;
		justify-content: center;
		position: absolute;
		top: 30%;
		right: calc(100% + range(0px, 164px));
		bottom: 15%;
	}

	.body-stars-item.host {
		width: range(14px, 28px);
		height: range(14px, 28px);
		color: white;
		flex-shrink: 0;
		margin: range(5px, 10px) 0;
	}

	.header {
		padding: 0 range(10px, 140px) 0 range(20px, 350px);
		margin-bottom: range(20px, 40px);
	}

	.title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--font-size-h2);
		font-weight: 500;
		line-height: 1.25;
		margin: 0;
	}

	.main {
		padding: 0 range(10px, 140px);
	}

	.awesome-list.host {
		margin-bottom: range(20px, 40px);
		margin-right: range(-10px, -140px);

		>>> .item {
			padding-right: range(10px, 140px);
		}
	}

	.content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 400;
		line-height: 1.5;

		>>> p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1.5em;
			}
		}
	}
</style>
