<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['ol'];

	const { children, ...props }: Props = $props();
</script>

<ol {...props} class="ml-8 list-decimal">
	{@render children?.()}
</ol>
