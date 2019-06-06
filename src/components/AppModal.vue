<template lang="pug">
	modal(
		:name="name"
		:classes="['app-modal', classes]"
		:scrollable="true"
		height="auto"
		:transition="transition"
		@before-open="beforeOpen"
		@closed="closed"
	)

		app-modal-body.modal-body(v-bind="$props")
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
		},
		methods: {
			beforeOpen() {
				document.documentElement.classList.add('v--modal-block-scroll');
				document.body.classList.add('v--modal-block-scroll');
			},
			closed() {
				document.documentElement.classList.remove('v--modal-block-scroll');
				document.body.classList.remove('v--modal-block-scroll');
			}
		}
	};
</script>

<style>
	.v--modal-background-click {
		display: flex;
		flex-flow: column;
		box-sizing: border-box;
		padding: 0 0 scale-down(12px, 0.5) scale-down(12px, 0.5);
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
