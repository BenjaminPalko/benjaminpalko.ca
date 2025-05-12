<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { Braces } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let about = $derived(data.about!);

	type ActivityItem = Exclude<typeof about.activities, undefined>[number];
</script>

{#snippet Activity(item: ActivityItem)}
	<div class="flex flex-col gap-4 lg:flex-row">
		<Braces size={48} class="text-primary" />
		<div class="flex flex-col">
			<h3 class="text-xl">{item.title}</h3>
			<p class="max-w-2xl">
				{item.description}
			</p>
		</div>
	</div>
{/snippet}

<div class="flex flex-col items-center px-6 md:px-12">
	<div class="lg:py-48">
		<Hero photo={about.photo.url} titles={about.titles} name={about.name} description={about.bio} />
	</div>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div class="col-span-full">
			<h2 class="border-primary w-fit border-b text-2xl font-light">What I Do</h2>
		</div>
		{#each about.activities as activity (activity.title)}
			{@render Activity(activity)}
		{/each}
	</div>
</div>
