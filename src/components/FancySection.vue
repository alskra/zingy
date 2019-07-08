<i18n>
	{
		"en": {
			"scroll-down": "Scroll down"
		},
		"ru": {
			"scroll-down": "Крутите вниз"
		}
	}
</i18n>

<template lang="pug">
	mixin buttons()
		.buttons(v-if="buttons")
			.buttons-grid-row
				.buttons-grid-cell(
					v-for="({tag, data, children}, index) of buttons"
					:key="index"
				)
					base-button.button(
						:tag="tag"
						v-bind="data.attrs"
					) {{ getVNodesTextContent(children) }}

	section.fancy-section
		transition(
			appear
			:duration="{enter: 1100, leave: 800}"
			@after-enter="afterEnter"
		)
			.body(
				ref="body"
				:style="{overflow: 'hidden'}"
			)
				.body-inner(
					:class="{'body-inner-has-scroll-down': scrollDown}"
					@transitionstart.self="onBodyTransitionstart"
					@transitionend.self="onBodyTransitionend"
				)
					.grid-row
						.grid-cell(:class="{'grid-cell-is-7': articles}")
							header.header(v-if="title")
								.title(
									v-if="title"
									:is="title[0].tag"
								) {{ getVNodesTextContent(title[0].children) }}

							base-content.content(v-if="$scopedSlots.content")
								slot(name="content")

							footer.footer(v-if="buttons && windowWidth >= 1024")
								+buttons()

						.grid-cell.grid-cell-is-5(v-if="articles")
							aside.articles(v-if="articles")
								.articles-grid-row
									.articles-grid-cell(
										v-for="({tag, slots: {image, title, description}}, index) of articles"
										:key="index"
									)
										.article(:is="tag")
											.article-image-box
												img.article-image(
													v-if="image"
													v-bind="image[0].data.attrs"
													:class="{'article-image-masked': support.mask && windowWidth >= 1024}"
													:style=`
														support.mask && windowWidth >= 1024 ?
														{
															WebkitMaskImage: \`url(\${image[0].data.attrs.src})\`,
															animationDelay: \`\${index * 3}s\`,
															animationPlayState: transitionEnd ? 'running' : 'paused'
														} : null
													`
												)

											.article-body
												.article-title(
													v-if="title"
													:is="title[0].tag"
												) {{ getVNodesTextContent(title[0].children) }}

												p.article-description(
													v-if="description"
												) {{ getVNodesTextContent(description) }}

							footer.footer(v-if="buttons && windowWidth < 1024")
								+buttons()

				.scroll-down(
					v-if="scrollDown"
					:style="scrollDownStyle"
				) {{ $t('scroll-down') }}
</template>

<script>
	/**
	 * @prop {Boolean} scrollDown
	 * @slots: `title`, `content`, `buttons`, `articles`
	 */

	import {
		getVNodesTextContent,
		getScopedSlot
	} from '../helpers';

	export default {
		name: 'FancySection',
		props: {
			scrollDown: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scrollDownStyle: null,
				support: {
					mask: document.documentElement.style.WebkitMask != null
				},
				transitionEnd: false
			};
		},
		computed: {
			title() {
				return getScopedSlot(this.$scopedSlots.title);
			},
			buttons() {
				return getScopedSlot(this.$scopedSlots.buttons);
			},
			articles() {
				return getScopedSlot(this.$scopedSlots.articles);
			}
		},
		methods: {
			getVNodesTextContent,
			afterEnter() {
				this.transitionEnd = true;
			},
			onBodyTransitionstart() {
				this.$refs.body.style.overflow = 'hidden';
			},
			onBodyTransitionend() {
				this.$refs.body.style.overflow = '';
			},
			fixScrollDown() {
				if (this.$el.getBoundingClientRect().bottom > window.innerHeight) {
					this.scrollDownStyle = {
						position: 'fixed',
						bottom: '10px',
						color: 'transparent'
					};
				} else {
					this.scrollDownStyle = {
						position: '',
						bottom: '',
						color: ''
					};
				}
			},
			onWindowScrollOrResize() {
				this.fixScrollDown();
			}
		},
		created() {
			// console.log('created:');
			// console.log(this.$slots);
			// console.log(this.$scopedSlots);
		},
		mounted() {
			// console.log('mounted:');
			// console.log(this.$slots);
			// console.log(this.$scopedSlots);

			this.fixScrollDown();
			window.addEventListener('scroll', this.onWindowScrollOrResize);
			window.addEventListener('resize', this.onWindowScrollOrResize);
		},
		updated() {
			// console.log('updated:');
		},
		destroyed() {
			window.removeEventListener('scroll', this.onWindowScrollOrResize);
			window.removeEventListener('resize', this.onWindowScrollOrResize);
		}
	};
</script>

