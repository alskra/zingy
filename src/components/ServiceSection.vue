<script>
	import DList from './DList';

	export default {
		name: 'ServiceSection',
		components: {
			DList
		}
	};
</script>

<style scoped>
	.service-section {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			padding: range(30px, 60px) 0;
			flex-direction: column;
			background-color: white;
		}
	}

	.grid {
		margin: 0 auto;
		position: relative;
		width: 100%;
		max-width: env(--max-breakpoint);
		overflow: hidden;
	}

	.base-icon.grid-arrow {
		position: absolute;
		top: 0;
		left: 50%;
		width: scale-down(160px, 0.3);
		height: scale-down(90px, 0.3);
		color: #f0f0f0;
		transform: translateX(-50%);
		pointer-events: none;

		@media (width < 1024px) {
			position: static;
			margin: scale-down(35px, 0.3) auto;
			transform: rotate(90deg);
		}
	}

	.grid-row {
		display: flex;
		margin: scale-down(-40px, 0.5) scale-down(-80px, 0.5);
		flex-wrap: wrap;

		& + .grid-row {
			margin-top: scale-down(40px, 0.5);
		}

		@media (width >= 1024px) {
			/*&:nth-child(even),*/
			&.invert {
				.grid-cell {
					&:nth-child(1) {
						order: 1;
					}
				}

				.image-box-inner {
					margin: range(20px, 80px) range(20px, 60px) 0 range(20px, 190px);

					&::before {
						right: range(20px, 190px);
						left: auto;
					}
				}

				.image-rect {
					right: range(-20px, -60px);
					left: auto;
				}
			}
		}
	}

	.grid-cell {
		display: flex;
		box-sizing: border-box;
		margin: scale-down(40px, 0.5) scale-down(80px, 0.5);
		width: calc(50% - scale-down(160px, 0.5));
		flex-direction: column;

		@media (width < 1024px) {
			width: calc(100% - scale-down(160px, 0.5));
		}
	}

	.service {
		display: flex;
		box-sizing: border-box;
		height: 100%;
		flex-direction: column;
	}

	.service-header {
		margin-bottom: scale-down(40px, 0.5);
		padding: 0 var(--grid_padding);
	}

	.service-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 700;
		line-height: 1.25;
		text-align: center;
		margin: 0;
	}

	.service-main {
		display: flex;
		box-sizing: border-box;
		position: relative;
		padding: scale-down(40px, 0.5) var(--grid_padding);
		flex-grow: 1;
		flex-direction: column;
	}

	.base-icon.service-main-bg,
	.service-main-image {
		position: absolute;
		top: 0;
		left: var(--grid_padding);
		width: calc(50% - 2 * var(--grid_padding));
		height: 100%;
		color: #f0f0f0;
		pointer-events: none;

		@media (width < 1024px) {
			width: calc(100% - 2 * var(--grid_padding));
		}
	}

	.service-main-image {
		object-fit: contain;
		object-position: 100% 50%;

		@media (width < 1024px) {
			object-position: 50% 0;
		}
	}

	.d-list.service-list {
		margin: 0 auto;
	}

	.service-footer {
		margin-top: scale-down(40px, 0.5);
	}

	.service-button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: scale-down(106px, 0.5);
		background-color: #373737;
		color: white;
		text-decoration: none;
		padding: scale-down(20px, 0.5);
		box-sizing: border-box;

		:root.is-device-desktop &:not(:hover) {
			.base-icon.service-button-icon {
				transform: translateY(10px);
				opacity: 0;

				&:nth-of-type(2) {
					transform: rotateY(180deg) translateY(10px);
				}
			}
		}
	}

	.service-button-text {
		font-family: var(--font-family);
		font-size: scale-down(2.4rem, 0.5);
		font-weight: 500;
		text-transform: uppercase;
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 scale-down(10px, 0.5);

		strong {
			text-decoration: underline;
			font-weight: inherit;
		}
	}

	.base-icon.service-button-icon {
		flex-shrink: 0;
		width: scale-down(50px, 0.5);
		height: scale-down(50px, 0.5);
		transition: transform, opacity;
		transition-duration: 0.2s;

		&:nth-of-type(2) {
			transform: rotateY(180deg);
		}
	}

	.image-box {
		display: flex;
		margin: auto 0;
		flex-direction: column;

		@media (width < 1024px) {
			margin: 0 auto;
			width: calc(100% - 2 * var(--grid-cell_padding));
			max-width: 650px;
		}
	}

	.image-box-inner {
		box-sizing: border-box;
		position: relative;
		margin: range(20px, 80px) range(20px, 190px) 0 range(20px, 60px);

		&::before {
			content: '';
			position: absolute;
			top: range(-20px, -80px);
			left: range(20px, 190px);
			width: 100%;
			height: 100%;
			background-color: #f0f0f0;
		}
	}

	.base-image.image {
		position: relative;
		z-index: 1;
		width: 100%;
		/*max-width: 650px;*/

		&:not(.v-lazy-image-loaded) {
			& + .image-rect {
				top: 0;
				right: 0;
				left: 0;
				opacity: 0;
			}
		}
	}

	.image-rect {
		box-sizing: border-box;
		position: absolute;
		top: range(-10px, -40px);
		left: range(-20px, -60px);
		border: 3px solid var(--color-accent);
		width: 90%;
		height: 90%;
		transition: top, right, left, opacity;
		transition-duration: 0.5s;
		transition-delay: 0.6s;
	}
</style>
