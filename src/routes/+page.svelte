<script lang="ts">
	import { page } from '$app/stores';
	import PageContent from '$lib/components/PageContent.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Strona główna - Vamos</title>
</svelte:head>

{#if data.page}
	<PageContent content={data.page.content} />
{/if}
