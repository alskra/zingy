<template lang="pug">
	a.share-button.share-button-is-twitter(
		:page-url="page_url"
		:page-title="page_title"
		:button-design="button_design"
		@click.prevent="showShareWindow"
	)
		base-icon.icon.icon-is-twitter(
			name="twitter-box"
			v-if="has_icon"
		)

		span.title.title-is-social(v-if="title_social") {{ title_social }}
</template>

<script>
	import ShareButton from './ShareButton';
	import {clickEvent} from "vue-goodshare/src/helpers/events";
	import {documentHref} from "vue-goodshare/src/helpers/href";
	import {documentTitle} from "vue-goodshare/src/helpers/title";
	import {openPopUpWindow} from "vue-goodshare/src/helpers/popup_window";

	export default {
		name: "ShareButtonIsTwitter",
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
			button_design: {
				type: String,
				default: () => "flat"
			},
			title_social: String,
			has_icon: Boolean,
			has_square_edges: Boolean
		},
		data() {
			return {
				buttonSocialDesignObject: {
					"button-social__square_edges": this.$props.has_square_edges,
					twitter__design__flat: this.$props.button_design === "flat",
					twitter__design__gradient: this.$props.button_design === "gradient",
					twitter__design__outline: this.$props.button_design === "outline"
				}
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
				const share_url = `https://twitter.com/share?url=${encodeURIComponent(
					this.$props.page_url
				)}&text=${encodeURIComponent(this.$props.page_title)}`;

				// onClick event
				clickEvent(this, "twitter");

				return openPopUpWindow(share_url, width, height);
			}
		}
	};
</script>

<style scoped src="./ShareButton.vue"></style>

<style scoped>
	.share-button-is-twitter {
		&:hover {
			.base-icon.icon {
				color: #55acee;
			}
		}
	}
</style>
