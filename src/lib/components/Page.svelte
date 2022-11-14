<script lang="ts">
	import PageContent from '$lib/components/PageContent.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { Page } from '$lib/types/api';
	import PageTitle from './PageTitle.svelte';

	export let page: Page;
</script>

{#if page}
	<PageTitle title={page.title} />
	<PageContent content={page.content} />
	<Slider photos={page.images} />
{/if}
