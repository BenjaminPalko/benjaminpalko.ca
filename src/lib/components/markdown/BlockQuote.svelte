<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = Omit<SvelteHTMLElements['blockquote'], 'class'>;

	const { children, ...props }: Props = $props();
</script>

<blockquote {...props} class="alert alert-soft my-4">
	{@render children?.()}
</blockquote>
