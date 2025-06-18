<script lang="ts">
	import dayjs from 'dayjs';
	import resume from '$lib/constants/resume.json';

	type EducationItem = Exclude<typeof education, undefined>[number];
	type ExperienceItem = Exclude<typeof experiences, undefined>[number];
	type SkillItem = Exclude<typeof skills, undefined>[number];

	let education = $derived(
		resume.education?.sort((a, b) => {
			if (dayjs(a.endDate).isBefore(b.startDate)) {
				return 1;
			}
			return -1;
		})
	);
	let experiences = $derived(
		resume.work?.sort((a, b) => {
			if (dayjs(a.endDate).isBefore(b.startDate)) {
				return 1;
			}
			return -1;
		})
	);
	let skills = $derived(resume.skills);
</script>

{#snippet EducationEntry(item: EducationItem)}
	<div class="bg-base-100 rounded p-4">
		<div class="flex items-center gap-2">
			<div class="badge badge-outline badge-primary">
				{dayjs(item.startDate).format('MMM YYYY')} - {item.endDate
					? dayjs(item.endDate).format('MMM YYYY')
					: 'Current'}
			</div>
			<p class="font-light text-gray-400">{item.location}</p>
		</div>
		<div class="flex flex-col gap-2 p-4">
			<h3 class="text-lg font-semibold">{item.studyType}, {item.area}</h3>
			<p>{item.institution}</p>
		</div>
	</div>
{/snippet}

{#snippet ExperienceEntry(item: ExperienceItem)}
	<div class="bg-base-100 rounded p-4">
		<div class="flex items-center gap-2">
			<div class="badge badge-outline badge-primary">
				{dayjs(item.startDate).format('MMM YYYY')} - {item.endDate
					? dayjs(item.endDate).format('MMM YYYY')
					: 'Current'}
			</div>
			<p class="font-light text-gray-400">{item.company}</p>
		</div>
		<div class="flex flex-col gap-2 p-4">
			<h3 class="text-lg font-semibold">{item.position}</h3>
			<p>{item.description}</p>
		</div>
	</div>
{/snippet}

{#snippet SkillEntry(skill: SkillItem)}
	<div class="bg-base-100 rounded p-4">
		<div class="flex items-center gap-2">
			{skill.name}
		</div>
		<div class="flex flex-wrap gap-2 p-4">
			{#each skill.keywords as keyword (keyword)}
				<div class="badge badge-primary">{keyword}</div>
			{/each}
		</div>
	</div>
{/snippet}

<div class="grid w-full gap-4 px-6 py-6 sm:px-8 sm:py-4 lg:grid-cols-2">
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
		{#each education as item (item.location)}
			{@render EducationEntry(item)}
		{/each}
	{/if}

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

	<!-- Skills -->
	<div class="col-span-full">
		<div class="flex flex-col gap-1">
			<h2 class="text-2xl font-light">Skills</h2>
			<div class="bg-base-100 h-0.5 w-48 rounded-full">
				<div class="bg-primary h-0.5 w-1/3 rounded-full"></div>
			</div>
		</div>
	</div>

	{#if !experiences}
		Looks like I have no skills :(
	{:else}
		{#each skills as skill (skill.name)}
			{@render SkillEntry(skill)}
		{/each}
	{/if}
</div>
