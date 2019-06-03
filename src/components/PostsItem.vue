<template lang="pug">
	article.posts-item(:class="{'posts-item-is-large': post.isLarge}")
		a.body(
			:href="href"
			:style="{backgroundColor: post.backgroundColor}"
		)
			.header
				v-lazy-image.img(
					:src="post.img"
					:alt="post.title"
				)

				slot(name="date")
					base-time.date(
						:datetime="post.date"
						:locale="post.locale"
					)

			.main
				.title(
					v-line-clamp="2"
					:style="{color: post.color}"
				)
					slot(name="title")

				.desc(
					v-line-clamp="3"
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
			},
			href: {
				type: String,
				default: ''
			}
		}
	};
</script>

<style></style>

<style scoped>
	.posts-item {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
			max-width: 300px;
			margin: 0 auto;
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
		width: 100%;
		max-width: 300px;
		margin: 0 auto;

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

	.main {
		flex-grow: 1;
		padding: range(15px, 30px) range(10px, 20px);
	}

	.title {
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
</style>
