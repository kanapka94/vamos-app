<script lang="ts">
	import { PUBLIC_VITE_API_URL } from '$env/static/public';
	import type { EditorBlock } from '$lib/types/api';

	export let block: EditorBlock;

	const file = block.data.file;
</script>

<figure>
	<img src={`${PUBLIC_VITE_API_URL}/assets/${file?.fileId}`} alt={block.data.caption} />
	<figcaption>{@html block.data.caption}</figcaption>
</figure>

<style lang="scss">
	figure {
		margin: 2rem;
	}

	figcaption {
		font-style: italic;
		text-align: center;
		margin-top: 1rem;
	}

	img {
		max-width: 100%;
		max-height: 60vh;
		display: block;
		margin: 0 auto;
	}
</style>
