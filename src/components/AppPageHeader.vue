<template lang="pug">
	header.app-page-header
		slot(name="app-page-header" v-bind="{foo}")
</template>

<script>
	export default {
		name: 'AppPageHeader',
		created() {
			console.log(this);
		},
		data() {
			return {
				foo: 'bar'
			}
		}
	};
</script>

<style scoped>
	.app-page-header {
		all: initial;

		& {
			position: fixed;
			z-index: 100;
			top: range(10, 40);
			right: range(10, 40);
			left: range(10, 40);
		}
	}

	.logobox {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: flex-end;
		width: range(40, 58);
		overflow: hidden;

		&.v-appear-active {
			animation: logobox__slide-in-right 0.4s;

			.logo {
				.base-icon {
					animation: logobox__fade-in-top 0.2s 0.4s backwards;
				}
			}
		}

		@keyframes logobox__slide-in-right {
			0% {
				width: 0;
			}
		}

		@keyframes logobox__fade-in-top {
			0% {
				transform: translateY(10px);
				opacity: 0;
			}
		}
	}

	.logobox >>> > .logo {
		display: block;
		width: range(40, 58);
		height: range(40, 58);
		flex-shrink: 0;
		background-color: #252525;
		color: white;
		text-decoration: none;
	}

	.menubuttonbox {
		position: absolute;
		top: 0;
		left: range(40, 58);
		display: flex;
		justify-content: flex-end;
		width: range(40, 58);
		overflow: hidden;
	}

	.menubuttonbox >>> > .menubutton {
		display: block;
		width: range(40, 58);
		height: range(40, 58);
		flex-shrink: 0;
		background-color: white;
		color: #252525;
	}
</style>
