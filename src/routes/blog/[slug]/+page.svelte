<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import dayjs from 'dayjs';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<div class="w-full max-w-5xl px-4">
		<p class="text-gray-500">{dayjs(data.meta.date).format('DD MMMM YYYY')}</p>
		<h1 class="text-4xl font-light">{data.meta.title}</h1>
	</div>
	<Image src={data.meta.image.url} alt={data.meta.image.alt} />
	<div class="w-full max-w-5xl px-4">
		<data.content class="content" />
	</div>
</div>

<style>
	.content {
		* code {
			@apply bg-base-200 border-base-300 text-base-content rounded-lg border-l-4 p-4 text-gray-700;
		}
	}
</style>
