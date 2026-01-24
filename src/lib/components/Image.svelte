<script lang="ts">
	import { ImageOff } from '@lucide/svelte';
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		src: string;
		alt?: string;
		class?: ClassValue;
	}

	let { src, alt, class: className }: Props = $props();

	let loading = $state(true);
	let failed = $state(false);

	onMount(() => {});

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loading}
	<div class={twMerge('skeleton rounded-none', clsx(className))}></div>
{:else if failed}
	<div
		class={twMerge('skeleton text-base-content relative rounded-none', clsx(className))}
		transition:fade={{ duration: 250 }}
	>
		<ImageOff
			class="absolute top-[50%] left-[50%] h-1/4 w-1/4 translate-x-[-50%] translate-y-[-50%] opacity-20"
		/>
	</div>
{:else}
	<img
		class={clsx(className)}
		{src}
		{alt}
		onload={() => (loading = false)}
		transition:fade={{ duration: 250 }}
	/>
{/if}
