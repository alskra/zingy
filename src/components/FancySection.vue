<template lang="pug">
	section.fancy-section
		transition(
			appear
			:duration="{enter: 1000, leave: 800}"
		)
			.body(
				ref="body"
				:style="{overflow: 'hidden'}"
			)
				.body-inner(
					@transitionstart.self="onBodyTransitionstart"
					@transitionend.self="onBodyTransitionend"
				)
					.grid-row
						.grid-cell.grid-cell-is-7
							.header(v-if="$scopedSlots.header || $scopedSlots.title")
								.title
									slot(name="title")

							base-content.content(v-if="$scopedSlots.default")
								slot

							.footer(v-if="$scopedSlots.footer || $scopedSlots.buttons")
								.buttons(v-if="$scopedSlots.buttons")
									.buttons-grid-row
										.buttons-grid-cell(
											v-for="(button, index) of $scopedSlots.buttons()"
											:key="index"
										)
											base-button.button(
												tag="a"
												v-bind="button.data.attrs"
											)
												v-nodes(:vnodes="button.children")

						.grid-cell.grid-cell-is-5 2
</template>

<script>
	import {getVNodesTextContent} from '../helpers';

	export default {
		name: 'FancySection',
		props: {

		},
		data() {
			return {
			};
		},
		methods: {
			getVNodesTextContent,
			onBodyTransitionstart() {
				this.$refs.body.style.overflow = 'hidden';
			},
			onBodyTransitionend() {
				this.$refs.body.style.overflow = '';
			}
		},
		mounted() {
		}
	};
</script>

<style scoped>
	.fancy-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			max-width: 100%;
			flex-flow: column;
		}
	}

	.body {
		display: flex;
		position: relative;
		margin: 0 auto;
		width: calc(100% - 2 * var(--grid_padding));
		max-width: var(--grid_width);
		flex-flow: column;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: range(15px, 30px);
			left: range(5px, 8px);
			background-color: #b84242;
		}

		&.v-enter-active,
		&.v-leave-active {
			&::before {
				transition: visibility, top, right;
				transition-duration: 0s, 0.2s, 0.2s;
			}

			.body-inner {
				transition: transform 0.5s;
			}

			.header,
			.base-content.content,
			.footer {
				transition: opacity 0.3s;
			}
		}

		&.v-enter-active {
			&::before {
				transition-delay: 0.5s;
			}

			.header {
				transition-delay: 0.5s;
			}

			.base-content.content {
				transition-delay: 0.6s;
			}

			.footer {
				transition-delay: 0.7s;
			}
		}

		&.v-leave-active {
			.body-inner {
				transition-delay: 0.3s;
			}
		}

		&.v-enter,
		&.v-leave-to {
			&::before {
				top: range(5px, 8px);
				right: range(5px, 8px);
				visibility: hidden;
			}

			.body-inner {
				transform: translateX(-100%);
			}

			.header,
			.base-content.content,
			.footer {
				opacity: 0;
			}
		}
	}

	.body-inner {
		position: relative;
		margin: range(5px, 8px) range(5px, 8px) 0 0;
		padding: range(30px, 60px) range(10px, 80px);
		background-color: #f0f0f0;
	}

	.grid-row {
		display: flex;
		margin: var(--grid-row_margin);
		flex-wrap: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;
		max-width: 100%;
	}

	.grid-cell-is-7 {
		flex: 0 0 percentage(7 / 12);
	}

	.grid-cell-is-5 {
		flex: 0 0 percentage(5 / 12);
	}

	.header {
		margin-bottom: range(25px, 50px);
	}

	.title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 500;
		line-height: 1.25;

		>>> * {
			display: inline;
			font: inherit;
		}

		@media (width >= 1024px) {
			margin-left: range(80px, -160px);
		}
	}

	.footer {
		margin-top: range(25px, 50px);
	}

	.buttons {
		display: flex;
		flex-flow: column;
	}

	.buttons-grid-row {
		display: flex;
		margin: var(--grid-row_margin);
		flex-wrap: wrap;
	}

	.buttons-grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		min-width: 0;
		max-width: 100%;
	}

	.base-button.button {
		width: 270px;
	}
</style>
