<script lang="ts">
	export let level: '1' | '2' | '3' | '4' | '5' | '6' = '1';
</script>

<svelte:element this={`h${level}`}>
	<slot />
</svelte:element>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}
</style>
