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
	const DELAY = 4000;

	onMount(() => {
		if (!photos.length) {
			return;
		}

		lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		lightbox.addFilter('useContentPlaceholder', (useContentPlaceholder, content) => {
			return false;
		});

		lightbox.init();

		intervalId = setInterval(() => changeActiveImage(1), DELAY);
	});

	const lastImageIndex = photos.length - 1;

	function handleClickNext() {
		changeActiveImage(1);
		clearInterval(intervalId);
		intervalId = setInterval(() => changeActiveImage(1), DELAY);
	}

	function handleClickPrev() {
		changeActiveImage(-1);
		clearInterval(intervalId);
		intervalId = setInterval(() => changeActiveImage(1), DELAY);
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
		document.querySelector('.pswp-gallery a.active').click();
	}
</script>

<div class="pswp-gallery" id={galleryID}>
	<button class="button galery-open" on:click={openGallery}>Galeria</button>
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
				src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=1920&height=1080&fit=cover`}
				alt={photo.directus_files_id.description}
				class="blur-image"
			/>
			<img
				src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=1920&height=1080&fit=cover`}
				alt={photo.directus_files_id.description}
			/>
		</a>
	{/each}
</div>
<button class="button gallery-nav prev" on:click={handleClickPrev}>➜</button>
<button class="button gallery-nav next" on:click={handleClickNext}>➜</button>

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
		}

		img {
			width: 100%;
			height: 50vh;
			object-fit: cover;
			border-radius: 10px;

			@include desktop {
				height: 40vh;
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
		filter: blur(35px);
		transform: scale(1.3);
		opacity: 0.2;

		@include mobile {
			transform: scale(1.1);
		}
	}

	.button {
		border: none;
		border-radius: 10px;
		padding: 15px;
		background-color: rgba(0, 0, 0, 0.7);
		color: var(--color);
		cursor: pointer;
		transition: cubic-bezier(0.57, 0.21, 0.69, 1.25) 0.2s;

		&:hover {
			box-shadow: 0 0 0 3px var(--color);
			opacity: 0.9;
		}

		@include light {
			background-color: rgba(255, 255, 255, 0.9);
		}
	}

	.galery-open {
		position: absolute;
		bottom: 10px;
		right: 10px;
		z-index: 2;
		font-weight: bold;
	}

	.gallery-nav {
		position: absolute;
		z-index: 2;
		bottom: 10px;
		left: 10px;
	}

	.prev {
		transform: rotate(180deg);
	}

	.next {
		left: 65px;
	}
</style>
