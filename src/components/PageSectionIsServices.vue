<script>
	import PageSection from './PageSection';

	export default {
		name: 'PageSectionIsServices',
		extends: {
			PageSection
		},
		data() {
			return {
				servicesItemHasMixBlendMode: document.documentElement.style.mixBlendMode !== undefined
			};
		}
	};
</script>

<style scoped src="./PageSection.vue">
</style>

<style scoped>
	.PageSectionIsServices {
		background: url("../assets/img/section-services-bg.jpg") no-repeat 50% 50% / cover #f0f0f0;
		padding: 0;
	}

	.header {
		padding: range(40px / 2, 40px) 0;
		margin: 0;
	}

	.services {
		position: relative;
		max-width: env(--max-breakpoint);
		margin: 0 auto;

		@media (width >= 768px) {
			&::before {
				content: '';
				display: block;
				padding-top: percentage((239 + 631) / 1920);
			}
		}

		@media (width < 768px) {
			display: flex;
			flex-wrap: wrap;
		}
	}

	.services-item {
		display: block;
		color: var(--color);
		text-decoration: none;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0.6;
			transition: background-color, mix-blend-mode;
			transition-duration: 0.3s;
			transition-timing-function: linear;
			will-change: background-color, mix-blend-mode;
			pointer-events: none;
		}

		&:hover {
			&::before {
				background-color: inherit;
			}
		}

		@media (width >= 768px) {
			position: absolute;
		}

		@media (width < 768px) {
			position: relative;
			width: 50%;
			height: 25vw;
		}

		@media (width < 425px) {
			width: 100%;
			height: 30vw;
		}
	}

	.services-item-has-mix-blend-mode {
		:root:not(.is-browser-mobile-safari) & {
			&::before {
				mix-blend-mode: darken;
			}

			&:hover {
				&::before {
					mix-blend-mode: darken;
				}
			}
		}
	}

	.services-item-is-1 {
		background: url("../assets/img/services/create-logo.jpg") no-repeat 50% 50% / cover #00c2c2;

		@media (width >= 768px) {
			top: 0;
			left: 0;
			width: percentage(818 / 1920);
			padding-top: percentage(239 / 1920);
		}
	}

	.services-item-is-2 {
		background: url("../assets/img/services/audit.jpg") no-repeat 50% 50% / cover #006d68;

		@media (width >= 768px) {
			z-index: 1;
			top: 0;
			left: percentage(818 / 1920);
			width: percentage(496 / 1920);
			padding-top: percentage(459 / 1920);
		}
	}

	.services-item-is-3 {
		background: url("../assets/img/services/single-page-site.jpg") no-repeat 50% 50% / cover #009640;

		@media (width >= 768px) {
			top: 0;
			left: percentage((818 + 496) / 1920);
			width: percentage((1920 - (818 + 496)) / 1920);
			padding-top: percentage((459 - 239) / 1920);
		}
	}

	.services-item-is-4 {
		background: url("../assets/img/services/seo-kernel.jpg") no-repeat 50% 50% / cover #3aaa35;

		@media (width >= 768px) {
			top: percentage((459 - 239) / (239 + 631));
			left: percentage((818 + 496) / 1920);
			width: percentage((1920 - (818 + 496)) / 1920);
			padding-top: percentage(239 / 1920);
		}
	}

	.services-item-is-5 {
		background: url("../assets/img/services/corp-site.jpg") no-repeat 50% 50% / cover #a76700;

		@media (width >= 768px) {
			top: percentage(239 / (239 + 631));
			left: 0;
			width: percentage(1032 / 1920);
			padding-top: percentage(631 / 1920);
		}
	}

	.services-item-is-6 {
		background: url("../assets/img/services/e-market.jpg") no-repeat 50% 50% / cover #7b3200;

		@media (width >= 768px) {
			top: percentage((459 - 239 + 239) / (239 + 631));
			left: percentage(1032 / 1920);
			width: percentage((1920 - 1032) / 1920);
			padding-top: percentage((239 + 631 - (459 - 239) - 239) / 1920);
		}
	}

	.services-item-inner {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: range(10px, 20px);
		display: flex;
		flex-flow: column;

		@media (width >= 768px) {
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.services-item-title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(3.6rem / 2.5, 3.6rem);
		font-weight: 500;
		line-height: 1.25;
		margin: auto 0;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: calc(1.25em * 2);
		text-shadow: 0 1px 2px rgba(#000, 0.8);

		@media (width < 768px) {
			font-size: range(1.8rem, 2rem);
		}
	}
</style>
