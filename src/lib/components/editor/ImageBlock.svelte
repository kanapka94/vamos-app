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
		position: relative;
		z-index: 1;
		margin: 6rem 2rem;

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			top: -25px;
			left: 0;
			width: 100vw;
			height: calc(100% + 50px);
			display: block;
			background: var(--image-wide-background);
			opacity: 0.5;
			transform: translateX(calc(-50% + 512px));

			@include small-desktop {
				transform: translateX(-52px);
			}
		}
	}

	figcaption {
		font-style: italic;
		text-align: center;
		margin-top: 1rem;
	}

	img {
		max-width: 100%;
		max-height: 50vh;
		display: block;
		margin: 0 auto;
		border-radius: 10px;
	}
</style>
