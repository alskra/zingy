<script>
	export default {
		name: 'WorkSection'
	};
</script>

<style scoped>
	.WorkSection {
		all: initial;

		& {
			display: block;
			background: url("../assets/img/mount-bg.jpg") no-repeat 50% range(5px, 12px) / cover #ffffff;
			overflow: hidden;
		}
	}

	.content-box {
		display: flex;
		flex-flow: column;
		width: calc(100% - 2 * var(--content-box-gutter));
		max-width: var(--content-box-width);
		padding: 0 var(--content-box-gutter);
		margin: 0 auto;
	}

	.content {
		background-color: rgba(#f2f4f5, 0.9);
		margin: range(5px, 12px) range(5px, 12px) 0 0;
		position: relative;
		/*box-sizing: border-box;*/
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

	.content-overlay {
		position: absolute;
		width: 50vw;
		background-color: #ffffff;
		pointer-events: none;
	}

	.content-overlay-is-left-top {
		top: 0;
		right: 100%;
		height: 30%;
	}

	.content-overlay-is-left-bottom {
		right: 100%;
		bottom: 0;
		height: 20%;
	}

	.content-overlay-is-right-top {
		top: 0;
		bottom: 0;
		left: 100%;
	}

	.header {
		padding: 0 range(10px, 140px) 0 range(20px, 350px);
		margin-bottom: range(50px / 2, 50px);
	}

	.title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(4.8rem / 1.5, 4.8rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0;
	}

	.main {
		padding: 0 range(10px, 140px);
	}

	.text {
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
