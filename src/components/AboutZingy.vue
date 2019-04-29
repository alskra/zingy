<template lang="pug">
	.about-zingy
		.zingy
			.zingy-str.str-1 optimi#[b z]ation
			.zingy-str.str-2 des#[b i]gn
			.zingy-str.str-3 developme#[b n]t
			.zingy-str.str-4 marketin#[b g]
			.zingy-str.str-5 strateg#[b y]

		.description
			template(v-if="$scopedSlots.default")
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
		margin: auto auto auto calc(50% - 228 / 34 * 1em);
		color: #ffffff;
		font-family: var(--font-family);
		font-size: from-to(calc(34 / 2.5), 34);
		font-weight: 400;
		line-height: 1.5;
		text-transform: uppercase;
		letter-spacing: calc(17 / 34 * 1em);
		white-space: nowrap;

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
</style>
