<script>
	import AppFooterNav from './AppFooterNav';

	export default {
		name: 'AppFooterNavOfSection',
		extends: AppFooterNav,
		data() {
			return {
				hoverItemStyle: null
			};
		},
		methods: {
			onNavItemMouseenter(event) {
				// console.log(event.type);

				this.hoverItemStyle = {
					...this.hoverItemStyle,
					...{
						top: event.currentTarget.offsetTop + 'px',
						height: event.currentTarget.offsetHeight + 'px'
					}
				};
			},
			onNavItemMouseleave(/*event*/) {
				// console.log(event.type);

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
						navItem.addEventListener('mouseleave', this.onNavItemMouseleave);

						/** @touch */
						navItem.addEventListener('touchstart', this.onNavItemMouseenter);
						navItem.addEventListener('touchend', this.onNavItemMouseleave);
					}
				)
		}
	};
</script>

<style src="./AppFooterNav.vue" scoped>
</style>

<style scoped>
	.app-footer-nav-of-section {
		position: relative;
	}

	.l-grid {
		@media (width < 768px) {
			flex-flow: column;
		}
	}

	.nav-item {
		width: 100%;
		font-weight: 300;
		padding-left: range(18px, 28px);
	}

	.nav-item-text {
		background: none;
	}

	.hover-item {
		width: 3px;
		height: calc(range(1.6rem, 1.8rem) * 1.25 + 6px);
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
		padding: 3px 0 3px range(18px, 28px);
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		text-decoration: none;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
</style>
