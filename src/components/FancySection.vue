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
						@click.prevent="$root.showModalFeedback()"
					) {{ $getText(children) }}

	section.fancy-section(
		:set.prop=`(
			title = $getSlot('title'),
			buttons = $getSlot('buttons'),
			articles = $getSlot('articles'),
			tabs = $getSlot('tabs'),
			activeTab = tabs && tabs[activeTabIndex].slots
		)`
	)
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
						.grid-cell(:class="{'grid-cell-7': articles}")
							header.header(v-if="title")
								.title(
									v-if="title"
									:is="title[0].tag"
								) {{ $getText(title) }}

							.main
								base-content.content(v-if="$scopedSlots.content")
									slot(name="content")

							footer.footer(v-if="buttons && windowWidth >= 1024")
								+buttons()

						.grid-cell(
							v-if="articles"
							:class="{'grid-cell-5': articles}"
						)
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
												) {{ $getText(title) }}

												p.article-description(
													v-if="description"
												) {{ $getText(description) }}

					.grid-row.grid-row-is-tabs(v-if="tabs")
						.grid-cell.grid-cell-8
							.main
								.tabs
									transition(appear)
										base-content.tabs-item(:key="activeTabIndex")
											v-nodes(:vnodes="activeTab.content")

						.grid-cell.grid-cell-4
							.tabs-nav
								vue-swiper(
									ref="tabsNavSwiper"
									:options="tabsNavSwiperOptions"
								)
									.swiper-slide(
										v-for="({tag, data: {attrs} = {}, slots: {title} = {}}, index) of tabs"
										:key="index"
									)
										button.tabs-nav-item(
											type="button"
											:class="{active: index === activeTabIndex}"
											@click.prevent="activeTabIndex = index"
										)
											span.tabs-nav-item-text {{ $getText(title) }}

					.grid-row(v-if="buttons && windowWidth < 1024")
						.grid-cell
							footer.footer
								+buttons()

				.scroll-down(
					v-if="scrollDown"
					:style="scrollDownStyle"
				) {{ $t('scroll-down') }}
</template>

