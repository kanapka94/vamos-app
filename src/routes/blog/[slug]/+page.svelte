<script lang="ts">
	import { page } from '$app/stores';
	import PageContent from '$lib/components/PageContent.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data.page.title} - Vamos Blog</title>
</svelte:head>

<div class="breadcrumbs">
	<a href="/blog">Blog</a> > {data.page.title}
</div>
<PageTitle title={data.page.title} />
<PageContent content={data.page.content} />
<Tags tags={data.page.tags} />

<style>
	.breadcrumbs {
		margin-bottom: 1rem;
	}
</style>
