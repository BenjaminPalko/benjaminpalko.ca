<script lang="ts">
	interface Props {
		depth: number;
		text: string;
	}

	const { depth, text }: Props = $props();
</script>

{#if depth === 1}
	<h1 class="mb-4 text-5xl font-bold underline">{text}</h1>
{:else if depth === 2}
	<h2 class="mb-3 text-4xl font-bold underline">{text}</h2>
{:else if depth === 3}
	<h3 class="mb-2 text-3xl font-semibold underline">{text}</h3>
{:else if depth === 4}
	<h4 class="mb-1 text-2xl font-semibold underline">{text}</h4>
{:else if depth === 5}
	<h5 class="mb-0.5 text-xl font-medium underline">{text}</h5>
{:else if depth === 6}
	<h6 class="mb-0.5 text-lg font-medium underline">{text}</h6>
{/if}
