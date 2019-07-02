<i18n>
	{
		"en": {
			"vk": "VK",
			"facebook": "Facebook",
			"twitter": "Twitter",
			"yandex-zen": "Yandex Zen",
			"instagram": "Instagram",
			"youtube": "YouTube"
		},
		"ru": {
			"vk": "VK",
			"facebook": "Facebook",
			"twitter": "Twitter",
			"yandex-zen": "Яндекс Дзен",
			"instagram": "Instagram",
			"youtube": "YouTube"
		}
	}
</i18n>

<template lang="pug">
	nav.social-links(v-once)
		.grid
			.grid-cell(v-for="{name, url} of links")
				a.link(
					:href="url"
					target="_blank"
					:title="$t(name)"
					rel="nofollow"
				)
					base-icon.link-icon(
						:name="name"
						:class="{'link-icon-is-masked': linkIconIsMasked}"
					)
</template>

<script>
	export default {
		name: 'SocialLinks',
		props: {
			links: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				linkIconIsMasked: document.documentElement.style.WebkitMask !== undefined
			};
		}
	};
</script>

<style scoped>
	.social-links {
		all: initial;

		& {
			display: block;
		}
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: var(--social-links_justify-content, flex-start);
		margin: -10px -15px;
	}

	.grid-cell {
		margin: 10px 15px;
	}

	.link {
		display: block;
		width: range(38px / 1.5, 38px);
		height: range(38px / 1.5, 38px);
		overflow: hidden;
		text-decoration: none;
		color: #1a1a1a;
		filter: drop-shadow(0 0);
		transition: color, filter;
		transition-duration: 0.2s;
		will-change: color, filter;
		transform: translate3d(0, 0, 0);

		&:hover {
			color: var(--color-link);
			filter: drop-shadow(0 0 3px);

			.base-icon.link-icon-is-masked {
				background-size: 100% 100%;
			}
		}
	}

	.base-icon.link-icon {
		pointer-events: none;
	}

	.base-icon.link-icon-is-masked {
		background: linear-gradient(to right, var(--color-link), var(--color-link)) no-repeat 0 0 / 0 100% #1a1a1a;
		transition: background-size 0.2s;
		will-change: background-size;

		>>> * {
			display: none;
		}
	}

	.link-icon-is-masked {
		.base-icon-is-vk& {
			mask: url("../assets/img/icons/vk.svg") 50% / contain;
		}

		.base-icon-is-facebook& {
			mask: url("../assets/img/icons/facebook.svg") 50% / contain;
		}

		.base-icon-is-twitter& {
			mask: url("../assets/img/icons/twitter.svg") 50% / contain;
		}

		.base-icon-is-yandex-zen& {
			mask: url("../assets/img/icons/yandex-zen.svg") 50% / contain;
		}

		.base-icon-is-instagram& {
			mask: url("../assets/img/icons/instagram.svg") 50% / contain;
		}

		.base-icon-is-youtube& {
			mask: url("../assets/img/icons/youtube.svg") 50% / contain;
		}
	}
</style>
