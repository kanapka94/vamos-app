<script lang="ts">
	import PageContent from '$lib/components/PageContent.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { Page } from '$lib/types/api';

	export let page: Page;
</script>

{#if page}
	<h1>{page.title}</h1>
	<Slider photos={page.images} />
	<PageContent content={page.content} />
{/if}

<style lang="scss">
	h1 {
		margin-bottom: 2em;

		@include mobile {
			margin-bottom: 1em;
		}
	}
</style>
