<script>
	export default {
		name: 'ZingySection'
	};
</script>

<style>
	:root {
		--zingy-section_height: range(600px / 2.5, 600px);
	}
</style>

<style scoped>
	.zingy-section {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			box-sizing: border-box;
			width: 100%;
			height: var(--zingy-section_height);
			position: relative;
		}

		&::before {
			@keyframes zingy-section_scale-bg {
				50% {
					transform: scale(1.5);
				}
			}

			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url("../assets/img/about-zingy-bg.jpg") no-repeat 50% 50% / cover;
			animation: zingy-section_scale-bg 40s ease-in-out infinite;
			transform-origin: 50% 100%;
		}

		:root:not(.is-browser-ie) & {
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}

	.matrix {
		position: relative;
		margin: auto auto auto calc(50% - 228 / 34 * 1em);
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(34px / 2.5, 34px);
		font-weight: 400;
		line-height: 1.5;
		text-transform: uppercase;
		letter-spacing: calc(17 / 34 * 1em);
		white-space: nowrap;
		user-select: none;

		&::before {
			content: '';
			position: absolute;
			top: -0.25em;
			bottom: -0.25em;
			left: calc(206 / 34 * 1em);
			box-sizing: border-box;
			border: 1px solid #ffffff;
			width: calc(47 / 34 * 1em);
		}

		>>> b {
			font-size: range(46px / 2.5, 46px);
			font-weight: 700;
			letter-spacing: calc(23 / 46 * 1em);
		}
	}

	.matrix-row {
		&:nth-child(2) {
			margin-left: calc(110 / 34 * 1em);
		}

		&:nth-child(3) {
			margin-left: calc(-134 / 34 * 1em);
		}

		&:nth-child(4) {
			margin-left: calc(-91 / 34 * 1em);
		}

		&:nth-child(5) {
			margin-left: calc(-48 / 34 * 1em);
		}
	}

	.grid {
		position: relative;
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		padding: 0 var(--grid-cell-padding);
		margin: 0 auto;
	}

	.content {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.6rem / 1.5, 1.6rem);
		font-weight: 300;
		line-height: 1.25;
		padding: range(20px / 2, 20px) 0;
		text-align: right;

		>>> p {
			margin: 0;
		}

		>>> strong {
			font-weight: 500;
			letter-spacing: calc(1.6 / 16 * 1em);
		}
	}
</style>
