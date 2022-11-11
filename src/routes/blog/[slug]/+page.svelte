<script lang="ts">
	import PageContent from '$lib/components/PageContent.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data.page.title} - Vamos Blog</title>
</svelte:head>

{#if data.page}
	<PageContent content={data.page.content} />
{/if}
