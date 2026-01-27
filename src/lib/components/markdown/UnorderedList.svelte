<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['ul'];

	const { children, ...props }: Props = $props();
</script>

<ul {...props} class="ml-8 list-disc">
	{@render children?.()}
</ul>
