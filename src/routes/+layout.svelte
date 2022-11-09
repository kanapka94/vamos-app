<script lang="ts">
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/normalize.css';
	import { setTheme, startListeningToOSTheme, stopListeningToOSTheme } from '$lib/utils/theme';
	import type { LayoutServerData } from './$types';
	import { onDestroy, onMount } from 'svelte';

	export let data: LayoutServerData;

	onMount(() => {
		setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
		startListeningToOSTheme();
	});

	onDestroy(stopListeningToOSTheme);
</script>

<Header menu={data.menus[0]} />

<main class="global-container">
	<slot />
</main>

<ContactSection />
<Footer />

<style lang="scss">
	:global(body) {
		margin-top: 150px;

		@include mobile {
			margin-top: 100px;
		}
	}

	:global(img.icon) {
		@include dark {
			filter: invert(0.7);
		}
	}

	:global(mark) {
		background-color: var(--mark-background);
		color: var(--mark-color);
	}

	main {
		flex: 1 0 auto;
		padding-bottom: 2em;

		@include mobile {
			padding-top: 1em;
			padding-bottom: 1em;
		}

		:global(a) {
			color: var(--primary-color);
			text-decoration: none;

			&:hover,
			&:focus {
				text-decoration: underline;
			}
		}
	}
</style>
