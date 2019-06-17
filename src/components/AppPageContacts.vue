<template lang="pug">
	.app-page-contacts
		slot
</template>

<script>
	export default {
		name: 'AppPageContacts'
	};
</script>

<style scoped>
	.app-page-contacts {
		all: initial;

		& {
			display: block;
			box-sizing: border-box;
			max-width: 100%;
		}
	}

	.grid {
		display: flex;
		flex-flow: column;
	}

	.grid-row {
		display: flex;
		margin: 0 var(--grid-row_margin);
		flex-wrap: wrap;
		justify-content: space-between;

		@media (width < 768px) {
			/*justify-content: center;*/
		}
	}

	.grid-cell {
		box-sizing: border-box;
		padding: 0 var(--grid-cell_padding);
		flex: 0 0 340px;
		min-width: 0;
		max-width: 100%;

		@media (width < 768px) {
			flex-basis: 100%;
		}
	}

	.section {
		display: flex;
		flex-flow: column;
		margin-bottom: range(30px, 40px);
	}

	.section-grid {
		display: flex;
		margin: var(--grid-row_margin);
		flex-flow: column;
	}

	.section-grid-cell {
		box-sizing: border-box;
		padding: var(--grid-cell_padding);
		flex: 0 0 100%;
		min-width: 0;
		max-width: 100%;
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: var(--h2_font-size);
		font-weight: 400;
		letter-spacing: calc(0.75 / 30 * 1em);
		margin: 0 0 1em;
	}

	.link-button {
		display: flex;
		box-sizing: border-box;
		border: 1px solid #636965;
		max-width: 100%;
		padding: 0 15px;
		height: range(44px, 56px);
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: var(--font-size);
		font-weight: 300;
		line-height: 1.25;
		text-decoration: none;
		transition:
			color,
			border-color,
			background-color;
		transition-duration: 0.2s;

		span {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		&:hover {
			/*color: var(--color);*/
			/*border-color: #ffffff;*/
			/*background-color: #ffffff;*/
			color: #ffffff;
			border-color: var(--color-accent);
			background-color: var(--color-accent);
		}
	}

	.content {
		color: #8d8e8d;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 300;
		font-style: normal;
		line-height: var(--line-height);

		p {
			margin: 0 0 1em;

			&:last-child {
				margin-bottom: 0;
			}
		}

		a {
			color: var(--color-link);
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
