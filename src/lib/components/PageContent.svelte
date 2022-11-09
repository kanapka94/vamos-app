<script lang="ts">
	import type { Content } from '$lib/types/api';
	import EditorBlockFactory from './editor/EditorBlockFactory.svelte';

	export let content: Content;
</script>

{#each content.blocks as block}
	<EditorBlockFactory {block} />
	<br />
	<br />
{/each}
