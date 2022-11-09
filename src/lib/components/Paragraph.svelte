<script lang="ts">
	import type { Tunes } from '$lib/types/api';

	export let tunes: Tunes = {};
</script>

<p class:right={tunes.alignmentTune === 'right'} class:center={tunes.alignmentTune === 'center'}>
	<slot />
</p>

<style>
	.right {
		text-align: right;
	}

	.center {
		text-align: center;
	}
</style>
