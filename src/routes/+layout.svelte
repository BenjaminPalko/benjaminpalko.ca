<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();

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

<div class="h-screen w-screen p-12">
	<div
		class="bg-base-200 grid min-h-full grid-rows-[max-content_max-content_auto_max-content] rounded-4xl"
	>
		<header class=" p-8">
			<Navbar title="Benjamin Palko" {pages} route={page.route} />
		</header>
		{#if current && current.slug !== '/'}
			<div class="bg-base-300 w-full px-12 py-8">
				<h1 class="text-4xl font-light">{current.name}</h1>
			</div>
		{/if}
		<main>
			{@render children()}
		</main>
		<footer class="p-8">
			<Footer links={socialLinks} />
		</footer>
	</div>
</div>
