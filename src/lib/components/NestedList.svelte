<script lang="ts">
	interface Item {
		content: string;
		items: Item[];
	}

	export let listStyle: 'ordered' | 'unordered' = 'ordered';
	export let items: Item[] = [];
</script>

<svelte:element this={listStyle === 'ordered' ? 'ol' : 'ul'}>
	{#each items as item}
		<li>{@html item.content}</li>
		{#if item.items.length > 0}
			<svelte:self {listStyle} items={item.items} style="counter-reset: item;" />
		{/if}
	{/each}
</svelte:element>

<style>
	ol {
		counter-reset: item;
		list-style: none;
	}

	li:before {
		counter-increment: item;
		content: counter(item) '. ';
	}

	ol ol li:before {
		content: counters(item, '.') ' ';
	}
</style>
