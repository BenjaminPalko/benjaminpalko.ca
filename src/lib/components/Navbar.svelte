<script lang="ts">
	interface Props {
		pages: { slug: string; name: string }[];
		route: { id: string | null };
	}

	let { pages, route }: Props = $props();
</script>

<nav class="navbar px-12">
	<div class="flex flex-1 items-center gap-4">
		<a href="/">
			<div class="avatar avatar-placeholder w-12">
				<div
					class="ring-primary ring-offset-base-100 bg-base-200 text-base-content mx-auto w-10 rounded-full text-xl ring-2 ring-offset-2 transition-all ease-in hover:w-12 hover:text-2xl"
				>
					<b>B</b>
				</div>
			</div>
		</a>
		<h2 class="text-3xl"><b>Benjamin</b> Palko</h2>
	</div>
	<div class="flex gap-4 text-lg">
		{#each pages as page (page.slug)}
			<a
				href={page.slug}
				class="link hover:link-accent transition-colors"
				class:link-accent={route.id === page.slug}
			>
				{page.name}
			</a>
		{/each}
	</div>
</nav>
