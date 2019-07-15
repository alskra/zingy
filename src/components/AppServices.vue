<template lang="pug">
	section.app-services(
		:set.prop=`(
			services = $getSlot('services')
		)`
	)
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
			background: url("../assets/img/services-bg.jpg") no-repeat 50% 50% / cover white;
		}
	}

	.grid {
		margin: 0 auto;
		width: 100%;
		max-width: 1920px;
		overflow: hidden;
	}

	.grid-row {
		display: flex;
		margin: range(-30px, -60px) 0;
		flex-wrap: wrap;
	}

	.grid-cell {
		box-sizing: border-box;
		padding: range(30px, 60px) range(10px, 80px);
		flex: 0 0 50%;
		min-width: 0;

		@media (width < 1024px) {
			padding-right: range(10px, 40px);
			padding-left: range(10px, 40px);
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
		margin: 0 auto;
		/*width: 100%;*/
		/*max-width: 480px;*/
	}
</style>
