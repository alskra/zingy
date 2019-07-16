<script>
	import AppPage from './components/AppPage';
	import AppModalBody from './components/AppModalBody';
	import FeedbackForm from './components/FeedbackForm';

	export default {
		name: 'App',
		components: {
			AppPage
		},
		methods: {
			showModalFeedback() {
				this.$showModal({
					components: {
						AppModalBody,
						FeedbackForm
					},
					data() {
						return {

						};
					},
					i18n: {
						messages: {
							en: {
								title: 'Feedback'
							},
							ru: {
								title: 'Обратная связь'
							}
						}
					},
					template: `
						<app-modal-body class="modal-body" name="feedback" classes="is-small">
							<template #title>{{ $t('title') }}</template>
							<feedback-form agree-url="/"></feedback-form>
						</app-modal-body>
					`
				}, null, {
					name: 'feedback',
					classes: 'is-small'
				});
			}
		}
	}
</script>
