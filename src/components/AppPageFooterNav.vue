<script>
	const AppPageFooterNav = {
		name: 'AppPageFooterNav'
	};

	export default AppPageFooterNav;

	export const AppPageFooterNavExtSection = {
		name: 'AppPageFooterNavExtSection',
		mixins: [AppPageFooterNav],
		data() {
			return {
				hoverItemStyle: null
			};
		},
		methods: {
			onNavItemMouseOver(event) {
				const navItem = event.target.closest('.navitem');

				if (navItem) {
					this.hoverItemStyle = {
						...this.hoverItemStyle,
						...{
							top: navItem.offsetTop + 'px',
							height: navItem.offsetHeight + 'px'
						}
					};
				}
			},
			onNavItemMouseOut() {
				this.hoverItemStyle = {
					...this.hoverStyle,
					...{
						top: '',
						height: ''
					}
				};
			}
		}
	}
</script>

<style scoped>
	.app-page-footer-nav {
		all: initial;

		& {
			display: block;
		}
	}

	.navgrid {
		display: flex;
		flex-flow: column;
		margin: 0 -10px;

		@media (width < 768px) {
			flex-flow: row;
			flex-wrap: wrap;
		}

		&-item {
			margin: 0 10px;
			display: flex;
		}
	}

	.navitem {
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 8px 0;
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;

		&:hover {
			.navitem-text {
				background-size: 100% 2px;
			}
		}
	}

	.navitem-text {
		padding-bottom: 1px;
		transition: background-size 0.2s;
		background: linear-gradient(#ec5151, #ec5151) no-repeat 0 100% / 0 2px;
	}
</style>

<style scoped>
	.app-page-footer-nav-ext-section {
		position: relative;

		.hoveritem {
			width: 3px;
			height: 28px;
			background-color: #e04b4a;
			position: absolute;
			top: 0;
			left: 0;
			transition-property: top, height;
			transition-duration: 0.3s;
			pointer-events: none;
		}

		.navname {
			overflow: hidden;
			text-overflow: ellipsis;
			padding: 3px 0 3px 28px;
			color: #ffffff;
			font-family: var(--font-family, sans-serif);
			font-size: range(1.6rem, 1.8rem);
			font-weight: 500;
			line-height: 1.25;
			text-decoration: none;
			text-transform: uppercase;
			margin-bottom: 5px;
		}

		.navitem {
			width: 100%;
			font-weight: 300;
			padding-left: 28px;
		}

		.navitem-text {
			background: none;
		}
	}
</style>
