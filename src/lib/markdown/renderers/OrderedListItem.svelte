<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		task?: boolean;
		checked?: boolean;
		listItemIndex: number;
	}

	const { children, task, checked: initial = false, listItemIndex, ...rest }: Props = $props();

	let checked = $derived(initial);
</script>

<li class="ml-2">
	{listItemIndex + 1}. {#if task}
		<input
			type="checkbox"
			class="mr-2"
			class:hidden={!task}
			{checked}
			onclick={() => {
				checked = !checked;
			}}
		/>{/if}{@render children?.()}
</li>
