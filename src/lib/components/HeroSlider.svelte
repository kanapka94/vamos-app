<script lang="ts">
	import { PUBLIC_VITE_API_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import type { PageImage } from '$lib/types/api';
	import 'photoswipe/style.css';

	export let galleryID: string = `my-gallery-${new Date().getTime()}`;
	export let photos: PageImage[] = [];

	const photosLength = photos.length;

	let activeImageIndex = 0;
	let intervalId;
	let lightbox;

	onMount(() => {
		if (!photos.length) {
			return;
		}

		lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		lightbox.init();

		intervalId = setInterval(() => changeActiveImage(1), 3500);
	});

	const lastImageIndex = photos.length - 1;

	function handleClickNext() {
		changeActiveImage(1);
		clearInterval(intervalId);
		intervalId = setInterval(() => changeActiveImage(1), 3500);
	}

	function handleClickPrev() {
		changeActiveImage(-1);
		clearInterval(intervalId);
		intervalId = setInterval(() => changeActiveImage(1), 3500);
	}

	function changeActiveImage(step: number) {
		activeImageIndex += step;

		if (activeImageIndex < 0) {
			activeImageIndex = lastImageIndex;
		}

		if (activeImageIndex > lastImageIndex) {
			activeImageIndex = 0;
		}
	}

	function openGallery() {
		lightbox.loadAndOpen(0);
	}
</script>

{#if photosLength > 0}
	<div class="pswp-gallery" id={galleryID}>
		<button class="galery-open" on:click={openGallery}>Galeria</button>
		{#each photos as photo, index}
			<a
				href={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}`}
				data-pswp-width={photo.directus_files_id.width}
				data-pswp-height={photo.directus_files_id.height}
				data-pswp-alt={photo.directus_files_id.description}
				target="_blank"
				rel="noreferrer"
				class="image"
				class:active={activeImageIndex === index}
			>
				<img
					src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=1280&height=650&fit=cover`}
					alt={photo.directus_files_id.description}
					class="blur-image"
				/>
				<img
					src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=1280&height=650&fit=cover`}
					alt={photo.directus_files_id.description}
				/>
			</a>
		{/each}
	</div>
	<button class="gallery-nav prev" on:click={handleClickPrev}>➜</button>
	<button class="gallery-nav next" on:click={handleClickNext}>➜</button>
{/if}

<style lang="scss">
	.pswp-gallery {
	}

	.image {
		position: absolute;
		top: 0;
		left: 50%;
		min-width: 1024px;
		width: 65vw;
		opacity: 0;
		visibility: hidden;
		transform: translateX(-50%);

		&::after {
			content: '';
		}

		&.active {
			opacity: 1;
			visibility: visible;
			transition: opacity cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s;
		}

		img {
			width: 100%;
			height: 40vh;
			object-fit: cover;
			border-radius: 0 0 10px 10px;

			@include mobile {
				height: 35vh;
			}
		}

		@include small-desktop {
			min-width: auto;
			width: 100%;
		}
	}

	.blur-image {
		position: absolute;
		top: 0;
		left: 0;
		filter: blur(26px);
		transform: scale(1.2);
		opacity: 0.2;
	}

	.galery-open {
		position: absolute;
		bottom: 10px;
		right: 10px;
		z-index: 2;
		padding: 15px;
		border: none;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.7);
		font-weight: bold;
		color: var(--color);
		cursor: pointer;

		&:hover {
			background-color: rgba(114, 6, 6, 0.8);
			transition: linear background-color 0.3s;
		}
	}

	.gallery-nav {
		position: absolute;
		z-index: 2;
		bottom: 10px;
		left: 10px;
		border-radius: 10px;
		padding: 15px;
		border: none;
		background-color: rgba(0, 0, 0, 0.7);
		color: var(--color);
		cursor: pointer;

		&:hover {
			background-color: rgba(114, 6, 6, 0.8);
			transition: linear background-color 0.3s;
		}
	}

	.prev {
		transform: rotate(180deg);
	}

	.next {
		left: 65px;
	}
</style>
