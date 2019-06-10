<template lang="pug">
	.app-share
		button.button(
			type="button"
			@click="dropdownIsShown = !dropdownIsShown"
		)
			.button-text Поделиться
			.button-icon

		transition
			.dropdown(v-if="dropdownIsShown")
				.dropdown-item Foo
				.dropdown-item Bar
				.dropdown-item Baz
</template>

<script>
	export default {
		name: 'AppShare',
		data() {
			return {
				dropdownIsShown: false
			};
		},
		methods: {
			closeHandler(evt) {
				if (this.$el !== evt.target && !this.$el.contains(evt.target)) {
					this.dropdownIsShown = false;
				}
			}
		},
		created() {
			document.addEventListener('click', this.closeHandler);
		},
		destroyed() {
			document.removeEventListener('click', this.closeHandler);
		}
	};
</script>

<style scoped>
	.app-share {
		all: initial;

		& {
			display: block;
			position: relative;
		}
	}

	.button {
		all: initial;

		& {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			padding: 5px range(15px, 20px);
			width: 150px;
			max-width: 100%;
			height: 34px;
			border: 1px solid #f0f0f0;
			background-color: #f0f0f0;
			cursor: pointer;
		}
	}

	.button-text {
		color: #999999;
		font-family: var(--font-family);
		font-size: 12px;
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: calc(0.6 / 12 * 1em);
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		box-sizing: border-box;
		padding: 10px;
		min-width: 100%;
		background-color: #f0f0f0;

		&.v-enter,
		&.v-leave-to {
			transform: scaleY(0);
			opacity: 0;
		}

		&.v-enter-active,
		&.v-leave-active {
			transform-origin: 50% 0;
			transition: transform, opacity;
			transition-duration: 0.3s;
		}
	}
</style>
