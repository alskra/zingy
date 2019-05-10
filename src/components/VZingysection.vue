<script>
	export default {
		name: 'VZingysection'
	};
</script>

<style scoped>
	.v-zingysection {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			background: url("../assets/img/about-zingy-bg.jpg") no-repeat 50% 50% / cover;
		}
	}

	.zingygrid {
		position: relative;
		margin: auto auto auto calc(50% - 228 / 34 * 1em);
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(calc(34 / 2.5), 34);
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
			font-size: range(calc(46 / 2.5), 46);
			font-weight: 700;
			letter-spacing: calc(23 / 46 * 1em);
		}

		&-item {
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
	}

	.zingydefinition {
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 300;
		line-height: 1.25;
		box-sizing: border-box;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px 10px;
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
