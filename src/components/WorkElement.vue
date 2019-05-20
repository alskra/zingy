<script>
	export default {
		name: 'WorkElement'
	};
</script>

<style scoped>
	.WorkElement {
		all: initial;

		& {
			display: flex;
			flex-flow: column;
		}
	}

	.image-box {
		display: block;
		color: var(--color);
		text-decoration: none;
		position: relative;
		margin: 9px 0 0 9px;

		&::before {
			content: '';
			display: block;
			padding-top: percentage(356 / 686);
			background-color: #a7a7a7;
		}

		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			top: -9px;
			right: range(9px, 40px);
			bottom: range(9px, 20px);
			left: -9px;
			background-color: inherit;
		}

		&:empty {
			/*background-color: #a7a7a7;*/
		}
	}

	.image {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.caption {
		position: relative;
		z-index: 1;
		margin: range(-9px, -20px) range(9px, 40px) 0 9px;
		padding: range(10px, 30px) range(15px, 35px) range(10px, 20px) range(15px, 55px);
	}

	.description {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		line-height: 1.25;
		overflow: hidden;
		text-overflow: ellipsis;
		height: calc(1.25em * 2);
		margin-bottom: 1em;

		>>> p {
			margin: 0;
		}
	}

	.title {
		color: #ffffff;
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
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
		font-size: range(1.3rem, 1.5rem);
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
