<script>
	const AppPageFooterNav = {
		name: 'AppPageFooterNav'
	};

	export default AppPageFooterNav;

	export const AppPageFooterNavOfSection = {
		name: 'AppPageFooterNavOfSection',
		mixins: [AppPageFooterNav],
		data() {
			return {
				hoverItemStyle: null
			};
		},
		methods: {
			onNavItemMouseenter(event) {
				this.hoverItemStyle = {
					...this.hoverItemStyle,
					...{
						top: event.currentTarget.offsetTop + 'px',
						height: event.currentTarget.offsetHeight + 'px'
					}
				};
			},
			onNavItemMouseleave() {
				this.hoverItemStyle = {
					...this.hoverItemStyle,
					...{
						top: '',
						height: ''
					}
				};
			}
		},
		mounted() {
			this.$el
				.querySelectorAll('.nav-item')
				.forEach(navItem => {
						navItem.addEventListener('mouseenter', this.onNavItemMouseenter);
						navItem.addEventListener('mouseleave', this.onNavItemMouseleave)
					}
				)
		}
	}
</script>

<style scoped>
	.AppPageFooterNav {
		all: initial;

		& {
			display: block;
		}
	}

	.grid {
		display: flex;
		flex-flow: column;
		margin: 0 -10px;

		@media (width < 768px) {
			flex-flow: row;
			flex-wrap: wrap;
		}
	}

	.grid-item {
		margin: 0 10px;
		display: flex;
	}

	.nav-item {
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
			.nav-item-text {
				background-size: 100% 2px;
			}
		}
	}

	.nav-item-text {
		padding-bottom: 1px;
		transition: background-size 0.2s;
		background: linear-gradient(#ec5151, #ec5151) no-repeat 0 100% / 0 2px;
	}
</style>

<style scoped>
	.AppPageFooterNavOfSection {
		position: relative;

		.hover-item {
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

		.nav-name {
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

		.nav-item {
			width: 100%;
			font-weight: 300;
			padding-left: 28px;
		}

		.nav-item-text {
			background: none;
		}
	}
</style>
