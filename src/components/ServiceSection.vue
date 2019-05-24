<script>
	export default {
		name: 'ServiceSection'
	};
</script>

<style scoped>
	.service-section {
		display: block;
		padding: scale-down(80px, 0.5) 0;
	}

	.grid {
		max-width: env(--max-breakpoint);
		margin: 0 auto;
		overflow: hidden;
	}

	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin: scale-down(-40px, 0.5) scale-down(-50px, 0.5);
	}

	.grid-cell {
		width: calc(50% - scale-down(100px, 0.5));
		margin: scale-down(40px, 0.5) scale-down(50px, 0.5);

		@media (width < 1024px) {
			width: calc(100% - scale-down(100px, 0.5));
		}
	}

	.service {

	}

	.service-body {
		padding: 0 range(10px, 80px);
		margin-bottom: scale-down(80px, 0.5);
	}

	.service-title {
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--font-size-h2);
		font-weight: 700;
		line-height: 1.25;
		text-align: center;
		margin: 0 0 scale-down(80px, 0.5);
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

		&:not(:hover) {
			.service-button-icon {
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

	.service-button-icon {
		flex-shrink: 0;
		width: scale-down(50px, 0.5);
		height: scale-down(50px, 0.5);
		transition: transform, opacity;
		transition-duration: 0.2s;

		&:nth-of-type(2) {
			transform: rotateY(180deg);
		}
	}
</style>
