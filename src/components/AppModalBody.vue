<template lang="pug">
	.app-modal-body(:class="classes")
		loading(
			:active.sync="loading"
			color="var(--color-accent)"
			:opacity="0"
		)

		transition(:name="transition")
			.body(v-if="!loading")
				.body-inner
					header.header
						.header-inner
							.title
								slot(name="title")
									h2 Modal Heading

						button.close-button(
							type="button"
							@click="$modal.hide(name)"
						)
							base-icon(name="close")

					.main
						slot
							base-content.content
								p Modal Content
</template>

<script>
	import Loading from 'vue-loading-overlay';

	export default {
		name: 'AppModalBody',
		components: {
			Loading
		},
		props: {
			name: {
				type: String,
				required: true
			},
			classes: {
				type: [String, Array],
				default: ''
			},
			loading: {
				type: Boolean,
				default: false
			},
			transition: {
				type: String,
				default: 'nice-modal-fade'
			}
		}
	};
</script>

<style scoped>
	.app-modal-body {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}

		&.is-small {
			.header {
				padding-left: var(--grid_padding);
			}

			.title {
				margin-left: 0;
				font-size: var(--h3_font-size);
			}

			.main {
				padding-right: var(--grid_padding);
				padding-left: var(--grid_padding);
			}
		}
	}

	.body {
		margin: scale-down(12px, 0.5) scale-down(12px, 0.5) 0 0;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: scale-down(-12px, 0.5);
			right: scale-down(-12px, 0.5);
			bottom: percentage(105 / 1130);
			left: percentage(140 / 1168);
			background-color: var(--color-accent);
		}
	}

	.body-inner {
		position: relative;
		background-color: #f2f4f5;
	}

	.header {
		display: flex;
		align-items: flex-start;
		padding: range(5px, 10px) range(5px, 10px) 0 range(10px, 140px);
	}

	.header-inner {
		margin: auto 0;
		padding: range(15px, 30px) 0 0;
		min-width: 0;
		flex-grow: 1;
	}

	.title {
		margin: 0 0 0 range(0px, -60px);
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;

		>>> * {
			display: inline;
			font: inherit;
			margin: 0;
		}
	}

	.close-button {
		all: initial;

		& {
			display: block;
			flex-shrink: 0;
			width: range(40px, 58px);
			height: range(40px, 58px);
			margin-left: range(10px, 20px);
			cursor: pointer;
			color: var(--color);
			transition: color 0.2s;
		}

		&:hover {
			color: var(--color-accent);
		}
	}

	.main {
		padding: range(20px, 40px) range(10px, 140px);
	}
</style>
