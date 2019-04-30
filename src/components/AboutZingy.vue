<template lang="pug">
	.about-zingy
		.zingy
			.zingy-str.str-1 optimi#[b z]ation
			.zingy-str.str-2 des#[b i]gn
			.zingy-str.str-3 developme#[b n]t
			.zingy-str.str-4 marketin#[b g]
			.zingy-str.str-5 strateg#[b y]

		.description
			slot
</template>

<script>
	export default {
		name: 'AboutZingy'
	};
</script>

<style scoped>
	.about-zingy {
		all: initial;
		display: flex;
		flex-flow: column;
		width: 100%;
		height: 100%;
		background: url("../assets/img/about-zingy-bg.jpg") no-repeat 50% 50% / cover;
	}

	.zingy {
		position: relative;
		margin: auto auto auto calc(50% - 228 / 34 * 1em);
		color: #ffffff;
		font-family: var(--font-family);
		font-size: from-to(calc(34 / 2.5), 34);
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
			font-size: from-to(calc(46 / 2.5), 46);
			font-weight: 700;
			letter-spacing: calc(23 / 46 * 1em);
		}
	}

	.zingy-str {
		&.str-2 {
			margin-left: calc(110 / 34 * 1em);
		}

		&.str-3 {
			margin-left: calc(-134 / 34 * 1em);
		}

		&.str-4 {
			margin-left: calc(-91 / 34 * 1em);
		}

		&.str-5 {
			margin-left: calc(-48 / 34 * 1em);
		}
	}

	.description {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: from-to(14, 16);
		font-weight: 300;
		line-height: 1.25;
		box-sizing: border-box;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px 10px;
		text-align: right;

		>>> {
			p {
				margin: 0;
			}

			strong {
				font-weight: 500;
				letter-spacing: calc(1.6 / 16 * 1em);
			}
		}
	}
</style>
