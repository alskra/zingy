<script>
	import AppModal from './AppModal';

	export default {
		name: 'DList',
		components: {
			AppModal
		},
		data() {
			return {
				runningLineIsVisible: false,
				runningLineStyle: {
					top: 0,
					height: 0
				}
			};
		},
		methods: {
			onItemMouseenter(event) {
				this.runningLineStyle = {
					top: event.currentTarget.offsetTop + 'px',
					height: event.currentTarget.offsetHeight + 'px'
				};
			}
		}
	};
</script>

<style>
	:root {
		--d-list-item_transition-duration: 0.4s;
		--d-list-item_transition-delay: 0.1s;
	}
</style>

<style scoped>
	.d-list {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.d-list-inner {
		display: flex;
		margin: scale-down(-15px, 0.8);
		padding: 0;
		flex-flow: column;
	}

	.item {
		list-style: none;
		display: flex;
		align-items: baseline;
		margin: scale-down(15px, 0.8);
		cursor: default;

		&:hover {
			.item-number {
				color: var(--color);
				transition-delay: var(--d-list-item_transition-delay);
			}

			.item-title {
				transform: translateX(range(10px, 40px));
				transition-delay: var(--d-list-item_transition-delay);
			}
		}
	}

	.item-number {
		box-sizing: border-box;
		width: scale-down(100px, 0.5);
		flex-shrink: 0;
		padding: 0 5px;
		color: #5c5c5c;
		font-family: var(--font-family);
		font-size: scale-down(18px, 0.8);
		font-weight: 400;
		line-height: 1.25;
		text-align: center;
		transition: color var(--d-list-item_transition-duration);
	}

	.item-body {
		flex-grow: 1;
		min-width: 0;
	}

	.item-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: scale-down(24px, 0.8);
		font-weight: 400;
		line-height: 1.25;
		margin: 0 0 0.5em;
		transition: transform var(--d-list-item_transition-duration);
	}

	.nav {
		padding-left: 0;
	}

	.nav-item {
		display: inline;
		color: var(--color-link);
		font-family: var(--font-family);
		font-size: range(12px, 13px);
		font-weight: 400;
		line-height: 1.25;

		& + .nav-item {
			&::before {
				content: '/\00A0';

			}
		}
	}

	.nav-link {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.running-line {
		position: absolute;
		z-index: 1;
		width: 3px;
		background-color: var(--color-link);
		transition: top, height;
		transition-duration: calc(var(--d-list-item_transition-duration) + var(--d-list-item_transition-delay));

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.2s
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}
</style>
