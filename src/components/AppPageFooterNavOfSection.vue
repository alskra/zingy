<script>
	import AppPageFooterNav from './AppPageFooterNav';

	export default {
		name: 'AppPageFooterNavOfSection',
		components: {
			AppPageFooterNav
		},
		data() {
			return {
				hoverStyle: null
			};
		},
		methods: {
			onNavBoxItemMouseOver(event) {
				if (event.target.classList.contains('navitem')) {
					this.hoverStyle = Object.assign({}, this.hoverStyle, {
						top: event.target.offsetTop + 'px',
						height: event.target.offsetHeight + 'px'
					});
				}
			},
			onNavBoxItemMouseOut() {
				this.hoverStyle = Object.assign({}, this.hoverStyle, {
					top: '',
					height: ''
				});
			}
		}
	};
</script>

<style scoped>
	.app-page-footer-nav-of-section {
		position: relative;
	}

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
		font-weight: 300;
		padding-left: 28px;
	}
</style>
