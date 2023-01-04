<script lang="ts">
	import PageContent from '$lib/components/PageContent.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { Page } from '$lib/types/api';
	import HeroSection from './HeroSection.svelte';
	import PageTitle from './PageTitle.svelte';

	export let page: Page;
</script>

{#if page}
	<HeroSection title={page.title} images={page.images} />
	<PageContent content={page.content} />
{/if}
