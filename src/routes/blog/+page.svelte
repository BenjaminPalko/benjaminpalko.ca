<script lang="ts">
	import { env } from '$env/dynamic/public';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let posts = $derived(data.posts);
</script>

{#if posts.length === 0}
	<h3 class="text-center text-lg font-semibold">Looks like I haven't posted anything yet!</h3>
{/if}

<div class="mx-auto grid gap-8 px-3 py-3 sm:px-8 sm:py-4 lg:grid-cols-2">
	{#each posts as post (post.id)}
		<BlogCard
			documentId={post.documentId}
			img={`${env.PUBLIC_STRAPI_HOST}${post.Header.formats.medium.url}`}
			img-alt={post.Header.alternativeText}
			title={post.Title}
			published={post.publishedAt}
			topics={post.Topics}
		/>
	{/each}
</div>
