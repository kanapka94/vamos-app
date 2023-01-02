<script lang="ts">
	import { PUBLIC_VITE_API_URL } from '$env/static/public';
	import Page from '$lib/components/Page.svelte';
	import noPostsIcon from '$lib/assets/waiting_for_posts.svg';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Vamos Blog</title>
</svelte:head>

<Page page={data.page} />

{#if data.posts && data.posts.length > 0}
	<div class="post-thumbnails">
		{#each data.posts as post}
			<a href={`/blog/${post.slug}`} class="post-thumbnail">
				{#if post.image}
					<img
						src={`${PUBLIC_VITE_API_URL}/assets/${post.image.id}?width=300&height=200&fit=cover`}
						alt={post.image.description}
						class="thumbnail"
					/>
				{/if}
				<p class="title">{post.title}</p>
			</a>
		{/each}
	</div>
{:else}
	<section class="no-posts-section">
		<img src={noPostsIcon} class="no-posts" />
		<p>Niebawem pojawią się tutaj wpisy...</p>
	</section>
{/if}

<style lang="scss">
	.post-thumbnails {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-top: 4rem;

		@include tablet {
			grid-template-columns: repeat(2, 1fr);
		}

		@include mobile {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.post-thumbnail {
		max-width: 300px;
		display: block;
		border-radius: 10px;
		border: 1px solid gainsboro;
		color: var(--color);
		text-decoration: none;
		overflow: hidden;

		.title {
			padding: 0 15px;
			font-size: 0.9rem;
		}

		@include mobile {
			display: flex;
			max-width: 100%;

			img {
				width: 50%;
			}

			.title {
				font-size: inherit;
			}
		}
	}

	.no-posts-section {
		text-align: center;

		p {
			font-weight: bold;
		}
	}

	.no-posts {
		max-width: 350px;
		margin: 30px auto;
	}
</style>
