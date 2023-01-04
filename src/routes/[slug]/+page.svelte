<script lang="ts">
	import StaticPage from '$lib/components/StaticPage.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data.page.title} - Vamos</title>
</svelte:head>

<StaticPage page={data.page} />
