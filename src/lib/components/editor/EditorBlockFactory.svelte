<script lang="ts">
	import type { EditorBlock } from '$lib/types/api';
	import DelimiterBlock from './DelimiterBlock.svelte';
	import HeadingBlock from './HeadingBlock.svelte';
	import ImageBlock from './ImageBlock.svelte';
	import NestedListBlock from './NestedListBlock.svelte';
	import ParagraphBlock from './ParagraphBlock.svelte';
	import RawBlock from './RawBlock.svelte';

	export let block: EditorBlock;
</script>

{#if block.type === 'header'}
	<HeadingBlock {block} />
{:else if block.type === 'paragraph'}
	<ParagraphBlock {block} />
{:else if block.type === 'nestedlist'}
	<NestedListBlock {block} />
{:else if block.type === 'image'}
	<ImageBlock {block} />
{:else if block.type === 'delimiter'}
	<DelimiterBlock />
{:else if block.type === 'raw'}
	<RawBlock {block} />
{:else}{/if}
