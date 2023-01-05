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
</script>

{#if photosLength > 0}
	<div class="pswp-gallery" id={galleryID}>
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
					src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=1024&height=550&fit=cover`}
					alt={photo.directus_files_id.description}
					class="blur-image"
				/>
				<img
					src={`${PUBLIC_VITE_API_URL}/assets/${photo.directus_files_id.id}?width=1024&height=550&fit=cover`}
					alt={photo.directus_files_id.description}
				/>
			</a>
		{/each}
	</div>
	<button class="prev" on:click={handleClickPrev}>➜</button>
	<button class="next" on:click={handleClickNext}>➜</button>
{/if}

<style lang="scss">
	.pswp-gallery {
		opacity: 0.6;

		@include dark {
			opacity: 0.3;
		}
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		opacity: 0;
		visibility: hidden;

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
			height: 35vh;
			object-fit: cover;
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

	button {
		position: absolute;
		bottom: 0;
		padding: 20px;
		border: none;
		background-color: rgba(0, 0, 0, 0.3);
		color: var(--color);
		cursor: pointer;

		&:hover {
			background-color: rgba(80, 5, 5, 0.3);
			transition: linear background-color 0.3s;
		}
	}

	.prev {
		transform: rotate(180deg);
	}

	.next {
		left: 55px;
	}
</style>
