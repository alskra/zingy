<i18n>
	{
		"en": {
			"placeholder": {
				"tel": "Phone",
				"url": "Reference to site"
			},
			"submit": "Submit",
			"agree": "*&nbsp;By submitting an application, you agree to <a href='{url}' target='_blank'>the terms of information transfer</a>."
		},
		"ru": {
			"placeholder": {
				"tel": "Телефон",
				"url": "Ссылка на сайт"
			},
			"submit": "Отправить",
			"agree": "*&nbsp;Отправляя заявку, вы соглашаетесь с <a href='{url}' target='_blank'>условиями передачи информации</a>."
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
				v-for="(field, index) in fields"
				:key="field.id"
			)
				base-field.field(
					v-bind="field.attrs"
					:placeholder="$t(`placeholder.${field.attrs.type}`)"
					:class="{'is-validate': field.isValidate}"
					@invalid.native="field.isValidate = true"
					v-model="field.value"
					v-imask="field.maskOptions"
					@accept.native="field.maskOptions ? field.unmaskedValue = $event.detail.unmaskedValue : null"
					ref="field"
				)

			.grid-cell
				base-button.button {{ $t('submit') }}

		.content(v-html="$t('agree', {url: agreeUrl})")
</template>

<script>
	import {IMaskDirective} from 'vue-imask';
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
							name: 'tel',
							type: 'tel',
							autocomplete: 'on',
							required: true,
							minlength: 8
						},
						value: '',
						isValidate: false,
						maskOptions: {
							mask: [
								/**
								 * Unknown:
								 * 0123456789
								 * +0123456789
								 * 55443322
								 * +55443322
								 *
								 * Russia:
								 * 89876543210
								 * 79876543210
								 * +79876543210
								 *
								 * USA:
								 * 19876543210
								 * +19876543210
								 *
								 * UK:
								 * 449876543210
								 * +449876543210
								 */
								{
									mask: '0 (000) 000-00-00',
									startsWith: /^8/,
									lazy: false,
									country: 'Russia'
								},
								{
									mask: '{+}0 (000) 000-00-00',
									startsWith: /^\+?7/,
									lazy: false,
									country: 'Russia'
								},
								{
									mask: '{+}0 (000) 000-0000',
									startsWith: /^\+?1/,
									lazy: false,
									country: 'United States'
								},
								{
									mask: '{+}00 00 0000 0000',
									startsWith: /^\+?44/,
									lazy: false,
									country: 'United Kingdom'
								},
								{
									// mask: /^[+]\d+$/,
									mask: '{+}0000000000000000',
									startsWith: /^\+|\d/,
									country: 'Unknown'
								},
								// {
								// 	mask: /^\d+$/,
								// 	startsWith: /^\d/,
								// 	country: 'Unknown'
								// }
							],
							dispatch(appended, dynamicMasked) {
								const number = (dynamicMasked.value + appended).replace(/[^+\d]/g, '');

								return dynamicMasked.compiledMasks.find(m => number.match(m.startsWith));
							}
						},
						unmaskedValue: ''
					},
					{
						id: 2,
						attrs: {
							name: 'url',
							type: 'url',
							autocomplete: 'on',
							required: false
						},
						value: '',
						isValidate: false
					}
				],
				isInvalid: true
			};
		},
		methods: {
			onSubmit(evt) {
				const form = evt.target,
					vm = this;

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
						// Fetch data
						const formData = new FormData(form);

						vm.fields.forEach(field => {
							if (field.maskOptions) {
								formData.set(field.attrs.name, field.unmaskedValue);
							}
						});

						axios.post(form.action, formData)
							.then(response => {
								// В случае успеха ожидаем получить телефон
								this.response = formData.get('tel') || response.data;

								vm.fields.forEach((field, index) => {
									field.value = '';

									if (field.maskOptions) {
										field.unmaskedValue = '';
										vm.$refs.field[index].$el.maskRef.value = '';
										vm.$refs.field[index].$el.maskRef.unmaskedValue = '';
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
