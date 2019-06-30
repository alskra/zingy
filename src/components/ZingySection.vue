<template lang="pug">
	.zingy-section
		.grid
			.content.content-before
				slot(name="before")
					//- p Получите SEO бесплатно назвав промокод: «Апельсин»

		.matrix
			.matrix-row optimi#[span z]ation
			.matrix-row des#[span i]gn
			.matrix-row developme#[span n]t
			.matrix-row marketin#[span g]
			.matrix-row strateg#[span y]

		.grid
			.content.content-after
				slot(name="after")
					p #[strong ZINGY]&nbsp;— в&nbsp;переводе с&nbsp;англ. потрясающий, захватывающий
</template>

<script>
	export default {
		name: 'ZingySection',
		mounted() {
			this.$emit('mounted', this.$el);
		}
	};
</script>

<style>
	.app-page {
		&::after {
			content: url("../assets/img/about-zingy-bg.jpg");
			position: absolute;
			width: 0;
			height: 0;
			overflow: hidden;
		}
	}
</style>

<style scoped>
	.zingy-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			padding: range(20px, 40px) 0;
			max-width: 100%;
			flex-flow: column;
			overflow: hidden;
			background-color: black;
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

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.7);
		}

		&.animation-stopped {
			&::before {
				animation-play-state: paused;
			}
		}

		&.absolute {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}

		&.fixed {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}

	.matrix {
		position: relative;
		z-index: 1;
		margin: range(30px, 60px) auto range(30px, 60px) calc(50% - 228 / 34 * 1em);
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
			pointer-events: none;
		}

		>>> span {
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
		z-index: 1;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		margin: 0 auto;
	}

	.content {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2.2rem / 1.5, 2.2rem);
		font-weight: 400;
		line-height: 1.25;
		text-align: center;

		p {
			margin: 0;
		}

		strong {
			font-weight: 500;
			letter-spacing: calc(1.6 / 16 * 1em);
		}

		a {
			color: var(--color-link);
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}

	.content-after {
		font-size: range(1.6rem / 1.5, 1.6rem);
		font-weight: 300;
		text-align: right;

		/*strong {*/
		/*	font-weight: 500;*/
		/*	letter-spacing: calc(1.6 / 16 * 1em);*/
		/*}*/
	}
</style>
