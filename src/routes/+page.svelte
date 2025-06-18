<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { activities, description, name, titles } from '$lib/constants/about';
</script>

<div class="grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-12">
	<div class="col-span-full lg:py-36">
		<Hero photo="/me.webp" {titles} {name} {description} />
	</div>
	<div class="col-span-full">
		<h2 class="border-primary w-fit border-b text-2xl font-light">What I Do</h2>
	</div>
	{#each activities as item (item.title)}
		<div class="flex flex-col gap-4 lg:flex-row">
			<item.icon size={48} class="text-primary" />
			<div class="flex flex-col">
				<h3 class="text-xl">{item.title}</h3>
				<p class="max-w-2xl">
					{item.description}
				</p>
			</div>
		</div>
	{/each}
</div>
