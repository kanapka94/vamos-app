<script lang="ts">
	import PageContent from '$lib/components/PageContent.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import type { Page } from '$lib/types/api';

	export let page: Page;
</script>

{#if page}
	<h1>{page.title}</h1>
	<PageContent content={page.content} />
	<Slider photos={page.images} />
{/if}

<style lang="scss">
	h1 {
		font-size: 3rem;
		margin-bottom: 2em;

		&::before {
			content: '';
			margin-right: 1rem;
			border-left: 0.8rem solid var(--color);
		}

		@include mobile {
			margin-bottom: 1em;
		}
	}
</style>
