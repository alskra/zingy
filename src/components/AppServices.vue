<template lang="pug">
	section.app-services(
		:set.prop=`(
			title = $getSlot('title'),
			services = $getSlot('services')
		)`
	)
		.title(
			v-if="title"
			:is="title[0].tag"
			:style="{display: 'none'}"
		) {{ $getText(title) }}

		.grid
			.grid-row
				.grid-cell(
					v-for="({tag, slots: {title, 'nav-list': navList}}, index) of services"
					:key="index"
				)
					.service(
						:is="tag"
					)
						.service-header
							.service-title(
								v-if="title"
								:is="title[0].tag"
							) {{ $getText(title) }}

						.service-main
							nav-list.service-nav-list(
								v-if="navList"
							)
								template(slot="items")
									v-nodes(:vnodes="navList")
</template>

<script>
	import NavList from './NavList';

	export default {
		name: 'AppServices',
		components: {
			NavList
		}
	};
</script>

<style scoped>
	.app-services {
		all: initial;

		& {
			display: flex;
			box-sizing: border-box;
			padding: range(30px, 60px) 0;
			max-width: 100%;
			flex-direction: column;
		}

		&.padding-top-none {
			padding-top: 0;
		}
	}

	.grid {
		box-sizing: border-box;
		margin: 0 auto;
		padding: 0 range(10px, 40px);
		width: 100%;
		max-width: 1920px;
		overflow: hidden;
	}

	.grid-row {
		display: flex;
		margin: range(-20px, -40px) range(-10px, -40px);
		flex-wrap: wrap;

		@media (width < 1024px) {
			/*flex-direction: column;*/
		}
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(20px, 40px) range(10px, 40px);
		flex: 0 0 percentage(1 / 3);
		min-width: 0;

		@media (width < 1440px) {
			flex: 0 0 percentage(1 / 2);
		}

		@media (width < 1024px) {
			flex: 0 0 100%;
		}
	}

	.service {
		display: flex;
		box-sizing: border-box;
		max-width: 100%;
		flex-direction: column;
	}

	.service-header {
		margin-bottom: range(20px, 30px);
	}

	.service-title {
		margin: 0;
		color: var(--color);
		font-family: var(--font-family);
		font-size: var(--h1_font-size);
		font-weight: 700;
		line-height: 1.25;
		text-align: center;
	}

	.service-main {
		display: flex;
		flex-direction: column;
	}

	.nav-list.service-nav-list {

	}
</style>
