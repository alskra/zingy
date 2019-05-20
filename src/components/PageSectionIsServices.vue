<script>
	import PageSection from './PageSection';

	export default {
		name: 'PageSectionIsServices',
		extends: {
			PageSection
		}
	};
</script>

<style scoped src="./PageSection.vue">
</style>

<style scoped>
	.PageSectionIsServices {
		background-color: #f0f0f0;
		padding: 0;
	}

	.header {
		padding: range(40px, 80px) 0;
		margin: 0;
		background: url("../assets/img/section-services-bg.jpg") no-repeat 50% 50% / cover;
	}

	.services-list {
		position: relative;

		@media (width >= 768px) {
			padding-top: percentage((239 + 631) / 1920);
		}

		@media (width < 768px) {
			display: flex;
			flex-wrap: wrap;
		}
	}

	.services-list-item {
		display: block;
		color: var(--color);
		text-decoration: none;
		/*background-color: rgba(0, 0, 0, 0.6);*/
		/*box-shadow: 0 0 0 1px red inset;*/

		&::before {
			content: '';
			position: absolute;
			/*z-index: 1;*/
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: inherit;
			opacity: 0;
			transition: opacity 0.3s;
			/*mix-blend-mode: overlay;*/
			/*mix-blend-mode: multiply;*/
			/*mix-blend-mode: hard-light;*/
			mix-blend-mode: color;
			pointer-events: none;
		}

		&:hover {
			&::before {
				opacity: 1;
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

	.services-list-item-is-1 {
		background: url("../assets/img/services/create-logo.jpg") no-repeat 50% 50% / cover #00ffff;

		@media (width >= 768px) {
			top: 0;
			left: 0;
			width: percentage(818 / 1920);
			padding-top: percentage(239 / 1920);
		}
	}

	.services-list-item-is-2 {
		background: url("../assets/img/services/audit.jpg") no-repeat 50% 50% / cover #006d68;

		@media (width >= 768px) {
			z-index: 1;
			top: 0;
			left: percentage(818 / 1920);
			width: percentage(496 / 1920);
			padding-top: percentage(459 / 1920);
		}
	}

	.services-list-item-is-3 {
		background: url("../assets/img/services/single-page-site.jpg") no-repeat 50% 50% / cover #009640;

		@media (width >= 768px) {
			top: 0;
			left: percentage((818 + 496) / 1920);
			width: percentage((1920 - (818 + 496)) / 1920);
			padding-top: percentage((459 - 239) / 1920);
		}
	}

	.services-list-item-is-4 {
		background: url("../assets/img/services/seo-kernel.jpg") no-repeat 50% 50% / cover #3aaa35;

		@media (width >= 768px) {
			top: percentage((459 - 239) / (239 + 631));
			left: percentage((818 + 496) / 1920);
			width: percentage((1920 - (818 + 496)) / 1920);
			padding-top: percentage(239 / 1920);
		}
	}

	.services-list-item-is-5 {
		background: url("../assets/img/services/corp-site.jpg") no-repeat 50% 50% / cover #a76700;

		@media (width >= 768px) {
			top: percentage(239 / (239 + 631));
			left: 0;
			width: percentage(1032 / 1920);
			padding-top: percentage(631 / 1920);
		}
	}

	.services-list-item-is-6 {
		background: url("../assets/img/services/e-market.jpg") no-repeat 50% 50% / cover #7b3200;

		@media (width >= 768px) {
			top: percentage((459 - 239 + 239) / (239 + 631));
			left: percentage(1032 / 1920);
			width: percentage((1920 - 1032) / 1920);
			padding-top: percentage((239 + 631 - (459 - 239) - 239) / 1920);
		}
	}

	.services-list-item-box {
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

	.services-list-item-title {
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

		@media (width < 768px) {
			font-size: range(1.8rem, 2rem);
		}
	}
</style>
