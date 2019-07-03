<i18n>
	{
		"en": {
			"title": "Subscribe to blog",
			"subscribe": "Subscribe",
			"agree": "I agree with <a href='{url}' target='_blank'>the terms of personal data processing</a>",
			"placeholder": {
				"email": "Enter your email",
				"workemail": "Workemail",
				"subject": "Subject"
			}
		},
		"ru": {
			"title": "Подписка на блог",
			"subscribe": "Подписаться",
			"agree": "Согласен с <a href='{url}' target='_blank'>условиями обработки персональных данных</a>",
			"placeholder": {
				"email": "Укажите свой email"
			}
		}
	}
</i18n>

<template lang="pug">
	form.subscribe-form(
		action="/"
		@submit.prevent="onSubmit"
	)
		.body
			.header
				.title {{ $t('title') }}

			.main
				.grid
					.grid-cell(
						v-for="(field, index) in fields"
						:key="field.id"
						:class="'grid-cell-is-' + (index + 1)"
						:style="['workemail', 'subject'].includes(field.attrs.name) ? {display: 'none'} : null"
					)
						template(v-if="field.attrs.type.match(/text|email|tel|url|hidden/)")
							input.field(
								ref="field"
								v-bind="field.attrs"
								:placeholder="$t(`placeholder.${field.attrs.name}`)"
								:class="{'is-validate': field.isValidate}"
								@input="checkForm"
								@invalid="field.isValidate = true"
								v-model="field.value"
							)

						template(v-else-if="field.attrs.type.match(/checkbox|radio/)")
							label.check-radio
								input.check-radio-input(
									ref="field"
									v-bind="field.attrs"
									:class="{'is-validate': field.isValidate}"
									@change="checkForm"
									@invalid="field.isValidate = true"
									v-model="field.value"
								)

								span.check-radio-fake
								span.check-radio-label(v-html="$t('agree', {url: agreeUrl})")

					.grid-cell.grid-cell-is-bottom
						button.button(:class="{'is-disabled': isInvalid}") {{ $t('subscribe') }}
</template>

