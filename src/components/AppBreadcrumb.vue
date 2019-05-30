<script>
	export default {
		name: 'AppBreadcrumb',
		render(createElement) {
			const getItems = () => {
				if (this.$scopedSlots.default) {
					return this.$scopedSlots.default().map(item => {
						return createElement('div', {staticClass: 'item'}, [item]);
					});
				}

				return null;
			};

			return createElement('nav', {staticClass: 'app-breadcrumb'}, getItems());
		}
	};
</script>

<style scoped>
	.app-breadcrumb {
		all: initial;

		& {
			display: block;
		}
	}

	.item {
		display: inline;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.25;

		& + .item {
			&::before {
				content: '\00A0/\0020';
				color: var(--color-link);
			}
		}

		>>> a {
			color: inherit;
			text-decoration: underline;
			transition: color 0.2s;

			&:hover {
				color: var(--color-link);
				text-decoration: none;
			}
		}
	}
</style>
