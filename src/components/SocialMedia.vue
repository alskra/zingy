<script>
	export default {
		name: 'SocialMedia'
	};
</script>

<style>
	:root {
		--v-social-media_justify-content: flex-start;
	}
</style>

<style scoped>
	.SocialMedia {
		all: initial;

		& {
			display: block;
		}
	}

	.l-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: var(--v-social-media_justify-content);
		margin: -10px -15px;
	}

	.l-grid-item {
		margin: 10px 15px;
	}

	.media-item {
		display: block;
		width: range(38px / 1.5, 38px);
		height: range(38px / 1.5, 38px);
		text-decoration: none;
		color: #1a1a1a;
		transition: color, filter;
		transition-duration: 0.2s;
		overflow: hidden;

		.BaseIcon {
			:root:not(.is-ie) & {
				>>> g {
					display: none;
				}

				background: linear-gradient(to right, #ec5151, #ec5151) no-repeat 0 0 / 0 100% #1a1a1a;
				transform-origin: 0 0;
				transform: scale(range(38 / 1.5 / 24, 38 / 24));
				transition: background-size 0.2s;
			}
		}

		&:hover {
			color: #ec5151;
			filter: drop-shadow(0 0 3px #ec5151);

			.BaseIcon {
				:root:not(.is-ie) & {
					background-size: 100% 100%;
				}
			}
		}
	}
</style>
