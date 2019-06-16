<script>
	export default {
		name: 'AppHeaderNav',
		template: '#app-header-nav',
		methods: {
			setActive() {
				function doActive(link) {
					link.classList.add('active');
					link.closest('.grid-cell').classList.add('active');
				}

				function doInactive(link) {
					link.classList.remove('active');
					link.closest('.grid-cell').classList.remove('active');
				}

				this.$el.querySelectorAll('a').forEach(link => {
					doInactive(link);

					if (link.pathname.match(/^\/(index)?(\.html)?\/?$/)) {
						if (location.pathname.match(/^\/(index)?(\.html)?\/?$/)) {
							doActive(link);
						}
					} else if (location.pathname.indexOf(link.pathname) === 0) {
						doActive(link);
					}
				});
			}
		},
		mounted() {
			this.setActive();
		},
		updated() {
			this.setActive();
		}
	};
</script>

<style scoped>
	.app-header-nav {
		all: initial;

		& {
			display: block;
		}
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
		padding: 0 range(-10px, 20px);

		&:not(.active) {
			&:hover {
				.link-text {
					&::before {
						transition: transform 0.4s 0.1s;
						transform: translateX(105%);
					}
				}
			}
		}

		&.active {
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
