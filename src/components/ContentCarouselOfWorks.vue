<script>
	import ContentCarousel from './ContentCarousel';
	import WorkElement from './WorkElement';

	export default {
		name: 'ContentCarouselOfWorks',
		extends: ContentCarousel,
		data() {
			return {
				slickOptions: {
					variableWidth: true,
					slidesToShow: 2,
					responsive: [
						{
							breakpoint: 982,
							settings: {
								slidesToShow: 1
							}
						}
					]
				}
			};
		},
		components: {
			WorkElement
		}
	};
</script>

<style scoped src="./ContentCarousel.vue"></style>

<style scoped>
	>>> .slick-slider {
		max-width: 1920px;
		margin: 0 auto;
	}

	>>> .slick-list {
		/*margin: 0 range(-10px, -25px);*/
		padding: 0 range(10px, 40px);
	}

	>>> .slick-slide {
		margin: 0 range(10px, 25px);
		width: range(300px, 695px);

		&:not(.slick-active) {
			position: relative;
			opacity: 0.8;

			&::before {
				content: '';
				position: absolute;
				z-index: 10;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #a7a7a7;
				opacity: 0.6;
			}
		}
	}

	.WorkElement {
		vertical-align: top;
	}
</style>
