<script>
	export default {
		name: 'PageFooterNavBox',
		props: {
			hasHover: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				hoverShow: false,
				hoverStyle: {
					top: 0,
					height: 0
				},
				hoverTimerHide: null
			};
		},
		methods: {
			onNavBoxItemMouseOver(event) {
				if (this.hasHover && event.target.classList.contains('item')) {
					this.hoverShow = true;

					clearTimeout(this.hoverTimerHide);

					this.hoverStyle = Object.assign(this.hoverStyle, {
						top: event.target.offsetTop + 'px',
						height: event.target.offsetHeight + 'px'
					});
				}
			},
			onNavBoxItemMouseOut(event) {
				if (this.hasHover && event.target.classList.contains('item')) {
					this.hoverTimerHide = setTimeout(() => this.hoverShow = false, 200);
				}
			}
		}
	};
</script>

<style scoped>
	.page-footer-nav-box {
		all: initial;

		& {
			display: block;
		}

		> .grid {
			display: flex;
			flex-flow: column;
			margin: -8px -10px;

			> .cell {
				margin: 8px 10px;
				display: flex;

				> .item {
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
					color: #ffffff;
					font-family: var(--font-family, sans-serif);
					font-size: range(1.6rem, 1.8rem);
					font-weight: 300;
					line-height: 1.25;
					text-decoration: none;
					transition: color 0.2s;

					&:hover {
						color: #ec5151;
					}
				}
			}
		}

		&.-main {
			> .grid {
				@media (width < 768px) {
					flex-flow: row;
					flex-wrap: wrap;
				}

				> .cell {
					> .item {
						font-weight: 500;
					}
				}
			}
		}

		&.-section {
			position: relative;

			> .grid {
				> .cell {
					> .item {
						padding-left: 28px;
					}
				}
			}

			> .hover {
				width: 3px;
				height: 28px;
				background-color: #e04b4a;
				position: absolute;
				top: 0;
				left: 0;
				transition-property: top, height;
				transition-duration: 0.3s;
				pointer-events: none;

				&.v-enter-active,
				&.v-leave-active {
					transition: opacity 0.2s;
				}

				&.v-enter,
				&.v-leave-to {
					opacity: 0;
				}
			}
		}
	}
</style>
