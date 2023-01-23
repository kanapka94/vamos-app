<script lang="ts">
	import type { PageImage } from '$lib/types/api';
	import HeroSlider from './HeroSlider.svelte';
	import PageTitle from './PageTitle.svelte';

	export let title: string;
	export let images: PageImage[] = [];
</script>

<section class="hero" class:no-images={images && images.length === 0}>
	<div class="title">
		<PageTitle {title} />
	</div>
	{#if images && images.length > 0}
		<div class="image-container">
			<HeroSlider galleryID="hero-gallery" photos={images} />
		</div>
	{/if}
</section>

<style lang="scss">
	.hero {
		position: relative;
		height: 50vh;
		margin-top: 4rem;
		margin-bottom: 5rem;

		@include desktop {
			height: 40vh;
		}

		@include mobile {
			margin-top: 4rem;
			margin-bottom: 3rem;
		}
	}

	.no-images {
		height: 13vh;
		min-height: 180px;
		margin-top: -2rem;

		@include mobile {
			min-height: 200px;
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	.title {
		position: relative;
		z-index: 2;
		padding-top: 4.5rem;
	}

	img {
		width: 100%;
		object-fit: cover;
	}
</style>
