<template lang="pug">
	modal(
		:name="name"
		:classes="['app-modal', classes]"
		:scrollable="true"
		height="auto"
		:transition="transition"
		@before-open="$lockBodyScroll()"
		@closed="$lockBodyScroll(false)"
	)
		app-modal-body.modal-body(v-bind="$props")
			template(#title)
				slot(name="title")

			slot
</template>

<script>
	import AppModalBody from './AppModalBody';

	export default {
		name: 'AppModal',
		components: {
			AppModalBody
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

<style>
	:root {
		.v--modal-block-scroll {
			width: auto;
			overflow: visible;
		}

		.v--modal-overlay {
			overflow-x: hidden;
			background-color: rgba(0, 0, 0, 0.5);

			.v--modal-background-click {
				display: flex;
				box-sizing: border-box;
				padding-right: var(--body-scroll-locked_padding);
				width: 100vw;
				flex-flow: column;
			}
		}
	}

	.app-modal {
		/*all: initial;*/ // save transition

		& {
			top: auto !important;
			left: auto !important;
			width: 100% !important;
			height: auto !important;
			overflow: visible !important;
			margin: auto !important;
			max-width: var(--grid_width);
		}

		&.is-small {
			max-width: 600px;
		}
	}
</style>
