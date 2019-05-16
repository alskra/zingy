<script>
	export default {
		name: 'AppPageHeaderNav',
		template: '#app-page-header-nav'
	};
</script>

<style scoped>
	.AppPageHeaderNav {
		all: initial;

		& {
			display: block;
		}
	}

	.l-grid {
		display: flex;
	}

	.l-grid-item {
		min-width: 0;
	}

	.nav-item {
		display: flex;
		align-items: center;
		height: 100%;
		text-decoration: none;
		padding: 0 range(0px, 20px);

		&:not(.is-active) {
			&:hover {
				.nav-item-text {
					&::before {
						transition: transform 0.4s 0.1s;
						transform: translateX(105%);
					}
				}
			}
		}

		&.is-active {
			.nav-item-text {
				&::before {
					transform: translateX(0);
				}
			}

			&:hover {
				.nav-item-text {
					&::before {
						animation: nav-item-is-active_hover 0.4s 0.1s;
					}

					@keyframes nav-item-is-active_hover {
						49.99999% {
							transform: translateX(105%);
						}

						50% {
							transform: translateX(-105%);
						}
					}
				}
			}
		}
	}

	.nav-item-text {
		color: #0a0a0a;
		font-family: var(--font-family, sans-serif);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 500;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			border-top: 2px solid;
			/*margin-top: -1px;*/
			transform: translateX(-105%);
		}
	}
</style>
