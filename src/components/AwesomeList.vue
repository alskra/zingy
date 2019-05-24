<script>
	export default {
		name: 'AwesomeList',
		data() {
			return {
				runningLineIsVisible: false,
				runningLineStyle: {
					top: '',
					height: ''
				}
			};
		},
		methods: {
			onItemMouseenter(event) {
				const item = event.target;

				this.runningLineStyle = {
					...this.runningLineStyle,
					...{
						top: item.offsetTop + 'px',
						height: item.offsetHeight + 'px'
					}
				};
			}
		}
	};
</script>

<style scoped>
	.awesome-list {
		display: block;
		position: relative;
	}

	.running-line {
		width: 3px;
		height: 90px;
		background-color: var(--color-link);
		position: absolute;
		z-index: 1;
		top: 0;
		transition: top, height;
		transition-duration: 0.5s;

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity;
			transition-duration: 0.2s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}

	.item {
		display: flex;
		align-items: baseline;
		padding-left: 3px;
		position: relative;
		overflow: hidden;

		&:hover {
			.item-number {
				color: white;
				transition-delay: 1s;
			}

			.item-title{
				padding-left: range(20px, 40px);
			}

			.item-description {
				transform: translateX(0);
				transition-delay: 0.5s;
			}
		}
	}

	.item-number {
		color: #5c5c5c;
		font-family: var(--font-family);
		font-size: range(1.8rem / 1.3, 1.8rem);
		font-weight: 400;
		line-height: 1.25;
		flex-shrink: 0;
		width: range(75px, 150px);
		text-align: center;
		transition: color 0.2s;
		position: relative;
		z-index: 1;
	}

	.item-main {
		flex-grow: 1;
		padding: range(15px, 30px) 0;
		overflow: hidden;
	}

	.item-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(2.4rem / 1.3, 2.4rem);
		font-weight: 400;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
		transition: padding-left 0.5s;
		cursor: default;
	}

	.item-description {
		position: absolute;
		top: 0;
		right: 0;
		width: calc(100% - range(10px, 26px));
		height: 100%;
		box-sizing: border-box;
		background-color: var(--color-link);
		transform: translateX(100%);
		transition: transform 0.7s;
		padding: range(10px, 20px) range(15px, 30px) range(10px, 20px) calc(range(75px, 150px) - range(10px, 26px));
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.4rem);
		font-weight: 400;
		line-height: 1.25;
		display: flex;
		flex-flow: column;

		>>> p {
			display: inline;
			margin: 0;
		}
	}

	.item-description-inner {
		margin: auto 0;
	}

	.item-read-more {
		color: inherit;
		font-weight: 700;
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}
</style>
