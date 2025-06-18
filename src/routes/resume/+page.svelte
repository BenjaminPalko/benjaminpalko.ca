<script lang="ts">
	import dayjs from 'dayjs';
	import type { PageProps } from './$types';
	import { Briefcase, Heart, Zap } from '@lucide/svelte';

	let { data }: PageProps = $props();

	type ExperienceItem = Exclude<typeof experiences, undefined>[number];
	type EducationItem = Exclude<typeof education, undefined>[number];

	let experiences = $derived(
		data.experiences?.sort((a, b) => {
			if (dayjs(a.endDate).isBefore(b.startDate)) {
				return 1;
			}
			return -1;
		})
	);
	let education = $derived(
		data.education?.sort((a, b) => {
			if (dayjs(a.endDate).isBefore(b.startDate)) {
				return 1;
			}
			return -1;
		})
	);
</script>

{#snippet ExperienceEntry(item: ExperienceItem)}
	<div class="bg-base-100 rounded">
		<div class="flex items-center gap-2">
			<div class="badge badge-outline badge-primary">
				{dayjs(item.startDate).format('MMM YYYY')} - {item.endDate
					? dayjs(item.endDate).format('MMM YYYY')
					: 'Current'}
			</div>
			<p class="font-light text-gray-400">{item.company}</p>
		</div>
		<div class="flex flex-col gap-2 p-4">
			<h3 class="text-lg font-semibold">{item.title}</h3>
			<p>{item.description}</p>
		</div>
	</div>
{/snippet}

{#snippet EducationEntry(item: EducationItem)}
	<div class="bg-base-100 rounded">
		<div class="flex items-center gap-2">
			<div class="badge badge-outline badge-primary">
				{dayjs(item.startDate).format('MMM YYYY')} - {item.endDate
					? dayjs(item.endDate).format('MMM YYYY')
					: 'Current'}
			</div>
			<p class="font-light text-gray-400">{item.institute}</p>
		</div>
		<div class="flex flex-col gap-2 p-4">
			<h3 class="text-lg font-semibold">{item.field}</h3>
			<p>{item.description}</p>
		</div>
	</div>
{/snippet}

<div class="grid w-full gap-4 px-6 py-6 sm:px-8 sm:py-4 lg:grid-cols-2">
	<!-- Experience -->
	<div class="col-span-full">
		<div class="flex flex-col gap-1">
			<h2 class="text-2xl font-light">Experience</h2>
			<div class="bg-base-100 h-0.5 w-48 rounded-full">
				<div class="bg-primary h-0.5 w-1/3 rounded-full"></div>
			</div>
		</div>
	</div>

	{#if !experiences}
		Looks like I have no experience :(
	{:else}
		{#each experiences as item (item.company)}
			{@render ExperienceEntry(item)}
		{/each}
	{/if}

	<!-- Education -->
	<div class="col-span-full">
		<div class="flex flex-col gap-1">
			<h2 class="text-2xl font-light">Education</h2>
			<div class="bg-base-100 h-0.5 w-48 rounded-full">
				<div class="bg-primary h-0.5 w-1/3 rounded-full"></div>
			</div>
		</div>
	</div>

	{#if !education}
		Looks like I have no education :(
	{:else}
		{#each education as item (item.field)}
			{@render EducationEntry(item)}
		{/each}
	{/if}
</div>
