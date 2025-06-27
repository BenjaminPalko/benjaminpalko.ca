<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		caption?: string;
	}

	let { src, alt, caption }: Props = $props();
</script>

<figure class="flex flex-col">
	<img class="aspect-4/2 w-full object-cover" {src} {alt} />
	{#if caption}
		<figcaption class="mt-2 text-center text-sm text-gray-500 italic">{caption}</figcaption>
	{/if}
</figure>
