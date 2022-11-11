<script lang="ts">
	import { page } from '$app/stores';
	import PageContent from '$lib/components/PageContent.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data.page.title} - Vamos Blog</title>
</svelte:head>

<a href="/blog">Blog</a> > {data.page.title}

<h1>{data.page.title}</h1>

<PageContent content={data.page.content} />

<Tags tags={data.page.tags} />
