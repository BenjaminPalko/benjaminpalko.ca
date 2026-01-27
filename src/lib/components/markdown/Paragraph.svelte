<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['p'];

	const { children, class: className, ...props }: Props = $props();
</script>

<p {...props} class={twMerge('text-base-content my-3', clsx(className))}>
	{@render children?.()}
</p>
