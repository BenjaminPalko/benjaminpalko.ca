<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let posts = $derived(data.posts);
</script>

{#if !posts || posts.length === 0}
	<h3 class="text-center text-lg font-semibold">Looks like I haven't posted anything yet!</h3>
{:else}
	<div class="mx-auto grid gap-8 px-3 py-3 sm:px-8 sm:py-4 lg:grid-cols-2">
		{#each posts as post (post.id)}
			<BlogCard
				id={post.id}
				img={post.image.url}
				img-alt={post.image.alt}
				title={post.title}
				published={post.published}
				topics={post.topics}
			/>
		{/each}
	</div>
{/if}
