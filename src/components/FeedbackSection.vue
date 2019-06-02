<script>
	import Inputmask from 'inputmask';
	// import axios from 'axios';
	import AppModal from './AppModal';

	export default {
		name: 'FeedbackSection',
		components: {
			AppModal
		},
		data() {
			return {
				tel: {
					value: '',
					error: null
				},
				url: {
					value: '',
					error: null
				},
				response: null,
				error: null,
				isLoading: false
			};
		},
		computed: {
			hasErrors() {
				return this.tel.error;
			}
		},
		methods: {
			checkTel(tel) {
				if (!tel.value) {
					this.tel.error = 'required';
				} else if (tel.value.length < 9) {
					this.tel.error = 'minLength';
				} else {
					this.tel.error = null;
				}
			},
			onFormSubmit(evt) {
				evt.preventDefault();

				this.checkTel(this.tel);

				if (!this.hasErrors) {
					this.isLoading = true;

					this.response = null;
					this.error = null;

					this.$modal.show('feedback-response');

					const formData = new FormData(evt.target);

					// Simulate AJAX
					setTimeout(() => {
						this.isLoading = false;
						this.response = `Телефон: ${formData.get('tel')}, Сайт: ${formData.get('url') || '-'}`;
					}, 1000);
				}
			}
		},
		mounted() {
			Inputmask({regex: '\\+\\d*'}).mask(this.$el.querySelectorAll('input[type="tel"]'));
		}
	};
</script>

<style scoped>
	.feedback-section {
		all: initial;

		& {
			display: block;
			padding: range(60px / 2, 60px) 0;
			background-color: white;
			position: relative;
			min-height: range(504px / 2, 504px);
			overflow: hidden;
		}
	}

	.bg-icon {
		width: range(504px / 2, 504px);
		height: range(504px / 2, 504px);
		color: #f0f0f0;
		position: absolute;
		top: range(80px / 2, 80px);
		left: 50%;
		margin-left: range(10px, 213px);
		pointer-events: none;
	}

	.grid {
		width: calc(100% - 2 * var(--grid-padding));
		max-width: var(--grid-width);
		padding: 0 var(--grid-padding);
		margin: 0 auto;
		position: relative;
	}

	.grid-row {
		margin: 0 calc(-1 * var(--grid-cell-padding));
	}

	.grid-cell {
		box-sizing: border-box;
		padding: 0 var(--grid-cell-padding);
		margin: 0 auto;

		@media (width >= 768px) {
			width: percentage(10 / 12);
		}
	}

	.title {
		margin: range(0px, 80px) 0 range(40px / 2, 40px);
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--font-size-h1);
		font-weight: 500;
		line-height: 1.25;
	}

	.content {
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.25;

		>>> a {
			color: var(--color-link);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.content-is-description {
		font-size: range(1.6rem, 1.8rem);
		margin-bottom: range(70px / 2, 70px);
	}

	.content-is-info {
		font-size: range(1.2rem, 1.4rem);
		margin-top: range(40px / 2, 40px);
	}

	.form {

	}

	.form-grid {
		display: flex;
		flex-wrap: wrap;
		margin: range(-5px, -10px) range(-10px, -20px);
	}

	.form-grid-cell {
		min-width: 0;
		margin: range(5px, 10px) range(10px, 20px);
		flex: 1 1 200px;
	}

	.form-grid-cell-has-field {
		flex-basis: 300px;
	}

	.form-field {
		width: 100%;
	}

	.submit-button {
		width: 100%;
	}
</style>
