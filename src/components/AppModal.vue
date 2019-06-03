<template lang="pug">
	modal(
		:name="name"
		:classes="['app-modal', classes]"
		:adaptive="true"
		height="auto"
		:scrollable="true"
		:reset="true"
		:transition="transition"
	)

		app-modal-body(v-bind="$props")
			template(v-slot:title)
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
	.v--modal-overlay {
		.v--modal-box {
			overflow: visible;
		}
	}

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
			max-width: var(--grid_width);
			height: auto !important;
			margin: auto !important;
		}

		&.is-width-auto {
			width: auto !important;
		}

		&.is-small {
			max-width: 600px !important;
		}
	}
</style>
