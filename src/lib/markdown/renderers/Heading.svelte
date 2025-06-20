<script lang="ts">
	interface Props {
		depth: number;
		text: string;
	}

	const { depth, text }: Props = $props();
</script>

{#if depth === 1}
	<h1 class="my-3 text-4xl font-bold">{text}</h1>
{:else if depth === 2}
	<h2 class="my-2 text-3xl font-bold">{text}</h2>
{:else if depth === 3}
	<h3 class="my-2 text-2xl font-semibold">{text}</h3>
{:else if depth === 4}
	<h4 class="my-1 text-xl font-semibold">{text}</h4>
{:else if depth === 5}
	<h5 class="my-1 text-lg font-medium underline">{text}</h5>
{:else if depth === 6}
	<h6 class="my-1 font-medium underline">{text}</h6>
{/if}
