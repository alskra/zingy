<template lang="pug">
	a.share-button.share-button-is-vk(
		:page-url="page_url"
		:page-title="page_title"
		:page-description="page_description"
		:page-image="page_image"
		@click.prevent="showShareWindow"
	)
		base-icon.icon.icon-is-vk(
			name="vk-box"
			v-if="has_icon"
		)

		span.title.title-is-vk(v-if="title_social") {{ title_social }}
		span.counter.counter-is-vk(v-if="has_counter") {{ counter_vkontakte }}
</template>

<script>
	import ShareButton from './ShareButton';
	import {shareCounter} from './ShareButton';
	import {clickEvent} from "vue-goodshare/src/helpers/events";
	import {documentHref} from "vue-goodshare/src/helpers/href";
	import {documentTitle} from "vue-goodshare/src/helpers/title";
	import {metaDescription} from "vue-goodshare/src/helpers/description";
	import {linkAppleTouchIcon} from "vue-goodshare/src/helpers/icon";
	import {sliceThousandInt} from "vue-goodshare/src/helpers/count_number";
	import {getRandomInt} from "vue-goodshare/src/helpers/random_int";
	import {openPopUpWindow} from "vue-goodshare/src/helpers/popup_window";

	export default {
		name: "ShareButtonIsVk",
		extends: ShareButton,
		props: {
			page_url: {
				type: String,
				default: documentHref
			},
			page_title: {
				type: String,
				default: documentTitle
			},
			page_description: {
				type: String,
				default: metaDescription
			},
			page_image: {
				type: String,
				default: linkAppleTouchIcon
			},
			button_design: {
				type: String,
				default: () => "flat"
			},
			title_social: String,
			has_icon: Boolean,
			has_square_edges: Boolean,
			has_counter: Boolean
		},
		data() {
			return {
				buttonSocialDesignObject: {
					"button-social__square_edges": this.$props.has_square_edges,
					vkontakte__design__flat: this.$props.button_design === "flat",
					vkontakte__design__gradient: this.$props.button_design === "gradient",
					vkontakte__design__outline: this.$props.button_design === "outline"
				},
				counter_vkontakte: 0
			};
		},
		methods: {
			/**
			 * Show share window.
			 *
			 * @return {object} a pop-up window
			 */
			showShareWindow: function () {
				// Variables
				const width = 640;
				const height = 480;
				const share_url = `https://vk.com/share.php?url=${encodeURIComponent(
					this.$props.page_url
				)}&title=${encodeURIComponent(
					this.$props.page_title
				)}&description=${encodeURIComponent(
					this.$props.page_description
				)}&image=${encodeURIComponent(this.$props.page_image)}&noparse=true`;

				// onClick event
				clickEvent(this, "vkontakte");

				return openPopUpWindow(share_url, width, height);
			},

			handleUpdateCount(count) {
				this.counter_vkontakte = count >= 1000 ? sliceThousandInt(count) : count;
			},

			/**
			 * Get share counter.
			 *
			 * @return {object} a share counter
			 */
			getShareCounter: function () {
				// Let's see whether some other component has already
				// asked for count. Then we just subscribe for the count update event
				// if (
				// 	window.VK &&
				// 	window.VK.Share &&
				// 	typeof window.VK.Share.count === "function"
				// ) {
				// 	return;
				// }
				// Variables
				const index = getRandomInt(1, 2345);
				const script = document.createElement("script");

				// Create `script` tag with share count URL
				script.src = `https://vk.com/share.php?act=count&index=${index}&url=${encodeURIComponent(this.$props.page_url)}`;

				// Add `script` tag with share count URL
				// to end of `body` tag
				document.body.appendChild(script);

				// Set share count to `counter_vkontakte` v-model
				window.VK = Object.assign({}, {Share: {}}, window.VK);

				window.VK.Share[index] = count => {
					this.handleUpdateCount(count);
					this.$set(shareCounter.urls, this.page_url, (shareCounter.urls[this.page_url] || 0) + count);
					console.log(shareCounter);
				};

				if (
					window.VK &&
					window.VK.Share &&
					typeof window.VK.Share.count === "function"
				) {
					return;
				}

				window.VK.Share.count = (index, count) => {
					if (count) {
						// this.$root.$emit("VK:Share:count:update", count);
						// shareCounter.value += count;
						// this.handleUpdateCount(count);
						// this.$set(shareCounter.urls, this.page_url, (shareCounter.urls[this.page_url] || 0) + count);
						// console.log(shareCounter);

						window.VK.Share[index](count);
					}
				};
			}
		},
		mounted() {
			// Show share counter when page loaded
			if (this.$props.has_counter) this.getShareCounter();
			// Subscribe to update count event using $root as an event bus
			this.$root.$on("VK:Share:count:update", this.handleUpdateCount);
		},
		destroyed() {
			this.$root.$off("VK:Share:count:update", this.handleUpdateCount);
		}
	};
</script>

<style scoped src="./ShareButton.vue"></style>

<style scoped>
	.share-button-is-vk {
		&:hover {
			.base-icon.icon {
				color: #4c75a3;
			}
		}
	}
</style>
