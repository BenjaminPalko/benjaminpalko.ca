<script lang="ts">
	interface Props {
		title: string;
		pages: { slug: string; name: string }[];
		route: { id: string | null };
	}

	let { title, pages, route }: Props = $props();
</script>

<nav class="navbar">
	<div class="flex flex-1 items-center gap-4">
		<a href="/">
			<div class="avatar avatar-placeholder w-12">
				<div
					class="ring-primary ring-offset-base-100 bg-base-200 text-base-content mx-auto w-10 rounded-full ring-2 ring-offset-2 transition-all ease-in hover:w-12 hover:text-2xl"
				>
					<span class="text-2xl"> {title.at(0)} </span>
				</div>
			</div>
		</a>
		<h2 class="text-primary text-3xl font-light">
			<span class="text-base-content font-semibold">Benjamin</span>
			Palko
		</h2>
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
