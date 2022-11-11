<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Strona główna - Vamos</title>
</svelte:head>

<Page page={data.page} />
