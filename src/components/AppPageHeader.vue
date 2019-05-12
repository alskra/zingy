<script>
	export default {
		name: 'AppPageHeader',
		data() {
			return {
				startAnimateIsEnd: false,
				headerIsMinimized: false
			};
		},
		watch: {
			startAnimateIsEnd() {
				this.getHeaderState();
			}
		},
		methods: {
			getHeaderState() {
				this.headerIsMinimized = this.startAnimateIsEnd && (window.innerWidth < 1024 || window.pageYOffset > 0);
			}
		},
		created() {
			window.addEventListener('resize', this.getHeaderState);
			window.addEventListener('scroll', this.getHeaderState);
		},
		destroyed() {
			window.removeEventListener('resize', this.getHeaderState);
			window.removeEventListener('scroll', this.getHeaderState);
		}
	};
</script>

<style scoped>
	.app-page-header {
		all: initial;

		& {
			position: fixed;
			z-index: 100;
			top: range(10, 40);
			right: range(10, 40);
			left: range(10, 40);
		}
	}

	.logobox {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: flex-end;
		width: range(40, 58);
		overflow: hidden;

		&.v-appear-active {
			animation: logobox_slide-in-right 0.4s;

			.logo {
				.base-icon {
					animation: logobox_fade-in-top 0.2s 0.4s backwards;
				}
			}
		}

		@keyframes logobox_slide-in-right {
			0% {
				width: 0;
			}
		}

		@keyframes logobox_fade-in-top {
			0% {
				transform: translateY(10px);
				opacity: 0;
			}
		}
	}

	.logo {
		display: block;
		width: range(40, 58);
		height: range(40, 58);
		flex-shrink: 0;
		background-color: #252525;
		color: white;
		text-decoration: none;
		position: relative;

		&:hover {
			.base-icon {
				transition: transform 0.8s;
				transform: perspective(50px) rotateY(360deg);
			}
		}
	}

	.menubuttonbox {
		position: absolute;
		top: 0;
		left: range(40, 58);
		display: flex;
		justify-content: flex-end;
		width: range(40, 58);
		overflow: hidden;

		&.v-enter-active,
		&.v-leave-active {
			transition: width 0.3s;
		}

		&.v-enter,
		&.v-leave-to {
			width: 0;
		}
	}

	.menubutton {
		all: initial;
		display: flex;
		justify-content: center;
		align-items: center;
		width: range(40, 58);
		height: range(40, 58);
		flex-shrink: 0;
		background-color: #f0f0f0;
		color: #0a0a0a;
		cursor: pointer;

		.base-icon {
			width: range(calc(40 / 58 * 44), 44);
			height: range(calc(40 / 58 * 44), 44);
		}
	}
</style>
