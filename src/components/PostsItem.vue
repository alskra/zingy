<template lang="pug">
	article.posts-item(:class="{'posts-item-is-large': post.isLarge}")
		a.body(
			:href="post.url"
			:title="post.title"
			:style="{backgroundColor: post.backgroundColor}"
		)
			.img-box
				v-lazy-image.img(
					:src="post.img || 'upload/zingy.svg?fallback'"
					src-placeholder="upload/zingy.svg"
					:alt="post.title"
					:class="{'img-is-zingy': !post.img}"
				)

				base-time.public-date(
					:datetime="post.date"
					:locale="locale"
					v-if="!post.isLarge || windowWidth < 768"
				)

			.body-inner
				header.header
					base-time.public-date(
						:datetime="post.date"
						:locale="locale"
						v-if="post.isLarge && windowWidth >= 768"
						:style="{color: post.color}"
					)

					.title(
						v-line-clamp="post.isLarge && windowWidth >= 768 ? 2 : 4"
						:style="{color: post.color}"
					)
						slot(name="title")

				.main
					.desc(
						v-line-clamp="post.isLarge && windowWidth >= 768 ? 3 : 5"
						:style="{color: post.color}"
					)
						slot(name="desc")
</template>

<script>
	export default {
		name: 'PostsItem',
		props: {
			post: {
				type: Object,
				default: null
			}
		},
		computed: {
			locale() {
				return document.documentElement.getAttribute('lang');
			}
		}
	};
</script>

<style scoped>
	.posts-item {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			max-width: 300px;
		}
	}

	.body {
		color: var(--color);
		text-decoration: none;
		display: flex;
		flex-flow: column;
		height: 100%;
		background-color: var(--posts-item_background-color, #ffffff);
	}

	.img-box {
		position: relative;
		overflow: hidden;
		flex-shrink: 0;
		background-color: rgba(#000000, 0.15);

		&::before {
			content: '';
			display: block;
			padding-top: percentage(260 / 290);
		}

		@media (width < 768px) {
			&::before {
				padding-top: percentage(9 / 16);
			}
		}
	}

	.img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;

		&.v-lazy-image {
			opacity: 0;
			filter: blur(10px);
			transition: filter 0.7s;
			will-change: filter;
		}

		&.v-lazy-image-loaded {
			opacity: 1;
			filter: blur(0);
		}
	}

	.img-is-zingy {
		object-fit: contain;
		background-color: var(--color-zingy);
	}

	.public-date {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.2rem);
		font-weight: 500;
		line-height: 1;
		text-shadow:
			0 -1px var(--color),
			1px 0 var(--color),
			0 1px var(--color),
			-1px 0 var(--color);
		user-select: none;
		cursor: default;
		white-space: nowrap;
		position: absolute;
		z-index: 1;
		bottom: range(10px, 20px);
		left: range(10px, 20px);

		>>> .date {
			display: block;
			font-size: range(2.6rem, 2.8rem);
			font-weight: 700;
			margin-bottom: 0.15em;
		}

		>>> .mounth {
			display: block;
		}
	}

	.body-inner {
		flex-grow: 1;
		padding: range(15px, 30px) range(10px, 20px);
	}

	.header {
		margin-bottom: range(5px, 10px);
	}

	.title {
		color: var(--posts-item_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.8rem, 2rem);
		font-weight: 500;
		line-height: 1.25;

		* {
			display: inline;
			font: inherit;
		}
	}

	.desc {
		color: var(--posts-item_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.5;

		* {
			display: inline;
		}
	}

	.posts-item-is-large {
		@media (width >= 768px) {
			max-width: calc(300px * 2 + var(--grid-cell_padding) * 2);

			.img-box {
				&::before {
					padding-top: percentage(330 / 605);
				}
			}

			.header {
				display: flex;
				align-items: flex-start;
			}

			.public-date {
				color: var(--posts-item_color, var(--color));
				text-shadow: none;
				position: static;
				flex-shrink: 0;
				margin-right: range(10px, 20px);
			}

			.title {
				flex-grow: 1;
				overflow: hidden;
				margin: auto 0;
			}
		}
	}
</style>
