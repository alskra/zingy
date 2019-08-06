<template lang="pug">
	.articles-feed
		intersect(
			:threshold="[0]"
			@change="log($event)"
			@enter="onEnter"
			@leave="log('leave')"
		)
			.item
				slot(name="first-item")

		intersect(
			v-for="article of articles"
			:key="article.url"
			:threshold="[0]"
			@change="log($event)"
			@enter="onEnter"
			@leave="log('leave')"
		)
			.item
</template>

<script>
	import Intersect from 'vue-intersect';
	import AppArticle from './AppArticle';

	export default {
		name: 'ArticlesFeed',
		components: {
			Intersect
		},
		data() {
			return {
				lastLoadedIndex: -1,
				articles: []
			};
		},
		methods: {
			log(val) {
				console.log(val);
			},
			onEnter() {
				console.log('enter');
			}
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
</style>
