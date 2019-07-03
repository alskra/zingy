<i18n>
	{
		"en": {
			"placeholder": {
				"tel": "Phone",
				"url": "Reference to site",
				"workemail": "Workemail",
				"subject": "Subject"
			},
			"submit": "Submit",
			"agree": "*&nbsp;By submitting an application, you agree to <a href='{url}' target='_blank'>the terms of information transfer</a>.",
			"invalid": {
				"complete": "Enter the full number"
			}
		},
		"ru": {
			"placeholder": {
				"tel": "Телефон",
				"url": "Ссылка на сайт"
			},
			"submit": "Отправить",
			"agree": "*&nbsp;Отправляя заявку, вы соглашаетесь с <a href='{url}' target='_blank'>условиями передачи информации</a>.",
			"invalid": {
				"complete": "Введите полный номер"
			}
		}
	}
</i18n>

<template lang="pug">
	form.feedback-form(
		action="/"
		@submit.prevent="onSubmit"
	)
		.grid
			.grid-cell.grid-cell-has-field(
				v-for="field in fields"
				:key="field.id"
				:style="['workemail', 'subject'].includes(field.attrs.name) ? {display: 'none'} : null"
			)
				template(v-if="field.maskOptions")
					base-field.field(
						ref="field"
						v-bind="field.attrs"
						:placeholder="$t(`placeholder.${field.attrs.name}`)"
						:class="{'is-validate': field.isValidate}"
						@invalid.native="field.isValidate = true"
						v-imask="field.maskOptions"
						@accept.native="(field.value = $event.detail.unmaskedValue, $event.target.setCustomValidity($t('invalid.complete')))"
						@complete.native="$event.target.setCustomValidity('')"
					)

				template(v-else)
					base-field.field(
						ref="field"
						v-bind="field.attrs"
						:placeholder="$t(`placeholder.${field.attrs.name}`)"
						:class="{'is-validate': field.isValidate}"
						@invalid.native="field.isValidate = true"
						v-model="field.value"
					)

			.grid-cell
				base-button.button {{ $t('submit') }}

		.content(v-html="$t('agree', {url: agreeUrl})")
</template>

<script>
	import {IMaskDirective} from 'vue-imask';
	import maskOptions from '../imask.config';
	import axios from 'axios';
	import AppModalBody from './AppModalBody';

	export default {
		name: 'FeedbackForm',
		directives: {
			imask: IMaskDirective
		},
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
							type: 'tel',
							name: 'tel',
							value: '',
							autocomplete: 'on',
							required: true
						},
						value: '',
						isValidate: false,
						maskOptions: maskOptions.tel
					},
					{
						id: 2,
						attrs: {
							type: 'url',
							name: 'url',
							value: '',
							autocomplete: 'on',
							required: false
						},
						value: '',
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
							value: 'Сообщение из формы Обратной Связи',
							autocomplete: 'off'
						},
						value: 'Сообщение из формы Обратной Связи'
					}
				],
				isInvalid: true
			};
		},
		methods: {
			onSubmit(evt) {
				const form = evt.target;
				const vm = this;

				this.$showModal({
					components: {
						AppModalBody
					},
					data() {
						return {
							error: null,
							response: null,
							isLoading: true
						}
					},
					i18n: {
						messages: {
							en: {
								error: {
									title: 'An error has occurred!',
									msg: ''
								},
								response: {
									title: 'Your application has been sent, we will contact you soon!',
									msg: 'Your phone number: <strong>{tel}</strong>'
								}
							},
							ru: {
								error: {
									title: 'Произошла ошибка!',
									msg: ''
								},
								response: {
									title: 'Ваша заявка отправлена, мы свяжемся с Вами в ближайшее время!',
									msg: 'Ваш номер телефона: <strong>{tel}</strong>'
								}
							}
						}
					},
					template: `
						<app-modal-body class="modal-body" name="feedback-form-modal" classes="is-small" :loading="isLoading">
							<template v-slot:title>{{ error ? $t('error.title') : $t('response.title') }}</template>
							<base-content class="content" v-html="error || $t('response.msg', {tel: response})"></base-content>
						</app-modal-body>
					`,
					created() {
						// Get form data
						const formData = new FormData();

						vm.fields.forEach(field => formData.append(field.attrs.name, field.value));

						// Fetch data
						axios.post(form.action, formData)
							.then(response => {
								// В случае успеха ожидаем получить телефон
								this.response = formData.get('tel') || response.data;

								vm.fields.forEach((field, index) => {
									if (field.maskOptions) {
										vm.$refs.field[index].$el.maskRef.value = field.attrs.value;
									} else {
										field.value = field.attrs.value || field.attrs.checked;
									}

									field.isValidate = false;
								});
							})
							.catch(error => this.error = error)
							.finally(() => this.isLoading = false)
					}
				}, null, {
					name: "feedback-form-modal",
					classes: 'is-small'
				})
			}
		}
	};
</script>

<style scoped>
	.feedback-form {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		margin: range(-5px, -10px) range(-10px, -20px);
	}

	.grid-cell {
		min-width: 0;
		margin: range(5px, 10px) range(10px, 20px);
		flex: 1 1 200px;
	}

	.grid-cell-has-field {
		flex-basis: 300px;
	}

	.base-field.field {
		width: 100%;
	}

	.base-button.button {
		--base-button_background-color: #222222;
		width: 100%;
	}

	.content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.4rem);
		font-weight: 400;
		line-height: 1.25;
		margin-top: range(20px, 40px);

		>>> a {
			color: var(--color-link);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
