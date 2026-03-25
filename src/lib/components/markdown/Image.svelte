<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = Omit<SvelteHTMLElements['img'], 'class'>;

	const { ...restProps }: Props = $props();
</script>

<img {...restProps} class="mx-auto rounded-lg object-cover" />
