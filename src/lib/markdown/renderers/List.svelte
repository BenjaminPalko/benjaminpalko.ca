<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		ordered?: boolean;
		loose?: boolean;
		start?: number;
	}

	const { children, ordered }: Props = $props();
</script>

{#if ordered}
	<ol class="my-2">
		{@render children?.()}
	</ol>
{:else}
	<ul class="my-2">
		{@render children?.()}
	</ul>
{/if}
