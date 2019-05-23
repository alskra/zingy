<script>
	export default {
		name: 'PageHeaderNav',
		template: '#page-header-nav'
	};
</script>

<style scoped>
	.page-header-nav {
		display: block;
	}

	.grid {
		display: flex;
	}

	.grid-cell {
		min-width: 0;
	}

	.link {
		display: flex;
		align-items: center;
		height: 100%;
		text-decoration: none;
		padding: 0 range(0px, 20px);

		&:not(.is-active) {
			&:hover {
				.link-text {
					&::before {
						transition: transform 0.4s 0.1s;
						transform: translateX(105%);
					}
				}
			}
		}

		&.is-active {
			.link-text {
				&::before {
					transform: translateX(0);
				}
			}

			&:hover {
				.link-text {
					&::before {
						animation: link-is-active_hover 0.4s 0.1s;
					}

					@keyframes link-is-active_hover {
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

	.link-text {
		color: var(--color);
		font-family: var(--font-family);
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
			transform: translateX(-105%);
		}
	}
</style>
