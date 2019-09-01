<script>
	export default {
		name: 'WorksItem'
	};
</script>

<style scoped>
	.works-item {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}
	}

	.image-box {
		display: flex;
		color: var(--color);
		text-decoration: none;
		position: relative;
		margin: range(3px, 9px) 0 0 range(3px, 9px);
		padding: scale-down(20px, 0.5);

		&::before {
			content: '';
			display: block;
			padding-top: percentage(356 / 686);
			background-color: inherit;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}

		@media (width < 768px) {
			&::before {
				padding-top: percentage((356 + 80) / 686);
			}
		}
	}

	.image-underlay {
		position: absolute;
		top: range(-3px, -9px);
		right: range(5px, 40px);
		bottom: range(5px, 20px);
		left: range(-3px, -9px);
		background-color: inherit;
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.logo {
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 35%;
		height: 35%;
		object-fit: contain;

		@media (width < 768px) {
			width: 50%;
			height: 50%;
		}
	}

	.caption {
		position: relative;
		z-index: 1;
		margin: range(-5px, -20px) range(5px, 40px) 0 range(3px, 9px);
		padding: range(15px, 30px) range(15px, 30px) range(15px, 20px) range(15px, 50px);
	}

	.description {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.5rem, 1.8rem);
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		height: calc(1.25em * 2);
		margin: 0 0 1em;

		>>> p {
			margin: 0;
		}
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.3rem, 1.6rem);
		line-height: 1.25;
		margin: 0 0 1em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		>>> strong {
			font-weight: 500;
		}
	}

	.uppercase {
		text-transform: uppercase;
	}

	.view-link {
		color: #ffffff;
		text-decoration: none;
		font-family: var(--font-family);
		font-size: range(1.2rem, 1.5rem);
		line-height: 1.25;
		padding-bottom: 2px;
		background: linear-gradient(to right, currentColor, currentColor) no-repeat 0 100% / 0 2px;
		transition: background-size 0.2s;

		&:hover {
			background-size: 100% 2px;
		}
	}

	.caption-footer {
		text-align: right;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-bottom: 2px;
	}
</style>
