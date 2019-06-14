<template lang="pug">
	.base-content
		slot
</template>

<script>
	export default {
		name: 'BaseContent'
	};
</script>

<style>
	:root {
		--base-content_margin-y: calc(var(--line-height) * var(--font-size))
	}
</style>

<style scoped>
	@custom-selector :--h1 h1, .h1;
	@custom-selector :--h2 h2, .h2;
	@custom-selector :--h3 h3, .h3;
	@custom-selector :--h4 h4, .h4;
	@custom-selector :--h5 h5, .h5;
	@custom-selector :--h6 h6, .h6;

	@custom-selector :--headings
	:--h1,
	:--h2,
	:--h3,
	:--h4,
	:--h5,
	:--h6;

	.base-content {
		all: initial;

		& {
			display: block;
			color: var(--color);
			font-family: var(--font-family);
			font-size: var(--font-size);
			font-weight: var(--font-weight);
			line-height: var(--line-height);
		}

		&::before,
		&::after {
			content: '';
			display: table;
			clear: both;
		}

		> :first-child {
			margin-top: 0 !important;
		}

		> :last-child {
			margin-bottom: 0 !important;
		}
	}

	:--headings {
		color: var(--color);
		font-family: var(--font-family);
		line-height: 1.25;
		/*margin: 0 0 var(--base-content_margin-y);*/
		margin: 0 0 1em;
	}

	:--h1 {
		font-size: var(--h1_font-size);
		font-weight: 500;
	}

	:--h2 {
		font-size: var(--h2_font-size);
		font-weight: 700;
	}

	:--h3 {
		font-size: var(--h3_font-size);
		font-weight: 700;
	}

	:--h4 {
		font-size: var(--h4_font-size);
		font-weight: 700;
	}

	:--h5 {
		font-size: var(--h5_font-size);
		font-weight: 700;
	}

	:--h6 {
		font-size: var(--h6_font-size);
		font-weight: 700;
	}

	p {
		margin: 0 0 var(--base-content_margin-y);
	}

	a {
		color: var(--color-link);
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}

	img {
		vertical-align: middle;
		max-width: 100%;
		height: auto;
	}

	blockquote {
		margin: calc(2 * var(--base-content_margin-y)) 0;
		border-left: 4px solid var(--color-accent);
		padding-left: range(16px, 32px);
		position: relative;
		z-index: 0;

		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			top: range(-12px, -24px);
			left: range(10px, 70px);
			width: scale-down(234px, 0.5);
			height: scale-down(172px, 0.5);
			background: url("../assets/img/open-quote.svg") no-repeat 50% 50% / contain;
			pointer-events: none;
		}

		cite {
			display: block;
			margin-left: calc(range(-16px, -32px) - 4px);
			border-left: 4px solid var(--app-page-main_background-color);
			padding-top: var(--base-content_margin-y);
			padding-left: range(16px, 32px);
			font-style: normal;
		}

		p:last-of-type {
			margin-bottom: 0;
		}
	}

	ol,
	ul {
		margin: 0 0 var(--base-content_margin-y);
		padding: 0;

		> li {
			display: block;
			margin-bottom: var(--base-content_margin-y);
			padding-left: 32px;
			position: relative;

			> ol,
			> ul {
				margin-top: var(--base-content_margin-y);
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	ol {
		counter-reset: ol;

		> li {
			counter-increment: ol;

			&::before {
				content: counter(ol) '.';
				position: absolute;
				left: 0;
			}
		}
	}

	ul {
		> li {
			&::before {
				content: '';
				position: absolute;
				top: calc(var(--line-height) * var(--font-size) / 2);
				left: 0;
				width: 12px;
				height: 12px;
				background-color: var(--color-accent);
				transform: translateY(-50%);
				pointer-events: none;
			}
		}
	}

	.clear-both {
		clear: both;
	}

	.clearfix {
		&::before,
		&::after {
			content: '';
			display: block;
			clear: both;
		}
	}

	.base-image.base-content-image,
	.base-figure.base-content-figure,
	.swiper-gallery.base-content-gallery {
		margin: 0 auto var(--base-content_margin-y);

		&.left {
			@media (width >= 768px) {
				float: left;
				margin-right: calc(2 * var(--grid-cell_padding));
			}
		}

		&.right {
			@media (width >= 768px) {
				float: right;
				margin-left: calc(2 * var(--grid-cell_padding));
			}
		}
	}
</style>
