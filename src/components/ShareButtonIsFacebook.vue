<template lang="pug">
	a.share-button.share-button-is-facebook(
		:page-url="page_url"
		@click.prevent="showShareWindow"
	)
		base-icon.icon.icon-is-facebook(
			name="facebook-box"
			v-if="has_icon"
		)

		span.title.title-is-facebook(v-if="title_social") {{ title_social }}
		span.counter.counter-is-facebook(v-if="has_counter") {{ counter_facebook }}
</template>

<script>
	import ShareButton from './ShareButton';
	import {clickEvent} from "vue-goodshare/src/helpers/events";
	import {documentHrefWithoutHash} from "vue-goodshare/src/helpers/href";
	import {getCallbackName} from "vue-goodshare/src/helpers/callback_name";
	import {sliceThousandInt} from "vue-goodshare/src/helpers/count_number";
	import {openPopUpWindow} from "vue-goodshare/src/helpers/popup_window";

	export default {
		name: "ShareButtonIsFacebook",
		extends: ShareButton,
		props: {
			page_url: {
				type: String,
				default: documentHrefWithoutHash
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
					facebook__design__flat: this.$props.button_design === "flat",
					facebook__design__gradient: this.$props.button_design === "gradient",
					facebook__design__outline: this.$props.button_design === "outline"
				},
				counter_facebook: 0
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
				const share_url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					this.$props.page_url
				)}`;

				// onClick event
				clickEvent(this, "facebook");

				return openPopUpWindow(share_url, width, height);
			},

			/**
			 * Get share counter.
			 *
			 * @return {object} a share counter
			 */
			getShareCounter: function () {
				// Variables
				const script = document.createElement("script");
				const callback = getCallbackName("vue_goodshare", 9999, 111);

				// Create `script` tag with share count URL
				script.src = `https://graph.facebook.com?id=${encodeURIComponent(
					this.$props.page_url
				)}&callback=${callback}`;

				// Add `script` tag with share count URL
				// to end of `body` tag
				document.body.appendChild(script);

				// Set share count to `counter_facebook` v-model
				window[callback] = count => {
					if (count.share) {
						this.counter_facebook =
							count.share.share_count >= 1000
								? sliceThousandInt(count.share.share_count)
								: count.share.share_count;

						this.$emit('count-update', count.share.share_count);
					}
				};
			}
		},
		mounted() {
			// Show share counter when page loaded
			if (this.$props.has_counter) this.getShareCounter();
		}
	};
</script>

<style scoped src="./ShareButton.vue"></style>

<style scoped>
	.share-button-is-facebook {
		&:hover {
			.base-icon.icon {
				color: #3b5999;
			}
		}
	}
</style>
