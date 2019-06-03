<template lang="pug">
	article.posts-item(:class="{'posts-item-is-large': post.isLarge}")
		a.body(
			:href="post.url || $attrs.href"
			:style="{backgroundColor: post.backgroundColor}"
		)
			.header
				v-lazy-image.img(
					:src="post.img"
					:alt="post.title || ''"
				)

				base-time.date(
					:datetime="post.date"
					:locale="post.locale"
					v-if="!post.isLarge && windowWidth < 768"
				)

			.main
				.title
					base-time.date(
						:datetime="post.date"
						:locale="post.locale"
						v-if="post.isLarge && windowWidth >= 768"
					)

					.title-inner(
						v-line-clamp="2"
						:style="{color: post.color}"
					)
						slot(name="title")

				.desc(
					v-line-clamp="post.isLarge && windowWidth >= 768 ? 3 : 5"
					:style="{color: post.color}"
				)
					slot(name="desc")
</template>

<script>
	export default {
		name: 'PostsItem',
		inheritAttrs: false,
		props: {
			post: {
				type: Object,
				default: null
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

	.header {
		position: relative;
		overflow: hidden;
		flex-shrink: 0;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(260 / 290);
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
			transition: filter 0.5s;
			will-change: filter;
		}

		&.v-lazy-image-loaded {
			opacity: 1;
			filter: blur(0);
		}
	}

	.date {
		position: absolute;
	}

	.main {
		flex-grow: 1;
		padding: range(15px, 30px) range(10px, 20px);
	}

	.title-inner {
		color: var(--posts-item_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.8rem, 2rem);
		font-weight: 500;
		line-height: 1.25;
		margin: 0 0 0.5em;

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

		p {
			display: inline;
		}
	}

	.posts-item-is-large {
		@media (width >= 768px) {
			max-width: calc(300px * 2 + var(--grid-cell_padding) * 2);

			.header {
				&::before {
					padding-top: percentage(330 / 605);
				}
			}

			.date {
				position: relative;
			}
		}
	}
</style>
