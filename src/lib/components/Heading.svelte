<script lang="ts">
	import type { Tunes } from '$lib/types/api';

	export let level: '1' | '2' | '3' | '4' | '5' | '6' = '1';
	export let tunes: Tunes = {};
</script>

<svelte:element
	this={`h${level}`}
	class:right={tunes.alignmentTune.alignment === 'right'}
	class:center={tunes.alignmentTune.alignment === 'center'}
>
	<slot />
</svelte:element>

<style>
	.right {
		text-align: right;
	}

	.center {
		text-align: center;
	}
</style>
