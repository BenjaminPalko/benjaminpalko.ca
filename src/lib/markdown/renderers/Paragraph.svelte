<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<p class="my-3">{@render children?.()}</p>
