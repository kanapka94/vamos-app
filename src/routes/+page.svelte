<script lang="ts">
	import { page } from '$app/stores';
	import PageContent from '$lib/components/PageContent.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Strona główna - Vamos</title>
</svelte:head>

{#if data.page}
	<h1>{data.page.title}</h1>
	<Slider photos={data.page.images} />
	<PageContent content={data.page.content} />
{/if}

<style lang="scss">
	h1 {
		margin-bottom: 2em;

		@include mobile {
			margin-bottom: 1em;
		}
	}
</style>
