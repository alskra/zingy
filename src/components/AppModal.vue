<template lang="pug" functional>
	modal(
		v-bind="data.attrs"
		v-on="listeners"
		:classes="['app-modal']"
		:adaptive="true"
		height="auto"
		:scrollable="true"
		:reset="true"
		transition="nice-modal-fade"
	)
		.body
			header.header
				.title
					slot(name="title")
						h2 Modal Heading

				button.close-button(@click="parent.$modal.hide(props.name)")
					base-icon(name="close")

			.main
				base-content
					slot
						p Modal Content

</template>

<script>
	import VueSticky from './VueSticky';

	export default {
		name: 'AppModal',
		components: {
			VueSticky
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
		/*all: initial;*/

		& {
			top: auto !important;
			left: auto !important;
			width: 100% !important;
			max-width: var(--grid-width);
			height: auto !important;
			margin: auto !important;
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
			bottom: scale-down(105px, 0.5);
			left: scale-down(140px, 0.5);
			background-color: var(--color-accent);
		}
	}

	.header {
		padding: range(40px + 4px, 58px + 20px) range(10px, 140px) 0;
		position: relative;
	}

	.title {
		margin: 0 0 0 range(0px, -60px);
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--font-size-h2);
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
			width: range(40px, 58px);
			height: range(40px, 58px);
			position: absolute;
			top: range(2px, 10px);
			right: range(2px, 10px);
			cursor: pointer;
			color: var(--color);
			transition: color 0.2s;

			&:hover {
				color: var(--color-accent);
			}
		}
	}

	.main {
		padding: range(20px, 50px) range(10px, 140px);
	}
</style>
