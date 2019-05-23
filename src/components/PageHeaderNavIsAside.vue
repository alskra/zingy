<script>
	import PageHeaderNav from './PageHeaderNav';

	export default {
		name: 'PageHeaderNavIsAside',
		extends: PageHeaderNav
	};
</script>

<style scoped src="./PageHeaderNav.vue">
</style>

<style scoped>
	.grid {
		flex-flow: column;
	}

	.grid-cell {
		&.is-active {
			order: 1
		}
	}

	.link {
		justify-content: center;
		padding: range(10px, 10px) 15px;

		&.is-active {
			.link-text {
				font-size: range(2rem * 1.5, 3rem * 1.5);
			}
		}
	}

	.link-text {
		font-size: range(2rem, 3rem);
		letter-spacing: 0.05em;

		&::before {
			border-top-width: 0.1em;
		}
	}
</style>
