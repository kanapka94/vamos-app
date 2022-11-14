<script lang="ts">
	import { PUBLIC_VITE_API_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import type { PageImage } from '$lib/types/api';
	import 'photoswipe/style.css';

	export let galleryID: string = `my-gallery-${new Date().getTime()}`;
	export let photos: PageImage[] = [];

	const photosLength = photos.length;

	onMount(() => {
		if (!photos.length) {
			return;
		}

		const lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		lightbox.init();
	});
</script>

{#if photosLength > 0}
	<h2>Galeria zdjęć</h2>
	<div class="pswp-gallery" id={galleryID}>
		{#each photos as photo}
			<a
				href={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}`}
				data-pswp-width={photo.directus_files_id.width}
				data-pswp-height={photo.directus_files_id.height}
				data-pswp-alt={photo.directus_files_id.description}
				target="_blank"
				rel="noreferrer"
				class="image"
			>
				<img
					src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=200&height=200&fit=cover`}
					alt={photo.directus_files_id.description}
					class="thumbnail"
				/>
			</a>
		{/each}
	</div>
{/if}

<style lang="scss">
	h2 {
		margin: 4rem 0 2rem;
	}

	.pswp-gallery {
		margin-bottom: 2em;

		@include mobile {
			margin-bottom: 1em;
		}
	}

	.image::after {
		content: '';
	}

	.thumbnail {
		border-radius: 10px;
	}
</style>
