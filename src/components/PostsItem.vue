<template lang="pug">
	article.posts-item(
		:class="{'posts-item-is-large': post.isLarge}"
		:style="{backgroundColor: post.backgroundColor}"
	)
		.img-box
			slot(name="img")
				img.img.img-is-default(
					is="v-lazy-image"
					src="upload/zingy-256x256.png"
					alt=""
				)

			.date-box(v-if="!post.isLarge || windowWidth < 768")
				slot(name="date")
					time.date(
						is="base-time"
						datetime="2019-01-01"
					)

		.body
			header.header
				.date-box(
					v-if="post.isLarge && windowWidth >= 768"
					:style="{color: post.color}"
				)
					slot(name="date")
						time.date(
							is="base-time"
							datetime="2019-01-01"
						)

				v-clamp.title(
					tag="p"
					:max-lines="post.isLarge && windowWidth >= 768 ? 2 : 4"
					autoresize
					:style="{color: post.color}"
					itemprop="headline"
				) {{ title }}

			.main
				v-clamp.desc(
					tag="p"
					:max-lines="post.isLarge && windowWidth >= 768 ? 3 : 5"
					autoresize
					:style="{color: post.color}"
					itemprop="description"
				) {{ desc }}

				slot(name="link")
					a.link(
						href=""
						title=""
					)

		slot
</template>

<script>
	import VClamp from 'vue-clamp';
	import {getVNodesTextContent} from '../helpers';

	export default {
		name: 'PostsItem',
		components: {
			VClamp
		},
		props: {
			post: {
				type: Object,
				required: true
			}
		},
		computed: {
			title() {
				if (this.$scopedSlots.title) {
					return getVNodesTextContent(this.$scopedSlots.title());
				}

				return '';
			},
			desc() {
				if (this.$scopedSlots.desc) {
					return getVNodesTextContent(this.$scopedSlots.desc());
				}

				return '';
			}
		}
	};
</script>

<style scoped>
	.posts-item {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			max-width: 100%;
			flex-flow: column;
			background-color: var(--posts-item_background-color, #ffffff);
		}
	}

	.img-box {
		flex-shrink: 0;
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(260 / 290);
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(#000000, 0.3);
		}

		@media (width < 560px) {
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
		opacity: 0;
		/*filter: blur(10px);*/
		/*transition: filter 0.7s;*/
		/*will-change: filter;*/

		&.v-lazy-image-loaded {
			opacity: 1;
			/*filter: blur(0);*/
		}
	}

	.img-is-default {
		object-fit: contain;
		background-color: var(--color-zingy);
	}

	.date-box {
		position: absolute;
		z-index: 1;
		bottom: range(10px, 20px);
		left: range(10px, 20px);
		color: #ffffff;
	}

	.base-time.date {
		display: block;
		color: inherit;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.2rem);
		font-weight: 500;
		line-height: 1.25;
		text-shadow:
			0 -1px rgba(#000, 0.5),
			1px 0 rgba(#000, 0.5),
			0 1px rgba(#000, 0.5),
			-1px 0 rgba(#000, 0.5);
		user-select: none;
		white-space: nowrap;

		>>> .day {
			display: block;
			font-size: range(2.6rem, 2.8rem);
			font-weight: 700;
			margin-bottom: 0;
		}

		>>> .month {
			display: block;
		}
	}

	.body {
		flex-grow: 1;
		padding: range(15px, 30px) range(10px, 20px);
		display: flex;
		flex-flow: column;
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
		margin: 0;
	}

	.desc {
		color: var(--posts-item_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.5;
		margin: 0;
	}

	.link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.posts-item-is-large {
		@media (width >= 768px) {
			.img-box {
				&::before {
					padding-top: percentage(330 / 605);
				}
			}

			.header {
				display: flex;
				align-items: flex-start;
			}

			.date-box {
				position: relative;
				bottom: auto;
				left: auto;
				flex-shrink: 0;
				margin-right: range(10px, 20px);
				color: var(--posts-item_color, var(--color));
			}

			.base-time.date {
				text-shadow: none;
			}

			.title {
				flex-grow: 1;
				overflow: hidden;
				margin: auto 0;
			}
		}
	}
</style>
