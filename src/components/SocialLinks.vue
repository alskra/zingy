<script>
	export default {
		name: 'SocialLinks',
		data() {
			return {
				linkIconIsMasked: document.documentElement.style.WebkitMask !== undefined
			};
		}
	};
</script>

<style>
	:root {
		--social-links_justify-content: flex-start;
	}
</style>

<style scoped>
	.social-links {
		display: block;
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: var(--social-links_justify-content);
		margin: -10px -15px;
	}

	.grid-cell {
		margin: 10px 15px;
	}

	.link {
		display: block;
		width: range(38px / 1.5, 38px);
		height: range(38px / 1.5, 38px);
		text-decoration: none;
		color: #1a1a1a;
		transition: color, filter;
		transition-duration: 0.2s;
		overflow: hidden;
		will-change: color, filter;

		&:hover {
			color: var(--color-link);
			filter: drop-shadow(0 0 3px var(--color-link));

			.link-icon-is-masked.host {
				background-size: 100% 100%;
			}
		}
	}

	.link-icon.host {
		pointer-events: none;
	}

	.link-icon-is-masked.host {
		background: linear-gradient(to right, var(--color-link), var(--color-link)) no-repeat 0 0 / 0 100% #1a1a1a;
		transition: background-size 0.2s;
		will-change: backgroud-size;

		>>> * {
			display: none;
		}

		&.base-icon-is-vk {
			mask: url("../assets/img/icons/vk.svg");
		}

		&.base-icon-is-facebook {
			mask: url("../assets/img/icons/facebook.svg");
		}

		&.base-icon-is-twitter {
			mask: url("../assets/img/icons/twitter.svg");
		}

		&.base-icon-is-yandex-zen {
			mask: url("../assets/img/icons/yandex-zen.svg");
		}

		&.base-icon-is-instagram {
			mask: url("../assets/img/icons/instagram.svg");
		}

		&.base-icon-is-youtube {
			mask: url("../assets/img/icons/youtube.svg");
		}
	}
</style>
