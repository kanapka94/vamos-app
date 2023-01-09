<script lang="ts">
	export let title: string;
</script>

<h1>{title}</h1>

<style lang="scss">
	h1 {
		display: flex;
		font-size: 3rem;
		margin-bottom: 2em;
		text-shadow: 2px 1px #5b5b5b;

		&::before {
			content: '';
			margin-right: 1rem;
			border-left: 0.8rem solid var(--color);
		}

		@include mobile {
			font-size: 2.5rem;
			margin-bottom: 1em;
		}
	}
</style>
