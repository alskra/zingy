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
		--base-content_margin-y: calc(1.6 * var(--font-size))
	}
</style>

<style scoped>
	@custom-selector :--headings
	h1, .h1,
	h2, .h2,
	h3, .h3,
	h4, .h4,
	h5, .h5,
	h6, .h6;

	.base-content {
		all: initial;

		& {
			display: block;
			color: var(--color);
			font-family: var(--font-family);
			font-size: var(--font-size);
			font-weight: 400;
			line-height: 1.6;
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

	>>> :--headings {
		color: var(--color);
		font-family: var(--font-family);
		line-height: 1.25;
		margin: 0 0 1em;
	}

	>>> h1, .h1 {
		font-size: var(--h1_font-size);
		font-weight: 500;
		margin: 0 0 0.5em;
	}

	>>> h2, .h2 {
		font-size: var(--h2_font-size);
		font-weight: 700;
	}

	>>> h3, .h3 {
		font-size: var(--h3_font-size);
		font-weight: 700;
	}

	>>> p {
		margin: 0 0 var(--base-content_margin-y);
	}

	>>> a {
		color: var(--color-link);
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}

	>>> img {
		display: block;
		max-width: 100%;
		margin: calc(1.25 * var(--base-content_margin-y)) auto;

		&.float-left {
			@media (width >= 768px) {
				float: left;
				margin-top: 0;
				margin-right: calc(2 * var(--grid-cell_padding));
			}
		}

		&.float-right {
			@media (width >= 768px) {
				float: right;
				margin-top: 0;
				margin-left: calc(2 * var(--grid-cell_padding));
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
</style>
