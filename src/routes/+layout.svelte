<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/normalize.css';
	import { setTheme, startListeningToOSTheme, stopListeningToOSTheme } from '$lib/utils/theme';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => {
		setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
		startListeningToOSTheme();
	});

	onDestroy(stopListeningToOSTheme);
</script>

<Header />

<main class="global-container">
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1 0 auto;
	}
</style>
