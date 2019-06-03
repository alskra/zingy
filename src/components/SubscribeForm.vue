<template lang="pug">
	form.subscribe-form(action="")
		.body
			.header
				.title Подписка на блог

			.main
				.grid
					.grid-cell.grid-cell-is-1
						input.field(
							type="email"
							name="email"
							placeholder="Укажите свой email"
							required
						)

					.grid-cell.grid-cell-is-2
						label.check-radio
							input.check-radio-input(
								type="checkbox"
								name="agree"
								required
							)

							span.check-radio-fake.check-radio-fake-is-checkbox

							span.check-radio-label Согласен с #[a(href="" target="_blank") условиями обработки персональных данных]

					.grid-cell.grid-cell-is-3
						button.button Подписаться
</template>

<script>
	export default {
		name: 'SubscribeForm'
	};
</script>

<style scoped>
	.subscribe-form {
		all: initial;

		& {
			display: block;
		}
	}

	.body {
		padding: range(15px, 30px) range(10px, 20px);
		background-color: #13a696;
	}

	.header {

	}

	.title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(2rem, 2.4rem);
		font-weight: 500;
		line-height: 1.25;
		margin-bottom: 0.75em;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.grid {
		display: flex;
		flex-flow: column;
		margin: var(--grid-row_margin);
	}

	.grid-cell {
		margin: var(--grid-cell_padding);
	}

	.field {
		all: initial;

		& {
			color: var(--color);
			font-family: var(--font-family);
			font-size: 12px;
			font-weight: 500;
			line-height: 1.25;
			box-sizing: border-box;
			width: 100%;
			height: 40px;
			padding: 4px 10px;
			background-color: #ffffff;
		}

		&::placeholder {
			color: #868484;
		}
	}

	.check-radio {
		display: flex;
		align-items: flex-start;
		user-select: none;
	}

	.check-radio-input {
		position: absolute;
		width: 0.1px;
		height: 0.1px;
		clip: rect(0, 0, 0, 0);

		&:not(:checked) {
			& + .check-radio-fake {
				&::before {
					transform: scale(0);
				}
			}
		}
	}

	.check-radio-fake {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 13px;
		height: 13px;
		flex-shrink: 0;
		background-color: #ffffff;

		&::before {
			content: '';
			width: 7px;
			height: 7px;
			background-color: #13a696;
			transition: transform 0.2s;
		}
	}

	.check-radio-label {
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #ffffff;
		font-family: var(--font-family);
		font-size: 12px;
		font-weight: 500;
		line-height: 1.25;
		margin-left: 10px;

		a {
			color: inherit;
			font-weight: 500;
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}

	.button {
		all: initial;

		& {
			color: #c5dcd6;
			font-family: var(--font-family);
			font-size: range(1.4rem, 1.6rem);
			font-weight: 500;
			line-height: 1.25;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			user-select: none;
		}

		&:not(:disabled, .is-disabled) {
			cursor: pointer;
		}
	}

	.subscribe-form-is-wide {
		@media (width < 1024px) {
			margin: 0 calc(-1 * var(--grid_padding));
		}

		.body {
			@media (width < 1024px) {
				padding-right: var(--grid_padding);
				padding-left: var(--grid_padding);
			}
		}
	}
</style>
