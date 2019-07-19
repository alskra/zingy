<template lang="pug">
	nav.app-breadcrumb
		.item(
			v-for="(item, index) of $getSlot('default')"
			:key="index"
			:set.prop=`(
				attrs = item.data.attrs,
				url = attrs.href.replace(/^/, $publicPath),
				attrs.href = url,
				$filterTags(item.children)[1].data.attrs.itemid = url
			)`
		)
			v-nodes(:vnodes="[item]")
</template>

<script>
	export default {
		name: 'AppBreadcrumb'
	};
</script>

<style scoped>
	.app-breadcrumb {
		all: initial;

		& {
			display: block;
			box-sizing: border-box;
			max-width: 100%;
		}
	}

	.item {
		display: inline;
		color: var(--app-breadcrumb_color, var(--color));
		font-family: var(--font-family);
		font-size: range(1.4rem, 1.6rem);
		font-weight: 400;
		line-height: 1.25;
		cursor: default;

		& + .item {
			&::before {
				content: '\00A0/\0020';
				color: var(--color-link);
			}
		}

		&:last-child {
			a {
				text-decoration: none;
				cursor: inherit;
				pointer-events: none;
			}
		}
	}

	a {
		color: inherit;
		text-decoration: underline;
		transition: color 0.2s;

		&:hover {
			text-decoration: none;
		}
	}
</style>
