<script>
	import VueTruncateCollapsed from 'vue-truncate-collapsed';

	export default {
		name: 'AwesomeList',
		data() {
			return {
				runningLineIsVisible: false,
				runningLineStyle: {
					top: '',
					height: ''
				},
				itemDescriptionLength: 0
			};
		},
		components: {
			VueTruncateCollapsed
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
			},
			setItemDescriptionLength() {
				this.itemDescriptionLength = 300 / 1920 * window.innerWidth;
			}
		},
		created() {
			this.setItemDescriptionLength();
			window.addEventListener('resize', this.setItemDescriptionLength);
		},
		destroyed() {
			window.removeEventListener('resize', this.setItemDescriptionLength);
		}
	};
</script>

<style scoped>
	.awesome-list {
		display: block;
		position: relative;
		transform: translate3d(0, 0, 0);
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
		position: relative;
		overflow: hidden;
		transform: translate3d(0, 0, 0);

		&:hover {
			.item-number {
				color: white;
				transition-delay: 1s;
			}

			.item-title{
				transform: translate3d(range(20px, 40px), 0, 0);
			}

			.item-description {
				transform: translate3d(-100%, 0, 0);
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
		width: range(50px, 150px);
		text-align: center;
		transition: color 0.2s;
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		align-self: center;
		padding: 0 range(5px, 10px);
	}

	.item-main {
		flex-shrink: 0;
		width: calc(100% - range(50px, 150px));
		padding: range(15px, 30px) range(10px, 40px) range(15px, 30px) 0;
		overflow: hidden;
		box-sizing: border-box;
		align-self: center;
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
		transition: transform 0.5s;
		cursor: default;
		will-change: transform;
		transform: translate3d(0, 0, 0);
	}

	.item-description {
		position: relative;
		width: calc(100% - range(10px, 27px));
		box-sizing: border-box;
		background-color: var(--color-link);
		transition: transform 0.7s;
		padding: range(10px, 20px) range(10px, 40px) range(10px, 20px) range((50px - 10px), (150px - 27px));
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.4rem);
		font-weight: 400;
		line-height: 1.25;
		display: flex;
		flex-flow: column;
		flex-shrink: 0;
		will-change: transform;
		transform: translate3d(0, 0, 0);
	}

	.item-description-inner {
		margin: auto 0;

		>>> div {
			display: inline;
		}

		>>> p {
			display: inline;
			margin: 0;
		}
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
