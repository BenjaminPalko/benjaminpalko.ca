<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import dayjs from 'dayjs';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<div class="w-full max-w-5xl px-4">
		<h1 class="text-4xl font-light">{data.meta.title}</h1>
		<p class="text-neutral-content/40 text-lg font-thin">
			{dayjs(data.meta.date).format('DD MMMM YYYY')}
		</p>
	</div>
	<Image
		src={data.meta.image.url}
		alt={data.meta.image.alt}
		class="aspect-4/2 w-full object-cover"
	/>
	<div class="w-full max-w-5xl">
		<data.content />
	</div>
</div>