<style scoped>
	.fancy-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.body {
		display: flex;
		position: relative;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: range(15px, 30px);
			left: range(5px, 8px);
			background-color: #b84242;
		}

		&.v-enter-active,
		&.v-leave-active {
			&::before {
				transition: visibility, top, right;
				transition-duration: 0s, 0.2s, 0.2s;
			}

			.body-inner {
				transition: transform 0.5s;
			}

			.header,
			.base-content.content,
			.footer,
			.scroll-down {
				transition: opacity 0.3s;
			}

			.article {
				transition: opacity, transform;
				transition-duration: 0.3s;
			}
		}

		&.v-enter-active {
			&::before {
				transition-delay: 0.5s;
			}

			.header {
				transition-delay: 0.5s;
			}

			.base-content.content {
				transition-delay: 0.6s;
			}

			.footer {
				transition-delay: 0.7s;
			}

			.scroll-down {
				transition-delay: 0.8s;
			}

			.article {
				transition-delay: 0.5s;
			}
		}

		&.v-leave-active {
			.body-inner {
				transition-delay: 0.3s;
			}
		}

		&.v-enter,
		&.v-leave-to {
			&::before {
				top: range(5px, 8px);
				right: range(5px, 8px);
				visibility: hidden;
			}

			.body-inner {
				transform: translateX(-100%);
			}

			.header,
			.base-content.content,
			.footer,
			.scroll-down {
				opacity: 0;
			}

			.article {
				opacity: 0;
				transform: translateX(10px);
			}
		}
	}

	.body-inner {
		position: relative;
		margin: range(5px, 8px) range(5px, 8px) 0 0;
		padding: range(30px, 60px) range(10px, 80px);
		background-color: #f0f0f0;
	}

	.body-inner-has-scroll-down {
		padding-bottom: range(50px, 100px);
	}

	.grid-row {
		display: flex;
		margin: range(-15px, -30px) var(--grid-row_margin);
		flex-wrap: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(15px, 30px) var(--grid-cell_padding);
		flex: 0 0 100%;
		min-width: 0;
		max-width: 100%;
	}

	.grid-cell-is-7 {
		@media (width >= 1024px) {
			flex: 0 0 percentage(7 / 12);
		}
	}

	.grid-cell-is-5 {
		@media (width >= 1024px) {
			flex: 0 0 percentage(5 / 12);
		}
	}

	.header {
		margin-bottom: range(25px, 50px);
	}

	.title {
		margin: 0;
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;

		@media (width >= 1024px) {
			margin-left: range(80px, -160px);
		}
	}

	.footer {
		margin-top: range(25px, 50px);
	}

	.buttons {
		display: flex;
		flex-flow: column;
	}

	.buttons-grid-row {
		display: flex;
		margin: var(--grid-row_margin);
		flex-wrap: wrap;

		@media (width < 1024px) {
			justify-content: center;
		}
	}

	.buttons-grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;
		max-width: 100%;
	}

	.base-button.button {
		width: 270px;
	}

	.scroll-down {
		display: flex;
		position: absolute;
		z-index: 2;
		bottom: range(-15px, -30px);
		left: 50%;
		flex-flow: column;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.4rem);
		font-weight: 300;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		transform: translateX(-50%) translateX(-0.5px);
		transition: bottom 0.2s, color 0.2s;
		pointer-events: none;

		&::after {
			@keyframes scroll-down_run {
				0% {
					background-position: 0 range(-30px, -60px);
				}

				100% {
					background-position: 0 range(30px, 60px);
				}
			}

			content: '';
			margin: range(5px, 10px) auto 0;
			width: 2px;
			height: range(30px, 60px);
			background: linear-gradient(to bottom, var(--color-accent), var(--color-accent)) no-repeat 0 0 / 100% 100%;
			animation: scroll-down_run 2s linear infinite;
		}
	}

	.articles {
		display: flex;
		flex-flow: column;

		@media (width >= 1024px) {
			margin: range(-30px + 15px, -60px - 30px) range(-10px + 30px, -80px - 60px) 0 range(-30px, 60px);
		}

		@media(width < 1024px) {
			margin: 0 range(-10px - 10px, -80px - 16px) 0 range(-10px, -80px);
			padding-left: 10px;
		}
	}

	.articles-grid-row {
		display: flex;
		margin: range(-10px, -20px) var(--grid-row_margin);
		flex-flow: column;

		@media (width < 1024px) {
			margin-top: range(-2px, -4px);
			margin-bottom: range(-2px, -4px);
		}
	}

	.articles-grid-cell {
		box-sizing: border-box;
		padding: range(10px, 20px) var(--grid-cell_padding);
		min-width: 0;
		max-width: 100%;

		@media (width >= 1024px) {
			&:nth-child(odd) {
				transform: translateX(range(-35px, 70px));
			}
		}

		@media (width < 1024px) {
			padding-top: range(2px, 4px);
			padding-bottom: range(2px, 4px);

			&:nth-child(odd) {
				/*transform: translateX(10px);*/
			}
		}
	}

	.article {
		display: flex;
		box-sizing: border-box;
		position: relative;
		min-height: range(60px, 160px);
		flex-flow: column;
		background-color: #222222;
	}

	.article-image-box {
		box-sizing: border-box;
		position: absolute;
		right: 0;
		bottom: 0;
		padding: range(5px, 10px) 0 0 range(5px, 10px);
		width: range(60px, 160px);
		height: range(60px, 160px);
	}

	.article-image {
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
	}

	.article-image-masked {
		@keyframes article-image_run {
			0% {
				background-position: 0 100%;
			}

			66.66666% {
				background-position: 0 0;
			}
		}

		padding-left: 100%;
		background: linear-gradient(
			to bottom,
			var(--color) calc(100% / 3),
			var(--color-accent) calc(100% / 3),
			var(--color-accent) calc(100% / 3 * 2),
			var(--color) calc(100% / 3 * 2)
		) no-repeat 0 0 / 100% 300%;
		-webkit-mask: no-repeat 100% 100% / contain;
		animation: article-image_run 9s linear infinite;
	}

	.article-body {
		position: relative;
		margin: auto 0;
		padding: range(10px, 30px) range(60px, 160px) range(10px, 30px) range(10px, 30px);

		@media (width < 1024px) {
			padding-left: range(10px, 80px);
		}
	}

	.article-title {
		margin: 0 0 1em;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: calc(24 / 18);
	}

	.article-description {
		margin: 0;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: calc(22 / 16);
	}
</style>
