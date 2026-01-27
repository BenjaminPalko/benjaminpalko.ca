<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = Omit<SvelteHTMLElements['a'], 'class'>;

	const { href, children }: Props = $props();
</script>

<a {href} target="_blank" class="link link-primary">
	{@render children?.()}
</a>
