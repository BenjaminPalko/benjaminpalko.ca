<script lang="ts">
	import { Menu } from '@lucide/svelte';

	interface Props {
		drawerId: string;
		title: string;
		pages: { slug: string; name: string }[];
		route: { id: string | null };
	}

	let { drawerId, title, pages, route }: Props = $props();
</script>

<nav class="navbar">
	<div class="flex flex-1 items-center gap-4">
		<a href="/">
			<div class="avatar avatar-placeholder animate-pulse">
				<div
					class="ring-primary ring-offset-base-100 bg-base-200 text-base-content mx-auto w-8 rounded-full ring-2 ring-offset-2 transition-all ease-in hover:text-2xl lg:w-12"
				>
					<span class="text-xl lg:text-2xl"> {title.at(0)} </span>
				</div>
			</div>
		</a>
		<h2 class="text-primary text-2xl font-light lg:text-3xl">
			<span class="text-base-content font-semibold">Benjamin</span>
			Palko
		</h2>
	</div>
	<label for={drawerId} aria-label="open sidebar" class="btn btn-square btn-outline lg:hidden">
		<Menu />
	</label>
	<div class="hidden gap-4 text-lg lg:flex">
		{#each pages as page (page.slug)}
			<a
				href={page.slug}
				class="link hover:link-secondary transition-colors"
				class:link-secondary={route.id === page.slug}
			>
				{page.name}
			</a>
		{/each}
	</div>
</nav>
