<script lang="ts">
	import type { EditorBlock } from '$lib/types/api';

	export let block: EditorBlock;
</script>

<div>{@html block.data.html}</div>

<style>
	div {
		border-radius: 10px;
		overflow: hidden;
	}
</style>