<script>
	import axios from 'axios';
	import AppModalBody from './AppModalBody';

	export default {
		name: 'SubscribeForm',
		props: {
			agreeUrl: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				fields: [
					{
						id: 1,
						attrs: {
							type: 'email',
							name: 'email',
							value: '',
							autocomplete: 'on',
							required: true
						},
						value: '',
						isValidate: false
					},
					{
						id: 2,
						attrs: {
							type: 'checkbox',
							name: 'agree',
							checked: false,
							required: true
						},
						value: false,
						isValidate: false
					},
					{
						id: 3,
						attrs: {
							type: 'text',
							name: 'workemail',
							value: '',
							autocomplete: 'off'
						},
						value: ''
					},
					{
						id: 4,
						attrs: {
							type: 'hidden',
							name: 'subject',
							value: 'Сообщение из формы Подписки',
							autocomplete: 'off'
						},
						value: 'Сообщение из формы Подписки'
					}
				],
				isInvalid: true
			};
		},
		methods: {
			checkForm() {
				this.isInvalid = !!this.$refs.field.find(field => !field.validity.valid);
			},
			onSubmit(evt) {
				const form = evt.target;
				const vm = this;

				this.$showModal({
					components: {
						AppModalBody
					},
					data() {
						return {
							response: null,
							error: null,
							isLoading: true
						}
					},
					i18n: {
						messages: {
							en: {
								error: 'An error has occurred!',
								success: 'Thank you for subscribing!',
								successMsg: 'You will receive our newsletter to this email address: <strong>{email}</strong>'
							},
							ru: {
								error: 'Произошла ошибка!',
								success: 'Благодарим за подписку!',
								successMsg: 'Вы будете получать нашу рассылку на этот адрес электронной почты: <strong>{email}</strong>'
							}
						}
					},
					template: `
						<app-modal-body class="modal-body" name="subscribe-form-modal" classes="is-small" :loading="isLoading">
							<template v-slot:title>{{ error ? $t('error') : $t('success') }}</template>
							<base-content class="content" v-html="error || $t('successMsg', {email: response})"></base-content>
						</app-modal-body>
					`,
					created() {
						// Get form data
						const formData = new FormData();

						vm.fields.forEach(field => formData.append(field.attrs.name, field.value));

						// Fetch data
						axios.post(form.action, formData)
							.then(response => {
								// В случае успеха ожидаем получить email
								this.response = formData.get('email') || response.data;

								vm.fields.forEach(field => {
									field.value = field.attrs.value || field.attrs.checked;
									field.isValidate = false;
								});

								vm.isInvalid = true;
							})
							.catch(error => this.error = error)
							.finally(() => this.isLoading = false);
					}
				}, null, {
					name: 'subscribe-form-modal',
					classes: 'is-small'
				});
			}
		},
		mounted() {
			this.checkForm();
		}
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
		position: relative;
	}

	.field {
		all: initial;

		& {
			display: block;
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
			border: 1px solid transparent;
			transition: color, border-color;
			transition-duration: 0.2s;
		}

		&::placeholder {
			color: #868484;
		}

		&:invalid.is-validate {
			color: var(--color-error);
			border-color: var(--color-error);
		}
	}

	.check-radio {
		display: flex;
		align-items: flex-start;
		user-select: none;
	}

	.check-radio-input {
		position: absolute;
		box-sizing: border-box;
		width: 13px;
		height: 13px;
		clip: rect(0, 0, 0, 0);
		opacity: 0;
		pointer-events: none;

		&:not(:checked) {
			& + .check-radio-fake {
				&::before {
					transform: scale(0);
				}
			}
		}

		&:focus-visible {
			& + .check-radio-fake {
				outline: 1px dotted currentColor;
				outline: 5px auto -webkit-focus-ring-color;
			}
		}

		&:invalid.is-validate {
			& + .check-radio-fake {
				border-color: var(--color-error);
			}
		}
	}

	.check-radio-fake {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 13px;
		height: 13px;
		box-sizing: border-box;
		border: 1px solid transparent;
		flex-shrink: 0;
		background-color: #ffffff;
		cursor: pointer;
		transition: color, border-color;
		transition-duration: 0.2s;

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

		>>> a {
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
			display: inline-block;
			vertical-align: top;
			color: white;
			font-family: var(--font-family);
			font-size: range(1.6rem, 1.6rem);
			font-weight: 500;
			line-height: 1.25;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			user-select: none;
			box-sizing: border-box;
			padding: 10px 0;
			max-width: 100%;
			cursor: pointer;
			background: linear-gradient(to right, currentColor, currentColor) no-repeat 0 100% / 100% 1px;
			transition: color, background-size;
			transition-duration: 0.2s;
		}

		&:matches(:disabled, .is-disabled) {
			cursor: default;
			color: #c5dcd6;
			background-size: 0 1px;
			pointer-events: none;
		}
	}

	.field-error {
		position: absolute;
		z-index: 1;
		top: 100%;
		left: 0;
		width: 100%;
		/*transform: translate3d(10px, -50%, 0);*/
		color: white;
		background-color: var(--color-accent);
		padding: 2px 5px;
		box-sizing: border-box;
		font-family: var(--font-family);
		font-size: 12px;
		line-height: 1.25;

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}

		&.v-enter-active,
		&.v-leave-active {
			transition: opacity 0.5s;
		}
	}

	.subscribe-form-wide {
		@media (width < 1024px) {
			margin: 0 calc(-1 * var(--grid_padding));
		}

		.body {
			@media (width < 1024px) {
				padding-right: var(--grid_padding);
				padding-left: var(--grid_padding);
			}
		}

		.grid-cell-is-bottom {
			@media (width < 1024px) {
				text-align: center;
			}
		}

		.button {
			@media (width < 1024px) {
				/*width: 100%;*/
			}
		}
	}
</style>
