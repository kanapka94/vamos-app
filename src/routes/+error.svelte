<script>
	import { page } from '$app/stores';
	import image from '$lib/assets/404.svg';
</script>

<img src={image} alt="" />
<h1>Błąd {$page.status}</h1>
<p>{$page.error.message}</p>

<style>
	img {
		max-width: 50%;
		display: block;
		margin: 5rem auto;
	}

	h1,
	p {
		text-align: center;
	}
</style>
