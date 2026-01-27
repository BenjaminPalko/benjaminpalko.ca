<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['h2'];

	const { children, class: className, ...props }: Props = $props();
</script>

<h2
	{...props}
	class={twMerge(
		'before:border-l-secondary bg-base-200/60 my-3 w-full overflow-hidden rounded-lg py-2 text-2xl font-light before:mr-4 before:border-l-6 before:py-8',
		clsx(className)
	)}
>
	{@render children?.()}
</h2>
