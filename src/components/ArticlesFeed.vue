<template lang="pug">
	.articles-feed
		intersect(
			v-for="(article, index) of articles"
			:key="article.url"
			:threshold="[0]"
			@enter.once="onEnter"
		)
			.item(
				ref="item"
				:id="article.url"
			)
				slot(
					v-if="index === 0"
					name="first-item"
				)

				component(
					v-else
					:is="article"
				)

		.loader(v-if="loading")
			loading(
				:active="loading"
				:is-full-page="false"
				loader="bars"
				color="var(--color-accent)"
			)

		.error(v-if="error") {{ error }}
</template>

<script>
	import axios from 'axios';
	import Intersect from 'vue-intersect';
	import 'vue-loading-overlay/dist/vue-loading.css';
	import Loading from 'vue-loading-overlay';
	import AppArticle from './AppArticle';

	export default {
		name: 'ArticlesFeed',
		components: {
			Intersect,
			Loading
		},
		data() {
			return {
				loading: false,
				error: null,
				lastLoadedIndex: 0,
				articles: [
					{
						url: location.href,
						title: document.title
					}
				]
			};
		},
		computed: {
			firstItemAlias() {
				return this.getAlias(this.articles[0].url);
			},
			topSpacing() {
				let value = 60 + (108 - 60) / (1920 - 320) * (this.windowWidth - 320);

				if (value > 108) value = 108;
				if (value < 60) value = 60;

				return value;
			}
		},
		methods: {
			getAlias(path) {
				return path
					.replace(/^.+\//, '')
					.replace(/\.\w+$/, '');
			},
			getData() {
				this.loading = true;
				this.error = null;

				axios.get(`https://zingy-projects.com/apppagination?page=${++this.lastLoadedIndex}`)
					.then(({data}) => {
						if (data) {
							if (this.getAlias(data.url) !== this.firstItemAlias) {
								this.articles.push({
									extends: AppArticle,
									...data,
									template: data.template
										.replace(/&#123;/g, '{')
										.replace(/&#125;/g, '}')
								})
							} else {
								this.getData();
							}
						}
					})
					.catch(error => {
						this.error = error;
					})
					.finally(() => {
						this.loading = false;
					});
			},
			onEnter() {
				this.getData();
			},
			checkScroll() {
				if (this.articles.length > 1) {
					for (let index = 0; index < this.$refs.item.length; index++) {
						const rect = this.$refs.item[index].getBoundingClientRect();

						if (rect.top > this.topSpacing) {
							const activeIndex = index > 0 ? index - 1 : 0;

							if (this.getAlias(this.articles[activeIndex].url) !== this.getAlias(location.pathname)) {
								history.replaceState(null, this.articles[activeIndex].title, this.articles[activeIndex].url);
								document.title = this.articles[activeIndex].title;
							}

							break;
						}
					}
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.checkScroll);
		}
	};
</script>

<style scoped>
	.articles-feed {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.item {
		& + & {
			margin-top: range(30px, 60px);
		}
	}

	.loader {
		position: relative;
		height: 100px;
	}

	.error {
		padding: 20px 0;
		color: var(--color-accent);
	}
</style>
