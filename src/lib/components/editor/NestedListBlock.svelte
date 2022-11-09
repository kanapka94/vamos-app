<script lang="ts">
	import type { EditorBlock } from '$lib/types/api';
	import { dataset_dev } from 'svelte/internal';
	import NestedList from '../NestedList.svelte';

	export let block: EditorBlock;
</script>

<NestedList listStyle={block.data.style} items={block.data.items} />
