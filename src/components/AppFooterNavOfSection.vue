<script>
	import AppFooterNav from './AppFooterNav';

	export default {
		name: 'AppFooterNavOfSection',
		extends: AppFooterNav,
		data() {
			return {
				hoverElementStyle: null
			};
		},
		methods: {
			onItemMouseenter(event) {
				this.hoverElementStyle = {
					...this.hoverElementStyle,
					...{
						top: event.currentTarget.offsetTop + 'px',
						height: event.currentTarget.offsetHeight + 'px'
					}
				};
			},
			onItemMouseleave() {
				this.hoverElementStyle = {
					...this.hoverElementStyle,
					...{
						top: '',
						height: ''
					}
				};
			}
		},
		mounted() {
			this.$el
				.querySelectorAll('.item')
				.forEach(item => {
						item.addEventListener('mouseenter', this.onItemMouseenter);
						item.addEventListener('mouseleave', this.onItemMouseleave);
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

	.grid {
		@media (width < 768px) {
			flex-flow: column;
		}
	}

	.item {
		box-sizing: border-box;
		padding-left: range(18px, 28px);
		width: 100%;
		font-weight: 300;
	}

	.item-text {
		background: none;
	}

	.hover-element {
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

	.name {
		display: block;
		margin-bottom: 5px;
		padding: 3px 0 3px range(18px, 28px);
		color: #ffffff;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.6rem, 1.8rem);
		font-weight: 500;
		line-height: 1.25;
		text-transform: uppercase;
		overflow: hidden;
		text-overflow: ellipsis;
		text-decoration: none;
	}
</style>
