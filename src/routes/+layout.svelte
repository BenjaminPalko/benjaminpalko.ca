<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigating, page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();

	let drawerOpen = $state(false);

	if (navigating) {
		drawerOpen = false;
	}

	const pages = [
		{ slug: '/', name: 'About Me' },
		{ slug: '/resume', name: 'Resume' },
		{ slug: '/blog', name: 'Blog' },
		{ slug: '/projects', name: 'Projects' },
		{ slug: '/contact', name: 'Contact' }
	];

	const socialLinks = [
		{ name: 'Github', href: 'https://github.com/BenjaminPalko' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/benjaminpalko/' },
		{ name: 'Itch.io', href: 'https://baobeld.itch.io/' },
		{ name: 'Ko-fi', href: 'https://ko-fi.com/baobeld' }
	];
	let current = $derived(pages.find((p) => p.slug === page.route.id));
</script>

<div class="drawer drawer-end">
	<input id="navigation-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />

	<div class="drawer-content h-screen w-screen lg:p-12">
		<div
			class="bg-base-200 grid min-h-full grid-rows-[max-content_max-content_auto_max-content] overflow-hidden lg:gap-4 lg:rounded-4xl"
		>
			<header class="lg:p-6">
				<Navbar drawerId="navigation-drawer" title="Benjamin Palko" {pages} route={page.route} />
			</header>
			<div>
				{#if current && current.slug !== '/'}
					<div class="bg-base-300 w-full px-6 py-4 lg:px-12 lg:py-8">
						<h1 class="text-2xl font-light lg:text-4xl">{current.name}</h1>
					</div>
				{/if}
			</div>
			<main>
				{@render children()}
			</main>
			<footer class="p-2 lg:p-6">
				<div class="flex justify-between text-xs lg:text-lg">
					<div class="flex gap-2 lg:gap-8">
						{#each socialLinks as link (link.href)}
							<a
								href={link.href}
								target="_blank"
								class="hover:text-base-content text-slate-600 transition-colors">{link.name}</a
							>
						{/each}
					</div>
					<p class="text-slate-600">© 2025 Benjamin Palko</p>
				</div>
			</footer>
		</div>
	</div>

	<div class="drawer-side">
		<label for="navigation-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<div class="menu bg-base-200 flex min-h-full w-full flex-col justify-between p-4">
			<ul class="flex flex-col gap-4">
				{#each pages as page (page.slug)}
					<li>
						<button
							class="btn btn-primary btn-soft btn-lg"
							onclick={() => {
								goto(page.slug);
								drawerOpen = false;
							}}>{page.name}</button
						>
					</li>
				{/each}
			</ul>

			<div class="flex flex-col gap-4">
				<h2 class="text-primary text-center text-4xl font-light lg:text-3xl">
					<span class="text-base-content font-semibold">Benjamin</span>
					Palko
				</h2>
				<label for="navigation-drawer" class="btn btn-error btn-soft btn-lg">Close</label>
			</div>
		</div>
	</div>
</div>
