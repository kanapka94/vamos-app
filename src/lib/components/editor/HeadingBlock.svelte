<script lang="ts">
	import type { EditorBlock } from '$lib/types/api';
	import Heading from '../Heading.svelte';

	export let block: EditorBlock;
</script>

<Heading level={block.data.level} tunes={block.tunes}>
	{@html block.data.text}
</Heading>
