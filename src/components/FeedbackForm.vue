<i18n>
	{
		"en": {
			"placeholder": {
				"tel": "Phone",
				"url": "Reference to site"
			},
			"submit": "Submit"
		},
		"ru": {
			"placeholder": {
				"tel": "Телефон",
				"url": "Ссылка на сайт"
			},
			"submit": "Отправить"
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
					ref="field"
					@invalid.native="field.isValidate = true"
					v-imask="field.maskOptions"
					v-model="field.value"
				)

			.grid-cell
				base-button.button {{ $t('submit') }}
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
		data() {
			return {
				fields: [
					{
						id: 1,
						attrs: {
							name: 'tel',
							type: 'tel',
							required: true,
							minlength: 8,
							autocomplete: 'off'
						},
						value: null,
						isValidate: false,
						maskOptions: {
							mask: [
								{
									mask: '+00 {21} 0 000 0000',
									startsWith: /^30/,
									lazy: false,
									country: 'Greece'
								},
								{
									mask: '+0 000 000-00-00',
									startsWith: /^[78]/,
									lazy: false,
									country: 'Russia'
								},
								{
									mask: '+00-0000-000000',
									startsWith: /^91/,
									lazy: false,
									country: 'India'
								},
								{
									mask: '0000000000000',
									startsWith: /^/,
									country: 'unknown'
								}
							],
							dispatch(appended, dynamicMasked) {
								const number = (dynamicMasked.value + appended).replace(/\D/g, '');

								return dynamicMasked.compiledMasks.find(m => number.match(m.startsWith));
							}
						},
					},
					{
						id: 2,
						attrs: {
							name: 'url',
							type: 'url',
							required: false
						},
						value: null,
						isValidate: false
					}
				],
				isInvalid: true
			};
		},
		methods: {
			onSubmit() {
				alert('onSubmit');
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
</style>
