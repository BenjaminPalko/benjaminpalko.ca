<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageProps } from './$types';
	import { compile } from 'mdsvex';
	import { env } from '$env/dynamic/public';

	let { data }: PageProps = $props();

	let post = $derived(data.post);
</script>

<div class="flex flex-col items-center gap-4">
	<div class="w-full max-w-5xl px-4">
		<p class="text-gray-500">{dayjs(post.published).format('DD MMMM YYYY')}</p>
		<h1 class="text-4xl font-light">{post.title}</h1>
	</div>
	<img
		class="aspect-4/2 w-full object-cover"
		src={`${env.PUBLIC_STRAPI_HOST}${post.image.url}`}
		alt={post.image.alt}
	/>
	<div class="w-full max-w-5xl px-4">
		{#await compile(post.body)}
			<div class="skeleton h-48 w-full"></div>
		{:then content}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html content?.code}
		{/await}
	</div>
</div>
