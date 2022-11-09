<script lang="ts">
	import type { EditorBlock } from '$lib/types/api';
	import Paragraph from '../Paragraph.svelte';

	export let block: EditorBlock;
</script>

<Paragraph tunes={block.tunes}>
	{@html block.data.text}
</Paragraph>
