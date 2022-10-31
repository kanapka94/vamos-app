<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/normalize.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		max-width: 1024px;
		width: 100%;
		margin: 0 auto;
	}
</style>
