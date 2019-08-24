<template lang="pug">
	.articles-feed
		intersect(
			v-for="(article, index) of articles"
			:key="article.url"
			:threshold="[0]"
			@enter.once="onEnter"
		)
			.item(
				:id="article.url"
				ref="item"
			)
				slot(
					v-if="index === 0"
					name="first-item"
				)

				component(
					v-else
					:is="article"
				)
</template>

<script>
	import axios from 'axios';
	import Intersect from 'vue-intersect';
	import AppArticle from './AppArticle';

	export default {
		name: 'ArticlesFeed',
		components: {
			Intersect
		},
		data() {
			return {
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
			}
		},
		methods: {
			getAlias(path) {
				return path
					.replace(/^.+\//, '')
					.replace(/\.\w+$/, '');
			},
			onEnter() {
				axios.get(`https://zingy-projects.com/apppagination?page=${++this.lastLoadedIndex}`)
					.then(response => {
						if (response.data) {
							console.log(response.data.title);
							console.log(this.getAlias(this.articles[0].url));
							console.log(response.data.url.replace(/^.+\//, ''));

							if (this.getAlias(response.data.url) !== this.firstItemAlias) {
								this.articles.push({
									extends: AppArticle,
									...response.data,
									template: response.data.template
										.replace(/&#123;/g, '{')
										.replace(/&#125;/g, '}')
								})
							} else {
								this.onEnter();
							}
						}
					});
			},
			checkScroll() {
				if (this.articles.length > 1) {
					for (let index = 0; index < this.$refs.item.length; index++) {
						const rect = this.$refs.item[index].getBoundingClientRect();

						if (rect.top > window.innerHeight / 2 && index - 1 >= 0) {
							history.replaceState(null, this.articles[index - 1].title, this.articles[index - 1].url);
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
</style>
