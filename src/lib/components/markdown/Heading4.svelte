<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['h4'];

	const { children, class: className, ...props }: Props = $props();
</script>

<h4
	{...props}
	class={twMerge(
		'before:border-l-neutral bg-base-200/40 relative my-3 w-full overflow-hidden rounded-lg py-2 pl-4 text-lg before:absolute before:top-0 before:left-0 before:h-full before:border-l-6 before:py-8',
		clsx(className)
	)}
>
	{@render children?.()}
</h4>
