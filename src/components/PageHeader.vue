<script>
	export default {
		name: 'PageHeader'
	};
</script>

<style scoped>
	.page-header {
		all: initial;

		& {
			position: fixed;
			z-index: 100;
			top: range(10, 40);
			right: range(10, 40);
			left: range(10, 40);
		}
	}

	.box {
		&.-logo {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			display: flex;
			justify-content: flex-end;
			width: range(40, 58);
			overflow: hidden;

			&.v-appear-active {
				animation: slide-in-right 0.4s;

				.logo {
					.base-icon-svg {
						animation: fade-in-top 0.2s 0.4s backwards;
					}
				}
			}

			@keyframes slide-in-right {
				0% {
					width: 0;
				}
			}

			@keyframes fade-in-top {
				0% {
					transform: translateY(10px);
					opacity: 0;
				}
			}
		}
	}

	.logo {
		display: block;
		width: range(40, 58);
		height: range(40, 58);
		flex-shrink: 0;
		background-color: #252525;
		color: white;
		text-decoration: none;

		.base-icon-svg {
			height: 100%;
		}
	}
</style>
