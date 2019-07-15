<template lang="pug">
	nav.nav-list(
		:set.prop="items = $getSlot('items')"
		@mouseenter="runningLineShown = true"
		@mouseleave="runningLineShown = false"
	)
		ol.items
			li.item(
				v-for="(item, index) of items"
				:key="index"
				@mouseenter="setRunningLine"
			)
				a.item-link(
					v-bind="item.children[0].data.attrs"
				)
					span.item-number {{ (index < 9 ? '0' : '') + (index + 1) }}
					span.item-text {{ $getText(item.children) }}

		transition
			.running-line(
				v-show="runningLineShown"
				:style="runningLineStyle"
			)
</template>

<script>
	export default {
		name: 'NavList',
		data() {
			return {
				runningLineShown: false,
				runningLineStyle: null
			};
		},
		methods: {
			setRunningLine({currentTarget}) {
				this.runningLineStyle = {
					top: currentTarget.offsetTop + 'px',
					height: currentTarget.offsetHeight + 'px'
				}
			}
		}
	};
</script>

<style scoped>
	.nav-list {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			position: relative;
			max-width: 100%;
			flex-direction: column;
		}
	}

	.items {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
		flex-direction: column;
	}

	.item {
		box-sizing: border-box;

		&:hover {
			.item-text {
				transform: translateX(range(10px, 40px));
			}
		}
	}

	.item-link {
		display: flex;
		box-sizing: border-box;
		padding: range(10px, 20px) 0;
		align-items: baseline;
		color: inherit;
		text-decoration: none;
	}

	.item-number {
		box-sizing: border-box;
		margin-right: 10px;
		/*padding: 0 range(5px, 10px);*/
		flex: 0 0 range(40px, 80px);
		min-width: 0;
		color: #5c5c5c;
		font-family: var(--font-family);
		font-size: range(1.6rem, 1.8rem);
		line-height: 1.25;
		text-align: center;
	}

	.item-text {
		box-sizing: border-box;
		flex: 1 1 auto;
		min-width: 0;
		color: var(--color);
		font-family: var(--font-family);
		font-size: range(2.2rem, 2.4rem);
		line-height: 1.25;
		transition: transform 0.3s;
	}

	.running-line {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 3px;
		height: 40px;
		background-color: var(--color-accent);
		transition: top, height;
		transition-duration: 0.3s;
		transition-timing-function: linear;

		&.v-enter-active,
		&.v-enter-leave {
			transition: opacity 0.2s;
		}

		&.v-enter,
		&.v-leave-to {
			opacity: 0;
		}
	}
</style>
