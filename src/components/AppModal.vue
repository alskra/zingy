<template lang="pug">
	modal(
		:name="name"
		:classes="['app-modal', classes]"
		:adaptive="true"
		height="auto"
		:scrollable="true"
		:reset="true"
		transition="nice-modal-fade"
	)
		.body
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
				base-content
					slot
						p Modal Content

</template>

<script>
	export default {
		name: 'AppModal',
		props: {
			name: {
				type: String,
				required: true
			},
			classes: {
				type: [String, Array],
				default: ''
			}
		}
	};
</script>

<style>
	.v--modal-background-click {
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
		padding: 0 0 scale-down(12px, 0.5) scale-down(12px, 0.5);
	}

	.app-modal {
		/*all: initial;*/ // save transition

		& {
			top: auto !important;
			left: auto !important;
			width: 100% !important;
			max-width: var(--grid-width);
			height: auto !important;
			margin: auto !important;
		}

		&.is-width-auto {
			width: auto !important;
		}

		&.is-small {
			max-width: 600px !important;

			.header {
				padding-left: var(--grid-padding);
			}

			.title {
				margin-left: 0;
				font-size: var(--font-size-h3);
			}

			.main {
				padding-right: var(--grid-padding);
				padding-left: var(--grid-padding);
			}
		}
	}
</style>

<style scoped>
	.body {
		all: initial;

		& {
			display: block;
			box-sizing: border-box;
			margin: scale-down(12px, 0.5) scale-down(12px, 0.5) 0 0;
			background-color: #f2f4f5;
			position: relative;
		}

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			top: scale-down(-12px, 0.5);
			right: scale-down(-12px, 0.5);
			bottom: percentage(105 / 1130);
			left: percentage(140 / 1168);
			background-color: var(--color-accent);
		}
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
		font-size: var(--font-size-h1);
		font-weight: 500;
		line-height: 1.25;

		>>> * {
			font: inherit;
			margin: 0;
			overflow: hidden;
			text-overflow: ellipsis;
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

			&:hover {
				color: var(--color-accent);
			}
		}
	}

	.main {
		padding: range(20px, 40px) range(10px, 140px);
	}
</style>
