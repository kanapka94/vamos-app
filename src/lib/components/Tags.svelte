<script lang="ts">
	import type { Tag } from '$lib/types/api';

	export let tags: Tag[];
</script>

{#if tags.length}
	<div class="tags">
		{#each tags as tag}
			<div class="tag">{tag}</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.tags {
		margin: 2rem 0;
	}

	.tag {
		display: inline-block;
		background-color: var(--primary-color);
		border-radius: 10px;
		padding: 3px 10px;
		margin: 5px;
		color: #fff;
	}
</style>
