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
	<div class="image-container">
		<HeroSlider galleryID="hero-gallery" photos={images} />
	</div>
</section>

<style lang="scss">
	.hero {
		position: relative;
		height: 40vh;
		margin-bottom: 3rem;

		@include mobile {
			height: 35vh;
		}
	}

	.no-images {
		height: 13vh;
		min-height: 180px;

		@include mobile {
			min-height: 200px;
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
