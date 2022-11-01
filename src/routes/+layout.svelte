<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/normalize.css';
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
