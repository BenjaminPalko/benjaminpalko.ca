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
		<p class="text-gray-500">{dayjs(post.createdAt).format('DD MMMM YYYY')}</p>
		<h1 class="text-4xl font-light">{post.Title}</h1>
	</div>
	<img
		class="aspect-4/2 w-full object-cover"
		src={`${env.PUBLIC_STRAPI_HOST}${post.Header.formats.medium.url}`}
		alt={post.Header.alternativeText}
	/>
	<div class="w-full max-w-5xl px-4">
		{#await compile(post.Body)}
			<div class="skeleton h-48 w-full"></div>
		{:then content}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html content?.code}
		{/await}
	</div>
</div>
