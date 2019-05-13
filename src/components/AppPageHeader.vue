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
	.AppPageHeader {
		all: initial;

		& {
			position: fixed;
			z-index: 100;
			top: range(10, 40);
			right: range(10, 40);
			left: range(10, 40);
		}
	}

	.l-logo-box {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: flex-end;
		width: range(40, 58);
		overflow: hidden;

		&.v-appear-active {
			animation: logo-box_slide-in-right 0.4s;

			.BaseIcon {
				animation: logo-box_fade-in-top 0.2s 0.4s backwards;
			}
		}

		@keyframes logo-box_slide-in-right {
			0% {
				width: 0;
			}
		}

		@keyframes logo-box_fade-in-top {
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
			.BaseIcon {
				transition: transform 0.8s;
				transform: perspective(50px) rotateY(360deg);
			}
		}
	}

	.l-menu-button-box {
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

		&.v-enter-active {
			.BaseIcon {
				>>> .menu-icon-line {
					transition: width 0.2s 0.2s;

					&:nth-child(2) {
						transition-delay: 0.25s;
					}

					&:nth-child(3) {
						transition-delay: 0.3s;
					}

					&:nth-child(4) {
						transition-delay: 0.35s;
					}
				}
			}
		}

		&.v-leave-active {
			.BaseIcon {
				>>> .menu-icon-line {
					transition: width 0.2s;

					&:nth-child(2) {
						transition-delay: 0.05s;
					}

					&:nth-child(3) {
						transition-delay: 0.1s;
					}

					&:nth-child(4) {
						transition-delay: 0.15s;
					}
				}
			}
		}

		&.v-enter,
		&.v-leave-to {
			width: 0;

			.BaseIcon {
				>>> .menu-icon-line {
					width: 0;
				}
			}
		}
	}

	.menu-button {
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

		.BaseIcon {
			width: range(calc(40 / 58 * 44), 44);
			height: range(calc(40 / 58 * 44), 44);

			>>> .menu-icon-line {
				transition: width 0.2s;
			}
		}

		&:hover {
			.BaseIcon {
				>>> .menu-icon-line {
					&:nth-child(1) {
						width: 75%;
					}

					&:nth-child(2) {
						width: 35%;
					}

					&:nth-child(3) {
						width: 90%;
					}

					&:nth-child(4) {
						width: 60%;
					}
				}
			}
		}
	}
</style>
