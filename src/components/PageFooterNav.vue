<script>
	export default {
		name: 'PageFooterNav',
		props: {
			hover: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				hoverStyle: {}
			};
		},
		methods: {
			onNavBoxItemMouseOver(event) {
				if (this.hover && event.target.classList.contains('item')) {
					this.hoverStyle = Object.assign({}, this.hoverStyle, {
						top: event.target.offsetTop + 'px',
						height: event.target.offsetHeight + 'px'
					});
				}
			},
			onNavBoxItemMouseOut() {
				if (this.hover) {
					this.hoverStyle = Object.assign({}, this.hoverStyle, {
						top: '',
						height: ''
					});
				}
			}
		}
	};
</script>

<style scoped>
	.page-footer-nav {
		all: initial;

		& {
			display: block;
		}

		> .name {
			overflow: hidden;
			text-overflow: ellipsis;
			padding: 3px 0 3px 28px;
			font-weight: 500;
			text-transform: uppercase;
			color: #ffffff;
			font-family: var(--font-family, sans-serif);
			font-size: range(1.6rem, 1.8rem);
			line-height: 1.25;
			position: relative;
			margin-bottom: 5px;
		}

		> .grid {
			display: flex;
			flex-flow: column;
			margin: 0 -10px;

			> .cell {
				margin: 0 10px;
				display: flex;

				> .item {
					overflow: hidden;
					text-overflow: ellipsis;
					padding: 8px 0;
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
			}
		}
	}
</style>
