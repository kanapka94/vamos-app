<script lang="ts">
	import { PUBLIC_VITE_API_URL } from '$env/static/public';
	import type { EditorBlock } from '$lib/types/api';

	export let block: EditorBlock;

	const file = block.data.file;
</script>

<img src={`${PUBLIC_VITE_API_URL}/assets/${file?.fileId}`} alt={block.data.caption} />

<style lang="scss">
	img {
		max-width: 100%;
	}
</style>
