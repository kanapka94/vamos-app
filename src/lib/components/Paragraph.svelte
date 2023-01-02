<script lang="ts">
	import type { Tunes } from '$lib/types/api';

	export let tunes: Tunes = {};
</script>

<p
	class:right={tunes.alignmentTune.alignment === 'right'}
	class:center={tunes.alignmentTune.alignment === 'center'}
>
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
