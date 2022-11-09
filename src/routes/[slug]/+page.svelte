<script lang="ts">
	import type { Status } from '$lib/types/api';
	import type { PageServerData } from './$types';

	interface Page {
		id: number;
		status: Status;
	}

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data.page.title} - Vamos</title>
</svelte:head>