<script>
	import VueSwiper from './VueSwiper';

	export default {
		name: 'FancySection',
		components: {
			VueSwiper
		},
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
				transitionEnd: false,
				activeTabIndex: 0,
				tabsNavSwiperOptions: {
					init: false,
					slidesPerView: 'auto',
					roundLengths: true
				}
			};
		},
		watch: {
			windowWidth: {
				handler(val) {
					this.tabsNavSwiperOptions.init = val < 1024;
				},
				immediate: true
			},
			activeTabIndex(val) {
				if (this.$refs.tabsNavSwiper && this.$refs.tabsNavSwiper.swiper.initialized) {
					this.$refs.tabsNavSwiper.swiper.slideTo(val);
				}
			}
		},
		methods: {
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
					this.scrollDownStyle = null;
				}
			},
			onWindowScrollOrResize() {
				this.fixScrollDown();
			}
		},
		mounted() {
			this.fixScrollDown();
			window.addEventListener('scroll', this.onWindowScrollOrResize);
			window.addEventListener('resize', this.onWindowScrollOrResize);
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
			padding: range(30px, 60px) 0;
			max-width: 100%;
			flex-flow: column;
			background-color: white;
		}

		&.padding-top-none {
			padding-top: 0;
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
			background-color: var(--color-accent) /*#b84242*/;
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
			.main,
			.footer,
			.scroll-down {
				transition: opacity 0.3s;
			}

			.articles,
			.tabs-nav {
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

			.main {
				transition-delay: 0.6s;
			}

			.footer {
				transition-delay: 0.7s;
			}

			.scroll-down {
				transition-delay: 0.8s;
			}

			.articles,
			.tabs-nav {
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
			.main,
			.footer,
			.scroll-down {
				opacity: 0;
			}

			.articles,
			.tabs-nav {
				opacity: 0;
				transform: translateX(10px);
			}
		}
	}

	.body-inner {
		display: flex;
		box-sizing: border-box;
		position: relative;
		margin: range(5px, 8px) range(5px, 8px) 0 0;
		padding: range(30px, 60px) range(10px, 80px);
		flex-direction: column;
		background-color: #f0f0f0;
	}

	.body-inner-has-scroll-down {
		padding-bottom: range(50px, 100px);
	}

	.grid-row {
		display: flex;
		margin: range(-15px, -30px) var(--grid-row_margin);
		flex-wrap: wrap;

		& + .grid-row {
			margin-top: range(15px, 30px);
		}
	}

	.grid-row-is-tabs {
		@media (width < 1024px) {
			.grid-cell {
				&:nth-child(2) {
					order: -1;
				}
			}
		}
	}

	.grid-cell {
		display: flex;
		box-sizing: border-box;
		padding: range(15px, 30px) var(--grid-cell_padding);
		flex: 0 0 100%;
		min-width: 0;
		max-width: 100%;
		flex-flow: column;
	}

	.grid-cell-4 {
		@media (width >= 1024px) {
			flex-basis: percentage(4 / 12);
		}
	}

	.grid-cell-5 {
		@media (width >= 1024px) {
			flex-basis: percentage(5 / 12);
		}
	}

	.grid-cell-7 {
		@media (width >= 1024px) {
			flex-basis: percentage(7 / 12);
		}
	}

	.grid-cell-8 {
		@media (width >= 1024px) {
			flex-basis: percentage(8 / 12);
		}
	}

	.header {
		margin-bottom: range(20px, 40px);
	}

	.title {
		margin: 0;
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;

		@media (width >= 1440px) {
			margin-left: range(-100px, -180px);
		}
	}

	.main {
		margin-bottom: auto;
	}

	.base-content.content {
		& + .tabs {
			margin-top: range(20px, 40px);
		}
	}

	.tabs {
		display: flex;

		@media (width >= 1440px) {
			margin-right: range(-100px, -180px);
		}
	}

	.base-content.tabs-item {
		position: relative;
		flex: 0 0 100%;
		min-width: 100%;

		& + & {
			z-index: 1;
			margin-left: -100%;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.footer {
		margin-top: range(20px, 40px);

		@media (width < 1024px) {
			margin-top: 0;
		}
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
		margin: range(-5px, -10px) var(--grid-row_margin);
		flex-flow: column;

		@media (width < 1024px) {
			margin-top: range(-2px, -4px);
			margin-bottom: range(-2px, -4px);
		}
	}

	.articles-grid-cell {
		box-sizing: border-box;
		padding: range(5px, 10px) var(--grid-cell_padding);
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
		}
	}

	.article {
		display: flex;
		box-sizing: border-box;
		position: relative;
		margin: 0;
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

	.tabs-nav {
		background-color: #2a2c2b;

		>>> .swiper-slide {
			width: auto;
			max-width: 100%;
		}

		@media (width >= 1024px) {
			>>> .swiper-container {
				overflow: visible;
			}

			>>> .swiper-wrapper {
				flex-direction: column;
			}
		}

		@media (width >= 1440px) {
			margin-right: range(-100px, -180px);
			margin-left: range(100px, 180px);
		}

		@media (width < 1024px) {
			margin: 0 range(-10px, -80px);
		}
	}

	.tabs-nav-item {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: 10px range(10px, 15px);
			width: 100%;
			min-height: range(48px, 58px);
			justify-content: center;
			align-items: center;
			color: #ffffff;
			font-family: var(--font-family);
			font-size: range(1.6rem, 1.8rem);
			font-weight: 500;
			line-height: 1.25;
			cursor: pointer;
			box-shadow: 0 0 var(--color-accent);
			transition: background-color, box-shadow;
			transition-duration: 0.3s;
		}

		&:hover,
		&.active {
			.tabs-nav-item-text {
				background-size: 100% 2px;
			}
		}

		&.active {
			background-color: #222222;
			box-shadow: 5px 0 var(--color-accent);
		}

		@media (width < 1024px) {
			&.active {
				box-shadow: none;
			}
		}
	}

	.tabs-nav-item-text {
		padding: 2px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: linear-gradient(to right, var(--color-accent), var(--color-accent)) no-repeat 0 100% / 0 2px;
		transition: background-size 0.2s;
	}
</style>
