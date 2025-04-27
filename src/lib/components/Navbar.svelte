<script lang="ts">
	interface Props {
		pages: { slug: string; name: string }[];
		route: { id: string | null };
	}

	let { pages, route }: Props = $props();
</script>

<nav class="navbar px-12">
	<div class="flex flex-1 items-center gap-4">
		<div class="avatar avatar-placeholder">
			<div
				class="ring-accent ring-offset-base-100 bg-base-200 text-neutral-content w-10 rounded-full ring ring-offset-2"
			>
				<span>B</span>
			</div>
		</div>
		<h2 class="text-3xl"><b>Benjamin</b> Palko</h2>
	</div>
	<div class="flex gap-4 text-lg">
		{#each pages as page (page.slug)}
			<a href={page.slug} class="link hover:link-accent" class:link-accent={route.id === page.slug}>
				{page.name}
			</a>
		{/each}
	</div>
</nav>
